import ajax from './ajax';

class Vr {
    constructor(vr_container) {
        this.vr_container = vr_container;
        this.vr_show_btn = document.querySelector('.hero__btn--vr');
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
    }

    _loadAframe() {
        return new Promise((resolve) => {
            if (!this.state.vr_loaded) {
                /**
                 * Start loading, fetch script and run aframe then show VR mode
                 */

                // start loader
                this._addAframeScript()
                    .then(this._triggerDOMContentLoadedEvent)
                    .then(() => ajax('aframe/portfolio.html', 'GET', 'text'))
                    .then((data) => {
                        this.vr_container.innerHTML = data;
                        this.state.vr_loaded = true;
                        //end loader

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
            this._loadAframe().then(this._toggleVrMode);
        });
    }

    init() {
        this._events();
    }
}

export default Vr;
