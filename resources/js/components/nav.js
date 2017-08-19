class Navigation {
    constructor(nav) {
        this.nav = nav;
        this.nav_toggle = nav.querySelector('.main-nav__toggle');
        this.nav_colapse = nav.querySelector('.js-main-nav__colapse');
        this.nav_circle = nav.querySelector('.main-nav__circle');
        this.state = {
            scroll: true
        };
    }

    scroll() {
        setInterval(() => {
            if (this.state.scroll) {
                this.state.scroll = false;
                this.menuMove();
            }
        }, 250);
    }

    menuMove() {
        const scroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if (scroll >= 20) {
            this.nav.classList.add('is-move');
        } else {
            this.nav.classList.remove('is-move');
        }
    }

    mobileNavToggle() {
        this.nav_toggle.classList.toggle('is-open');
        this.nav_colapse.classList.toggle('is-open');

        console.log(this.nav_colapse);
    }

    events() {
        window.addEventListener('scroll', () => {
            this.state.scroll = true;
        });
        this.nav_toggle.addEventListener('click', () => {
            this.mobileNavToggle();
        });
    }

    init() {
        this.events();
        this.scroll();
    }
}

export default Navigation;