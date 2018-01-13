import Promise from 'es6-promise';

class SmoothScroll {
    constructor(speed = 0.5) {
        this.speed = speed;
        this.links = document.querySelectorAll('.js-anchor');
    }

    scroll(target_id) {
        let target = document.querySelector(`#${target_id}`);
        let start_position = document.documentElement.scrollTop;
        let target_position = target.offsetTop - 100;
        let time = 0;

        return new Promise((resolve, reject) => {
            const scroll_animation_interval = setInterval(() => {
                time += this.speed;
                if (start_position < target_position) {
                    document.documentElement.scrollTop += time;
                    if (document.documentElement.scrollTop > target_position || document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
                        clearInterval(scroll_animation_interval);
                        resolve('scrolled');
                    }
                } else {
                    document.documentElement.scrollTop -= time;
                    if (document.documentElement.scrollTop < target_position) {
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
        for (let i = 0; i < this.links.length; i++) {
            let link = this.links[i];
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollTo(link.hash.substr(1));
            });
        }
    }

    init() {
        this.events();
    }
}

export default SmoothScroll;
