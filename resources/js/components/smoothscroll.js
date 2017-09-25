class SmoothScroll {
    constructor() {
        this.time = 1;
        this.speed = 0.5;
        this.scroll_animation_interval = {};
    }

    animate_scroll(start_position, target_position) {
        this.time += this.speed;
        if (start_position < target_position) {
            document.body.scrollTop += this.time;
            if (document.body.scrollTop > target_position) {
                clearInterval(this.scroll_animation_interval);
                this.time = 0;
            }
        } else {
            document.body.scrollTop -= this.time;
            if (document.body.scrollTop < target_position) {
                clearInterval(this.scroll_animation_interval);
                this.time = 0;
            }
        }
    }

    scrollTo(target_id) {
        let target = document.querySelector(`#${target_id}`);
        let start_position = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let target_position = target.offsetTop - 100;

        this.scroll_animation_interval = setInterval(() => {
            this.animate_scroll(start_position, target_position);
        }, 1);
    }

    events() {
        // var target_name = link.hash.substr(1)
        // for (i = 0; i < a.length; i++) {
//             a[i].addEventListener('click', function (e) {
//                 e.preventDefault();
//
//                 scrollTo(this);
//             });
//         }
    }

    init() {

    }
}

export  default SmoothScroll;