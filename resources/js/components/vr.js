import ajax from './ajax';

class Vr {
    constructor(vr_container) {
        this.vr_container = vr_container;
        this.vr_show_btn = document.querySelector('.hero__btn--vr');
        this.vr_loader = document.querySelector('.hero__vr-loader');
        this.hero_layers = document.querySelector('.hero__layers');
        this.hero_container = document.querySelector('.hero__container');
        this.state = {
            vr_loaded: false
        }
    }

    _addAframeScript() {
        return new Promise((resolve, reject) => {
            const aframe_script = document.createElement('script');
            aframe_script.setAttribute('src', '/aframe/aframe.min.js');
            document.querySelector('body').appendChild(aframe_script);
            aframe_script.addEventListener('load', () => {
                resolve();
            });
        });
    }

    _triggerDOMContentLoadedEvent() {
        const DOMContentLoaded_event = document.createEvent("Event");
        DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true);
        window.document.dispatchEvent(DOMContentLoaded_event);
    }

    _toggleVrMode() {
        console.log('toggle vr mode');
        this.hero_layers.classList.toggle('hero__layers--hidden');
        this.hero_container.classList.toggle('hero__container--hidden');
    }

    _loadAframe() {
        return new Promise((resolve) => {
            if (!this.state.vr_loaded) {
                /**
                 * Start loading, fetch script and run aframe then show VR mode
                 */
                this.vr_loader.classList.add('hero__vr-loader--start');
                this._addAframeScript()
                    .then(this._triggerDOMContentLoadedEvent)
                    .then(() => ajax('aframe/portfolio.html', 'GET', 'text'))
                    .then((data) => {
                        this.vr_container.innerHTML = data;
                        this.state.vr_loaded = true;
                        this.vr_loader.classList.add('hero__vr-loader--complete');
                        resolve('script loaded');
                    });
            } else {
                /**
                 * Just show VR mode
                 */
                resolve('show vr mode');
            }
        });
    }

    _events() {
        this.vr_show_btn.addEventListener('click', () => {
            this._loadAframe().then(() => {
                this._toggleVrMode();
            });
        });
    }

    init() {
        this._events();
    }
}

export default Vr;
