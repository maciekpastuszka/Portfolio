class Layers {
    constructor(layer_container) {
        this.layer_container = layer_container;
        this.layers = layer_container.querySelectorAll('.layer');
        this.hero = document.querySelector('.hero');
        this.inclination_state = {};
    }

    _moveLayer(layer, layer_inclination) {
        let layer_id = layer.getAttribute('data-id');

        if (layer_inclination != this.inclination_state[layer_id]) {
            this.inclination_state[layer_id] = layer_inclination;
            layer.style.transform = `translateX(${layer_inclination}px)`;
        }
    }

    _calcInclination(cursor_position) {
        let half_page_width = window.innerWidth / 2;
        let cursor_inclination = cursor_position - half_page_width;
        let cursor_inclination_percentage = cursor_inclination / half_page_width;

        this.layers.forEach((layer) => {
            let layer_range = layer.getAttribute('data-range');
            let layer_width = layer.offsetWidth;
            let layer_inclination = parseInt(layer_range * cursor_inclination_percentage - layer_width * 0.1);
            this._moveLayer(layer, layer_inclination);
        });
    }

    _mouseEventDebounce() {
        let scrollInit = false;
        let event = null;

        this.hero.addEventListener('mousemove', (e) => {
            event = e;
            scrollInit = true;
        });

        setInterval(() => {
            if (scrollInit) {
                scrollInit = false;
                this._calcInclination(event.pageX);
            }
        }, 100);
    }

    init() {
        if (this.layer_container) {
            this._mouseEventDebounce();
        }
    }
}

export default Layers;
