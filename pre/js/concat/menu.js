define('menu', function () {
    //menu on scroll
    window.addEventListener("scroll", function () {
        var main_nav = document.querySelector(".main-nav"),
            scroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        //if scroll is more than 20 change navigation bar
        if (scroll >= 20) {
            main_nav.classList.add("is-move");
        } else {
            main_nav.classList.remove("is-move");
        }
    });

    //mobile navigation toggle
    var nav_toggle = document.querySelector(".main-nav__toggle"),
        nav = document.querySelector(".main-nav__colapse"),
    circle = document.querySelector(".main-nav__circle");

    //toggle menu on click
    nav_toggle.addEventListener("click", function () {
        this.classList.toggle("is-open");
        nav.classList.toggle("is-open");
        circle.classList.toggle("is-open");
    });
});


//
//
//var scrollTimeout;  // global for any pending scrollTimeout
//var outerPane = $details.find(".details-pane-outer");
//$(window).scroll(function () {
//    if (scrollTimeout) {
//        // clear the timeout, if one is pending
//        clearTimeout(scrollTimeout);
//        scrollTimeout = null;
//    }
//    scrollTimeout = setTimeout(scrollHandler, 250);
//});
//scrollHandler = function () {
//    // Check your page position and then
//    // Load in more results
//    // outerPane.html();
//};
