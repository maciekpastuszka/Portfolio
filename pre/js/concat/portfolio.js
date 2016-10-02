define('portfolio', ['ajax'], function (ajax) {
    var realization__container = document.querySelector(".realization"),
        realization__close = document.getElementById("realization__close"),
        icon__more = document.querySelectorAll(".icon--more"),
        realization_title = document.getElementById("realization_title"),
        realization_url = document.getElementById("realization_url"),
        realization_desktop = document.getElementById("realization_desktop"),
        realization_phone = document.getElementById("realization_phone"),
        realization_description = document.getElementById("realization_description"),
        realization_technologies = document.getElementById("realization_technologies");
    //toggle realization view
    var toggle_view = document.querySelector(".realization__switcher"),
        screen = document.querySelector(".screen");

    toggle_view.addEventListener("click", function () {
        toggle_view.classList.toggle("is-phone");
        screen.classList.toggle("is-phone");
    });


    function get_realization(id) {
        ajax({
            type: "GET",
            url: "realizations.php?realization=" + id,
            dataType: "text",
            onError: function (msg) {
                console.warn(msg);
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
});