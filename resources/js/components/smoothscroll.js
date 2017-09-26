class SmoothScroll {
    constructor() {
        this.speed = 0.5;
    }

    scroll(target_id) {
        let target = document.querySelector(`#${target_id}`);
        let start_position = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let target_position = target.offsetTop - 100;
        let time = 0;

        return new Promise((resolve, reject) => {
            const scroll_animation_interval = setInterval(() => {
                time += this.speed;
                if (start_position < target_position) {
                    document.body.scrollTop += time;
                    if (document.body.scrollTop > target_position) {
                        clearInterval(scroll_animation_interval);
                        resolve('scrolled');
                    }
                } else {
                    document.body.scrollTop -= time;
                    if (document.body.scrollTop < target_position) {
                        clearInterval(scroll_animation_interval);
                        resolve('scrolled');
                    }
                }
            }, 1);
        });
    }

    scrollTo(target_id) {
        this.scroll(target_id)
            .then(result => console.log(result));

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