class Navigation {
    constructor(nav) {
        this.nav = nav;
        this.nav_toggle = nav.querySelector('.main-nav__toggle');
        this.nav_colapse = nav.querySelector('.main-nav__colapse');
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

    events() {
        window.addEventListener('scroll', () => {
            this.state.scroll = true;
        });
    }

    init() {
        this.events();
        this.scroll();
    }
}

export default Navigation;
//
//
// define('menu', function () {
//     var main_nav = document.querySelector('.main-nav'),
//         nav_toggle = main_nav.querySelector('.main-nav__toggle'),
//         nav = main_nav.querySelector('.main-nav__colapse'),
//         circle = main_nav.querySelector('.main-nav__circle');
//
//     var menuMove = function () {
//         var scroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//         /*
//          if scroll is more than 20 change navigation bar
//          */
//         if (scroll >= 20) {
//             main_nav.classList.add('is-move');
//         } else {
//             main_nav.classList.remove('is-move');
//         }
//     };
//
//     var mobileNavToggle = function () {
//         nav_toggle.classList.toggle('is-open');
//         nav.classList.toggle('is-open');
//         circle.classList.toggle('is-open');
//     };
//
//     var scrollEvent = function () {
//         var scrollInit = false;
//         window.addEventListener('scroll', function () {
//             scrollInit = true;
//         });
//         setInterval(function () {
//             if (scrollInit) {
//                 scrollInit = false;
//                 menuMove();
//             }
//         }, 250);
//     };
//
//     var events = function () {
//         scrollEvent();
//         nav_toggle.addEventListener('click', mobileNavToggle);
//     };
//
//     var init = function () {
//         events();
//     };
//
//     init();
// });