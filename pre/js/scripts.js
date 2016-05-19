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

    //horizontal paralax on mouse
    function paralax(e) {
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
    header.onmousemove = paralax;

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



    //toggle realization view
    var toggle_view = document.querySelector(".realization__switcher"),
        screen = document.querySelector(".screen");

    toggle_view.addEventListener("click", function () {
        toggle_view.classList.toggle("is-phone");
        screen.classList.toggle("is-phone");
    });


    //portfolio show more
    var portfolio__more = document.getElementById("portfolio__more"),
        portfolio__element = document.querySelectorAll(".portfolio__element");
    portfolio__more.addEventListener("click", function () {
        for (i = 0; i < portfolio__element.length; i++) {
            portfolio__element[i].classList.remove("is-display-none");
        }
        this.style.display = "none";
    });

}());

(function () {
    var realization__container = document.querySelector(".realization"),
        realization__close = document.getElementById("realization__close"),
        icon__more = document.querySelectorAll(".icon--more"),
        realization_title = document.getElementById("realization_title"),
        realization_url = document.getElementById("realization_url"),
        realization_desktop = document.getElementById("realization_desktop"),
        realization_phone = document.getElementById("realization_phone"),
        realization_description = document.getElementById("realization_description"),
        realization_technologies = document.getElementById("realization_technologies");

    function ajax(options) {
        options = {
            type: options.type || "POST",
            url: options.url || "",
            data: options.data,
            onComplete: options.onComplete || function () {},
            onError: options.onError || function () {},
            onSuccess: options.onSuccess || function () {},
            dataType: options.dataType || "text"
        };

        var xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (httpSuccess(xhr)) {
                    var returnData = (options.dataType == "xml") ? xhr.responseXML : xhr.responseText
                    options.onSuccess(returnData);
                } else {
                    options.onError();
                }
                options.onComplete();
                xhr = null;
            }
        };

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(options.data);

        function httpSuccess(r) {
            try {
                return (r.status >= 200 && r.status < 300 || r.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof r.status == "undefined")
            } catch (e) {
                return false;
            }
        }
    }

    function get_realization(id) {
        ajax({
            type: "GET",
            url: "realizations.php?realization=" + id,
            dataType: "text",
            onError: function (msg) {
                console.warn(msg);
                /* wynik.innerHTML = "<div class=\"alert warning\">Coś poszło nie tak.</div>";*/
            },
            onSuccess: function (msg) {
                var realization = JSON.parse(msg),
                    technologies = "";
                for (i = 0; i < realization.technologies.length; i++) {
                    technologies += '<li>' + realization.technologies[i] + '</li>';
                }


                realization__container.id = 'is-' + id;
                realization_title.innerHTML = realization.name;
                realization_url.innerHTML = '<a href="http://' + realization.url + '" target="_blank">' + realization.url + '</a>';
                realization_desktop.src = '/img/projects/' + id + '/1.jpg';
                realization_phone.src = '/img/projects/' + id + '/2.jpg';
                realization_technologies.innerHTML = technologies;
            }
        });
    }

    realization__close.addEventListener("click", function () {
        realization__container.classList.remove("is-visible");
        realization__container.id = "";

    });

    for (i = 0; i < icon__more.length; i++) {
        icon__more[i].addEventListener("click", function () {
            get_realization(this.id);
            realization__container.classList.add("is-visible");
        });
    }

    function show_vr() {
        ajax({
            type: "GET",
            url: "aframe/index.html",
            dataType: "text",
            onError: function (msg) {
                console.warn(msg);
                /* wynik.innerHTML = "<div class=\"alert warning\">Coś poszło nie tak.</div>";*/
            },
            onSuccess: function (msg) {
                var vr__container = document.getElementById("vr__container"),
                    header__container = document.querySelector(".header__container");

                header__container.classList.add("is-vr");
                vr__container.classList.add("is-loading");
                vr__container.innerHTML = "<div class=\"loader\"><span></span><span></span><span></span></div>";


                setTimeout(function () {
                    vr__container.innerHTML = msg;
                }, 1000);

                setTimeout(function () {
                    vr__container.classList.remove("is-loading");
                }, 2000);
            }
        });
    }

    var vr_button = document.getElementById("vrversion");
    vr_button.addEventListener("click", show_vr);


    //scroll animation
    var a = document.querySelectorAll('a[href*="#"]');
    for (i = 0; i < a.length; i++) {

        a[i].addEventListener("click", function (e) {
            e.preventDefault();
            var target_name = this.hash.substr(1),
                m = 0,
                target = document.getElementById(target_name),
                scroll_animation = setInterval(animate_scroll, 1);

            actual_position = (document.documentElement && document.documentElement.scrollTop) ||
                document.body.scrollTop;
            target_position = target.offsetTop - 100;

            function animate_scroll() {
                m = m + 0.3;
                if (actual_position < target_position) {
                    actual_position = actual_position + (10 + m);
                    document.documentElement.scrollTop = actual_position;
                    document.body.scrollTop = actual_position;
                    if (actual_position > target_position) {
                        clearInterval(scroll_animation);
                    }

                } else {
                    actual_position = actual_position - (10 + m);
                    document.documentElement.scrollTop = actual_position;
                    document.body.scrollTop = actual_position;
                    if (actual_position < target_position) {
                        clearInterval(scroll_animation);
                    }
                }
            }
        });
    }
}());