define('menu', function () {
    var main_nav = document.querySelector(".main-nav"),
        nav_toggle = main_nav.querySelector(".main-nav__toggle"),
        nav = main_nav.querySelector(".main-nav__colapse"),
        circle = main_nav.querySelector(".main-nav__circle");

    var menuMove = function () {
        var scroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        /*
        if scroll is more than 20 change navigation bar
        */
        if (scroll >= 20) {
            main_nav.classList.add("is-move");
        } else {
            main_nav.classList.remove("is-move");
        }
    };

    var mobileNavToggle = function () {
        nav_toggle.classList.toggle("is-open");
        nav.classList.toggle("is-open");
        circle.classList.toggle("is-open");
    };

    var scrollEvent = function () {
        var scrollInit = false;
        window.addEventListener("scroll", function () {
            scrollInit = true;
        });
        setInterval(function () {
            if (scrollInit) {
                scrollInit = false;
                menuMove();
            }
        }, 250);
    };

    var events = function () {
        scrollEvent();
        nav_toggle.addEventListener("click", mobileNavToggle);
    };

    var init = function () {
        events();
    };

    init();

    //API
    return {
        init: init
    }
});