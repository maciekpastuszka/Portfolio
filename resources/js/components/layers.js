class Layers {
    constructor(layer_container) {
        this.layer_container = layer_container;
        this.layers = layer_container.querySelectorAll('.layer');
        this.hero = document.querySelector('.hero');
    }

    _moveLayer() {
        this.layers.forEach((layer) => {

        });
    }

    _mouseEventDebounce() {
        let scrollInit = false;
        let event = null;

        this.hero.addEventListener('mousemove', (e) => {
            event = e;
            scrollInit = true;
            console.log('move e');
        });
        setInterval(() => {
            if (scrollInit) {
                console.log('move');
                scrollInit = false;
                this._moveLayer(event);
            }
        }, 50);
    }

    _events() {

    }

    init() {
        if (this.layer_container) {
            this._events();
            this._mouseEventDebounce();
        }
    }
}

export default Layers;
