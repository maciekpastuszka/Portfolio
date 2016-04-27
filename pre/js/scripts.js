(function () {
    //header layers
    var elements = [{
            id: "layer0",
            maxrange: -3
},
        {
            id: "layer1",
            maxrange: 5
},
        {
            id: "layer2",
            maxrange: 7
},
        {
            id: "layer3",
            maxrange: 10
},
        {
            id: "layer4",
            maxrange: 12
},
        {
            id: "layer5",
            maxrange: 16
}];

    function getMouseX(e) {
        var pageX = e.pageX,
            windowWidth = window.innerWidth,
            halfWindow = windowWidth / 2;

        for (i = 0; i < elements.length; i++) {
            var element = elements[i],
                move = 0,
                dom_element = document.getElementById(element.id),
                actual_move = 0;

            objectRange = windowWidth * (element.maxrange / 100);
            move = (((pageX - halfWindow) / halfWindow) * -objectRange) - windowWidth / 10;
            dom_element.style.transform = "translateX(" + move + "px)";

        }
    }

    var header = document.getElementById("header");
    header.onmousemove = getMouseX;

    //mobile navigation toggle
    var nav_toggle = document.querySelector(".main-nav__toggle"),
        nav = document.querySelector(".main-nav__colapse")
    circle = document.querySelector(".main-nav__circle");

    //toggle menu on click
    nav_toggle.addEventListener("click", function () {
        this.classList.toggle("is-open");
        nav.classList.toggle("is-open");
        circle.classList.toggle("is-open");
    });

    //menu on scroll
    window.addEventListener("scroll", function () {

        var main_nav = document.querySelector(".main-nav"),
            scroll = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;

        //if scroll is more than 20 change navigation bar
        if (scroll >= 20) {
            main_nav.classList.add("is-move");
        } else {
            main_nav.classList.remove("is-move");
        }
    });




    var toggle_view = document.querySelector(".realization__switcher"),
        screen = document.querySelector(".screen"),
        switcher__phone = toggle_view.querySelector(".realization__switcher__phone"),
        switcher__desktop = toggle_view.querySelector(".realization__switcher__desktop");

    toggle_view.addEventListener("click", function () {

        switcher__phone.classList.toggle("is-active");
        switcher__desktop.classList.toggle("is-active");

        screen.classList.toggle("is-phone");
    });


    var portfolio__more = document.getElementById("portfolio__more"),
        portfolio__element = document.querySelectorAll(".portfolio__element");

    portfolio__more.addEventListener("click", function () {
        for (i = 0; i < portfolio__element.length; i++) {
            portfolio__element[i].classList.remove("is-display-none");
        }
        this.style.display = "none";
    });



}());



/*

var a = document.querySelectorAll('a[href*="#"]');
for (i = 0; i < a.length; i++) {

    a[i].addEventListener("click", function () {
          var target_name = this.hash.substr(2); 
        
        console.log(target_name);
        var target = document.getElementById(target_name);
        
         console.log(target.offsetTop);
         document.body.scrollTop = target.offsetTop;
            
    });
}

*/

/*
$(function () {




    $('a[href*="#"]:not([href="#"])').click(function () {
   
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});*/