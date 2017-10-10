import ajax from './ajax';

class Vr {
    constructor(vr_container) {
        this.vr_container = vr_container;
        this.state = {
            vr_loaded: false
        }
    }

    events() {
        // window.addEventListener('scroll', () => {
        //     this.state.scroll = true;
        // });
        // this.nav_toggle.addEventListener('click', () => {
        //     this.mobileNavToggle();
        //
        // });
    }

    _loadAframe() {
        this._addAframeScript()
            .then(this._triggerDOMContentLoadedEvent)
            .then(() => ajax('aframe/portfolio.html', 'GET', 'text'))
            .then((data) => {
                this.vr_container.innerHTML = data;
                this.state.vr_loaded = true;
            });
    }

    _addAframeScript() {
        return new Promise(function (resolve, reject) {
            const aframe_script = document.createElement('script');
            aframe_script.setAttribute('src', '/aframe/aframe.min.js');
            document.querySelector('body').appendChild(aframe_script);
            aframe_script.addEventListener('load', () => {
                resolve('test');
            });
        });
    }

    _triggerDOMContentLoadedEvent() {
        const DOMContentLoaded_event = document.createEvent("Event");
        DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true);
        window.document.dispatchEvent(DOMContentLoaded_event);
    }

    init() {
        // this.events();


    }
}

export default Vr;
