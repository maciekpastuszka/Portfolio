define('smoothscroll', function () {
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

});