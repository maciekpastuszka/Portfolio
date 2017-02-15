define('vr', ['ajax'], function (ajax) {
    var vr_button = document.getElementById('vrversion'),
        vr__container = document.getElementById('vr__container'),
        header__container = document.querySelector('.header__container');

    var events = function () {
        vr_button.addEventListener('click', showVr);
    };

    var showVr = function () {
        ajax({
            type: 'GET',
            url: 'aframe/portfolio.html',
            dataType: 'text',
            onError: function (data) {
                console.warn(data);
            },
            onSuccess: function (data) {
                show(data);
            }
        });

        function show(data) {
            header__container.classList.add('is-vr');
            vr__container.classList.add('is-loading');
            vr__container.innerHTML = '<div class="loader"><span></span><span></span><span></span></div>';

            setTimeout(function () {
                vr__container.innerHTML = data;
            }, 1000);

            //remove loader
            setTimeout(function () {
                vr__container.classList.remove('is-loading');
            }, 2000);
        }
    };

    var init = function () {
        events();
    };

    init();
});