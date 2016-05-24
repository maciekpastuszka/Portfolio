define('paralax', function () {
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


});