(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layers = function () {
    function Layers(layer_container) {
        _classCallCheck(this, Layers);

        this.layer_container = layer_container;
        this.layers = layer_container.querySelectorAll('.layer');
        this.hero = document.querySelector('.hero');
        this.inclination_state = {};
    }

    _createClass(Layers, [{
        key: '_moveLayer',
        value: function _moveLayer(layer, layer_inclination) {
            var layer_id = layer.getAttribute('data-id');

            if (layer_inclination != this.inclination_state[layer_id]) {
                this.inclination_state[layer_id] = layer_inclination;
                layer.style.transform = 'translateX(' + layer_inclination + 'px)';
            }
        }
    }, {
        key: '_calcInclination',
        value: function _calcInclination(cursor_position) {
            var _this = this;

            var half_page_width = window.innerWidth / 2;
            var cursor_inclination = cursor_position - half_page_width;
            var cursor_inclination_percentage = cursor_inclination / half_page_width;

            this.layers.forEach(function (layer) {
                var layer_range = layer.getAttribute('data-range');
                var layer_width = layer.offsetWidth;
                var layer_inclination = parseInt(layer_range * cursor_inclination_percentage - layer_width * 0.1);
                _this._moveLayer(layer, layer_inclination);
            });
        }
    }, {
        key: '_mouseEventDebounce',
        value: function _mouseEventDebounce() {
            var _this2 = this;

            var scrollInit = false;
            var event = null;

            this.hero.addEventListener('mousemove', function (e) {
                event = e;
                scrollInit = true;
            });

            setInterval(function () {
                if (scrollInit) {
                    scrollInit = false;
                    _this2._calcInclination(event.pageX);
                }
            }, 100);
        }
    }, {
        key: 'init',
        value: function init() {
            if (this.layer_container) {
                this._mouseEventDebounce();
            }
        }
    }]);

    return Layers;
}();

exports.default = Layers;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainNav = function () {
    function MainNav(nav) {
        _classCallCheck(this, MainNav);

        this.nav = nav;
        this.nav_toggle = nav.querySelector('.js-main-nav__toggle');
        this.nav_colapse = nav.querySelector('.js-main-nav__colapse');
        this.state = {
            scroll: true
        };
    }

    _createClass(MainNav, [{
        key: 'scroll',
        value: function scroll() {
            var _this = this;

            setInterval(function () {
                if (_this.state.scroll) {
                    _this.state.scroll = false;
                    _this.menuMove();
                }
            }, 250);
        }
    }, {
        key: 'menuMove',
        value: function menuMove() {
            var scroll = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;

            if (scroll >= 20) {
                this.nav.classList.add('is-move');
            } else {
                this.nav.classList.remove('is-move');
            }
        }
    }, {
        key: 'mobileNavToggle',
        value: function mobileNavToggle() {
            this.nav_toggle.classList.toggle('is-open');
            this.nav_colapse.classList.toggle('is-open');
        }
    }, {
        key: 'events',
        value: function events() {
            var _this2 = this;

            window.addEventListener('scroll', function () {
                _this2.state.scroll = true;
            });
            this.nav_toggle.addEventListener('click', function () {
                _this2.mobileNavToggle();
            });
        }
    }, {
        key: 'init',
        value: function init() {
            this.events();
            this.scroll();
        }
    }]);

    return MainNav;
}();

exports.default = MainNav;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SmoothScroll = function () {
    function SmoothScroll() {
        var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;

        _classCallCheck(this, SmoothScroll);

        this.speed = speed;
        this.links = document.querySelectorAll('.js-anchor');
    }

    _createClass(SmoothScroll, [{
        key: 'scroll',
        value: function scroll(target_id) {
            var _this = this;

            var target = document.querySelector('#' + target_id);
            var start_position = document.documentElement.scrollTop;
            var target_position = target.offsetTop - 100;
            var time = 0;

            return new Promise(function (resolve, reject) {
                var scroll_animation_interval = setInterval(function () {
                    time += _this.speed;
                    if (start_position < target_position) {
                        document.documentElement.scrollTop += time;
                        if (document.documentElement.scrollTop > target_position || document.documentElement.scrollHeight - document.documentElement.scrollTop == document.documentElement.clientHeight) {
                            clearInterval(scroll_animation_interval);
                            resolve('scrolled');
                        }
                    } else {
                        document.documentElement.scrollTop -= time;
                        if (document.documentElement.scrollTop < target_position) {
                            clearInterval(scroll_animation_interval);
                            resolve('scrolled');
                        }
                    }
                }, 1);
            });
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(target_id) {
            this.scroll(target_id).then(function (result) {
                return console.log(result);
            });
        }
    }, {
        key: 'events',
        value: function events() {
            var _this2 = this;

            this.links.forEach(function (link) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    _this2.scrollTo(link.hash.substr(1));
                });
            });
        }
    }, {
        key: 'init',
        value: function init() {
            this.events();
        }
    }]);

    return SmoothScroll;
}();

exports.default = SmoothScroll;

},{}],4:[function(require,module,exports){
'use strict';

var _mainNav = require('./components/main-nav');

var _mainNav2 = _interopRequireDefault(_mainNav);

var _smoothscroll = require('./components/smoothscroll');

var _smoothscroll2 = _interopRequireDefault(_smoothscroll);

var _layers = require('./components/layers');

var _layers2 = _interopRequireDefault(_layers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainNAv = new _mainNav2.default(document.querySelector('.js-main-nav'));
mainNAv.init();

var smoothScroll = new _smoothscroll2.default();
smoothScroll.init();

var layers = new _layers2.default(document.querySelector('.js-layers'));
layers.init();

},{"./components/layers":1,"./components/main-nav":2,"./components/smoothscroll":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZXNvdXJjZXNcXGpzXFxjb21wb25lbnRzXFxsYXllcnMuanMiLCJyZXNvdXJjZXNcXGpzXFxjb21wb25lbnRzXFxtYWluLW5hdi5qcyIsInJlc291cmNlc1xcanNcXGNvbXBvbmVudHNcXHNtb290aHNjcm9sbC5qcyIsInJlc291cmNlc1xcanNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sTTtBQUNGLG9CQUFZLGVBQVosRUFBNkI7QUFBQTs7QUFDekIsYUFBSyxlQUFMLEdBQXVCLGVBQXZCO0FBQ0EsYUFBSyxNQUFMLEdBQWMsZ0JBQWdCLGdCQUFoQixDQUFpQyxRQUFqQyxDQUFkO0FBQ0EsYUFBSyxJQUFMLEdBQVksU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQSxhQUFLLGlCQUFMLEdBQXlCLEVBQXpCO0FBQ0g7Ozs7bUNBRVUsSyxFQUFPLGlCLEVBQW1CO0FBQ2pDLGdCQUFJLFdBQVcsTUFBTSxZQUFOLENBQW1CLFNBQW5CLENBQWY7O0FBRUEsZ0JBQUkscUJBQXFCLEtBQUssaUJBQUwsQ0FBdUIsUUFBdkIsQ0FBekIsRUFBMkQ7QUFDdkQscUJBQUssaUJBQUwsQ0FBdUIsUUFBdkIsSUFBbUMsaUJBQW5DO0FBQ0Esc0JBQU0sS0FBTixDQUFZLFNBQVosbUJBQXNDLGlCQUF0QztBQUNIO0FBQ0o7Ozt5Q0FFZ0IsZSxFQUFpQjtBQUFBOztBQUM5QixnQkFBSSxrQkFBa0IsT0FBTyxVQUFQLEdBQW9CLENBQTFDO0FBQ0EsZ0JBQUkscUJBQXFCLGtCQUFrQixlQUEzQztBQUNBLGdCQUFJLGdDQUFnQyxxQkFBcUIsZUFBekQ7O0FBRUEsaUJBQUssTUFBTCxDQUFZLE9BQVosQ0FBb0IsVUFBQyxLQUFELEVBQVc7QUFDM0Isb0JBQUksY0FBYyxNQUFNLFlBQU4sQ0FBbUIsWUFBbkIsQ0FBbEI7QUFDQSxvQkFBSSxjQUFjLE1B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Ozs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sVUFBVSxzQkFBWSxTQUFTLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBWixDQUFoQjtBQUNBLFFBQVEsSUFBUjs7QUFFQSxJQUFNLGVBQWUsNEJBQXJCO0FBQ0EsYUFBYSxJQUFiOztBQUVBLElBQU0sU0FBUyxxQkFBVyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWCxDQUFmO0FBQ0EsT0FBTyxJQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIExheWVycyB7XHJcbiAgICBjb25zdHJ1Y3RvcihsYXllcl9jb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmxheWVyX2NvbnRhaW5lciA9IGxheWVyX2NvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmxheWVycyA9IGxheWVyX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGF5ZXInKTtcclxuICAgICAgICB0aGlzLmhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xyXG4gICAgICAgIHRoaXMuaW5jbGluYXRpb25fc3RhdGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBfbW92ZUxheWVyKGxheWVyLCBsYXllcl9pbmNsaW5hdGlvbikge1xyXG4gICAgICAgIGxldCBsYXllcl9pZCA9IGxheWVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICBpZiAobGF5ZXJfaW5jbGluYXRpb24gIT0gdGhpcy5pbmNsaW5hdGlvbl9zdGF0ZVtsYXllcl9pZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbmNsaW5hdGlvbl9zdGF0ZVtsYXllcl9pZF0gPSBsYXllcl9pbmNsaW5hdGlvbjtcclxuICAgICAgICAgICAgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtsYXllcl9pbmNsaW5hdGlvbn1weClgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2FsY0luY2xpbmF0aW9uKGN1cnNvcl9wb3NpdGlvbikge1xyXG4gICAgICAgIGxldCBoYWxmX3BhZ2Vfd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgICAgbGV0IGN1cnNvcl9pbmNsaW5hdGlvbiA9IGN1cnNvcl9wb3NpdGlvbiAtIGhhbGZfcGFnZV93aWR0aDtcclxuICAgICAgICBsZXQgY3Vyc29yX2luY2xpbmF0aW9uX3BlcmNlbnRhZ2UgPSBjdXJzb3JfaW5jbGluYXRpb24gLyBoYWxmX3BhZ2Vfd2lkdGg7XHJcblxyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsYXllcl9yYW5nZSA9IGxheWVyLmdldEF0dHJpYnV0ZSgnZGF0YS1yYW5nZScpO1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXJfd2lkdGggPSBsYXllci5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgbGV0IGxheWVyX2luY2xpbmF0aW9uID0gcGFyc2VJbnQobGF5ZXJfcmFuZ2UgKiBjdXJzb3JfaW5jbGluYXRpb25fcGVyY2VudGFnZSAtIGxheWVyX3dpZHRoICogMC4xKTtcclxuICAgICAgICAgICAgdGhpcy5fbW92ZUxheWVyKGxheWVyLCBsYXllcl9pbmNsaW5hdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX21vdXNlRXZlbnREZWJvdW5jZSgpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBldmVudCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuaGVyby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBldmVudCA9IGU7XHJcbiAgICAgICAgICAgIHNjcm9sbEluaXQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxJbml0KSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjSW5jbGluYXRpb24oZXZlbnQucGFnZVgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVyX2NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VzZUV2ZW50RGVib3VuY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheWVycztcclxuIiwiY2xhc3MgTWFpbk5hdiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYXYpIHtcclxuICAgICAgICB0aGlzLm5hdiA9IG5hdjtcclxuICAgICAgICB0aGlzLm5hdl90b2dnbGUgPSBuYXYucXVlcnlTZWxlY3RvcignLmpzLW1haW4tbmF2X190b2dnbGUnKTtcclxuICAgICAgICB0aGlzLm5hdl9jb2xhcHNlID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tYWluLW5hdl9fY29sYXBzZScpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsKCkge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNjcm9sbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51TW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMjUwKTtcclxuICAgIH1cclxuXHJcbiAgICBtZW51TW92ZSgpIHtcclxuICAgICAgICBjb25zdCBzY3JvbGwgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsID49IDIwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2LmNsYXNzTGlzdC5hZGQoJ2lzLW1vdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1tb3ZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vYmlsZU5hdlRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLm5hdl90b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG4gICAgICAgIHRoaXMubmF2X2NvbGFwc2UuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5uYXZfdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vYmlsZU5hdlRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2O1xyXG4iLCJjbGFzcyBTbW9vdGhTY3JvbGwge1xyXG4gICAgY29uc3RydWN0b3Ioc3BlZWQgPSAwLjUpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5saW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hbmNob3InKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGwodGFyZ2V0X2lkKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldF9pZH1gKTtcclxuICAgICAgICBsZXQgc3RhcnRfcG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGxldCB0YXJnZXRfcG9zaXRpb24gPSB0YXJnZXQub2Zmc2V0VG9wIC0gMTAwO1xyXG4gICAgICAgIGxldCB0aW1lID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsX2FuaW1hdGlvbl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRpbWUgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydF9wb3NpdGlvbiA8IHRhcmdldF9wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKz0gdGltZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IHRhcmdldF9wb3NpdGlvbiB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsX2FuaW1hdGlvbl9pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ3Njcm9sbGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPCB0YXJnZXRfcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxfYW5pbWF0aW9uX2ludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnc2Nyb2xsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvKHRhcmdldF9pZCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsKHRhcmdldF9pZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKGxpbmsuaGFzaC5zdWJzdHIoMSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtb290aFNjcm9sbDtcclxuIiwiaW1wb3J0IE1haW5OYXYgZnJvbSAnLi9jb21wb25lbnRzL21haW4tbmF2JztcclxuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuL2NvbXBvbmVudHMvc21vb3Roc2Nyb2xsJztcclxuaW1wb3J0IExheWVycyBmcm9tICcuL2NvbXBvbmVudHMvbGF5ZXJzJztcclxuXHJcbmNvbnN0IG1haW5OQXYgPSBuZXcgTWFpbk5hdihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbWFpbi1uYXYnKSk7XHJcbm1haW5OQXYuaW5pdCgpO1xyXG5cclxuY29uc3Qgc21vb3RoU2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbCgpO1xyXG5zbW9vdGhTY3JvbGwuaW5pdCgpO1xyXG5cclxuY29uc3QgbGF5ZXJzID0gbmV3IExheWVycyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGF5ZXJzJykpO1xyXG5sYXllcnMuaW5pdCgpO1xyXG4iXX0=
