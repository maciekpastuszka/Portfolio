define('vr', ['ajax'], function (ajax) {
    function show_vr() {
        ajax({
            type: "GET",
            url: "aframe/portfolio.html",
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
});