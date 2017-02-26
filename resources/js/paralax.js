define('paralax', function () {
    var windowWidth = window.innerWidth,
        halfWindow = windowWidth / 2,
        header = document.getElementById('header');

    var elements = [{
        id: 'layer0',
        maxrange: -3
    },
        {
            id: 'layer1',
            maxrange: 5
        },
        {
            id: 'layer2',
            maxrange: 7
        },
        {
            id: 'layer3',
            maxrange: 10
        },
        {
            id: 'layer4',
            maxrange: 12
        },
        {
            id: 'layer5',
            maxrange: 16
        }];

    var layerZoom = header.querySelectorAll('.layer--hidden');

    var horizontalParalax = function (e) {
        var pageX = e.pageX;
        for (i = 0; i < elements.length; i++) {
            var element = elements[i],
                move = 0,
                dom_element = document.getElementById(element.id),
                actual_move = 0;
            objectRange = windowWidth * (element.maxrange / 100);
            move = (((pageX - halfWindow) / halfWindow) * -objectRange) - windowWidth / 10;
            dom_element.style.transform = 'translateX(' + move + 'px)';
        }
    };

    var mouseEvent = function () {
        var scrollInit = false;
        var event = null;
        header.addEventListener('mousemove', function (e) {
            event = e;
            scrollInit = true;
        });
        setInterval(function () {
            if (scrollInit) {
                scrollInit = false;
                horizontalParalax(event);
            }
        }, 50);
    };

    var heroZoomOut = function () {
        for (var i = 0; i < layerZoom.length; i++) {
            layerZoom[i].classList.remove('layer--hidden');
        }​
    };

    var init = function () {
        window.onload = heroZoomOut();
        mouseEvent();
    };

    init();
});