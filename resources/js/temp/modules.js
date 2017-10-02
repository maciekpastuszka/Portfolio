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
    }

    _createClass(Layers, [{
        key: '_moveLayer',
        value: function _moveLayer() {
            this.layers.forEach(function (layer) {});
        }
    }, {
        key: '_mouseEventDebounce',
        value: function _mouseEventDebounce() {
            var _this = this;

            var scrollInit = false;
            var event = null;

            this.hero.addEventListener('mousemove', function (e) {
                event = e;
                scrollInit = true;
                console.log('move e');
            });
            setInterval(function () {
                if (scrollInit) {
                    console.log('move');
                    scrollInit = false;
                    _this._moveLayer(event);
                }
            }, 50);
        }
    }, {
        key: '_events',
        value: function _events() {}
    }, {
        key: 'init',
        value: function init() {
            if (this.layer_container) {
                this._events();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZXNvdXJjZXNcXGpzXFxjb21wb25lbnRzXFxsYXllcnMuanMiLCJyZXNvdXJjZXNcXGpzXFxjb21wb25lbnRzXFxtYWluLW5hdi5qcyIsInJlc291cmNlc1xcanNcXGNvbXBvbmVudHNcXHNtb290aHNjcm9sbC5qcyIsInJlc291cmNlc1xcanNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sTTtBQUNGLG9CQUFZLGVBQVosRUFBNkI7QUFBQTs7QUFDekIsYUFBSyxlQUFMLEdBQXVCLGVBQXZCO0FBQ0EsYUFBSyxNQUFMLEdBQWMsZ0JBQWdCLGdCQUFoQixDQUFpQyxRQUFqQyxDQUFkO0FBQ0EsYUFBSyxJQUFMLEdBQVksU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDSDs7OztxQ0FFWTtBQUNULGlCQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLFVBQUMsS0FBRCxFQUFXLENBRTlCLENBRkQ7QUFHSDs7OzhDQUVxQjtBQUFBOztBQUNsQixnQkFBSSxhQUFhLEtBQWpCO0FBQ0EsZ0JBQUksUUFBUSxJQUFaOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxnQkFBVixDQUEyQixXQUEzQixFQUF3QyxVQUFDLENBQUQsRUFBTztBQUMzQyx3QkFBUSxDQUFSO0FBQ0EsNkJBQWEsSUFBYjtBQUNBLHdCQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsYUFKRDtBQUtBLHdCQUFZLFlBQU07QUFDZCxvQkFBSSxVQUFKLEVBQWdCO0FBQ1osNEJBQVEsR0FBUixDQUFZLE1BQVo7QUFDQSxpQ0FBYSxLQUFiO0FBQ0EsMEJBQUssVUFBTCxDQUFnQixLQUFoQjtBQUNIO0FBQ0osYUFORCxFQU1HLEVBTkg7QUFPSDs7O2tDQUVTLENBRVQ7OzsrQkFFTTtBQUNILGdCQUFJLEtBQUssZUFBVCxFQUEwQjtBQUN0QixxQkFBSyxPQUFMO0FBQ0EscUJBQUssbUJBQUw7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QUFDSDtBQUNKO0FBQ0osaUJBZmlDLEVBZS9CLENBZitCLENBQWxDO0FBZ0JILGFBakJNLENBQVA7QUFrQkg7OztpQ0FFUSxTLEVBQVc7QUFDaEIsaUJBQUssTUFBTCxDQUFZLFNBQVosRUFDSyxJQURMLENBQ1U7QUFBQSx1QkFBVSxRQUFRLEdBQVIsQ0FBWSxNQUFaLENBQVY7QUFBQSxhQURWO0FBRUg7OztpQ0FFUTtBQUFBOztBQUNMLGlCQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLFVBQUMsSUFBRCxFQUFVO0FBQ3pCLHFCQUFLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUMsQ0FBRCxFQUFPO0FBQ2xDLHNCQUFFLGNBQUY7QUFDQSwyQkFBSyxRQUFMLENBQWMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixDQUFqQixDQUFkO0FBQ0gsaUJBSEQ7QUFJSCxhQUxEO0FBTUg7OzsrQkFFTTtBQUNILGlCQUFLLE1BQUw7QUFDSDs7Ozs7O2tCQUdVLFk7Ozs7O0FDbkRmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxVQUFVLHNCQUFZLFNBQVMsYUFBVCxDQUF1QixjQUF2QixDQUFaLENBQWhCO0FBQ0EsUUFBUSxJQUFSOztBQUVBLElBQU0sZUFBZSw0QkFBckI7QUFDQSxhQUFhLElBQWI7O0FBRUEsSUFBTSxTQUFTLHFCQUFXLFNBQVMsYUFBVCxDQUF1QixZQUF2QixDQUFYLENBQWY7QUFDQSxPQUFPLElBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgTGF5ZXJzIHtcclxuICAgIGNvbnN0cnVjdG9yKGxheWVyX2NvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJfY29udGFpbmVyID0gbGF5ZXJfY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gbGF5ZXJfY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXllcicpO1xyXG4gICAgICAgIHRoaXMuaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgX21vdmVMYXllcigpIHtcclxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfbW91c2VFdmVudERlYm91bmNlKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5oZXJvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gZTtcclxuICAgICAgICAgICAgc2Nyb2xsSW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZlIGUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxJbml0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbW92ZScpO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZUxheWVyKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH1cclxuXHJcbiAgICBfZXZlbnRzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxheWVyX2NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMoKTtcclxuICAgICAgICAgICAgdGhpcy5fbW91c2VFdmVudERlYm91bmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXllcnM7XHJcbiIsImNsYXNzIE1haW5OYXYge1xyXG4gICAgY29uc3RydWN0b3IobmF2KSB7XHJcbiAgICAgICAgdGhpcy5uYXYgPSBuYXY7XHJcbiAgICAgICAgdGhpcy5uYXZfdG9nZ2xlID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tYWluLW5hdl9fdG9nZ2xlJyk7XHJcbiAgICAgICAgdGhpcy5uYXZfY29sYXBzZSA9IG5hdi5xdWVyeVNlbGVjdG9yKCcuanMtbWFpbi1uYXZfX2NvbGFwc2UnKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzY3JvbGw6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbCgpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNjcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudU1vdmUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCA+PSAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QuYWRkKCdpcy1tb3ZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbW92ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb2JpbGVOYXZUb2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZfdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuICAgICAgICB0aGlzLm5hdl9jb2xhcHNlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubmF2X3RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2JpbGVOYXZUb2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdjtcclxuIiwiY2xhc3MgU21vb3RoU2Nyb2xsIHtcclxuICAgIGNvbnN0cnVjdG9yKHNwZWVkID0gMC41KSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMubGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYW5jaG9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsKHRhcmdldF9pZCkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXRfaWR9YCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0X3Bvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBsZXQgdGFyZ2V0X3Bvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldFRvcCAtIDEwMDtcclxuICAgICAgICBsZXQgdGltZSA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbF9hbmltYXRpb25faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRfcG9zaXRpb24gPCB0YXJnZXRfcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICs9IHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiB0YXJnZXRfcG9zaXRpb24gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHNjcm9sbF9hbmltYXRpb25faW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdzY3JvbGxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDwgdGFyZ2V0X3Bvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsX2FuaW1hdGlvbl9pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ3Njcm9sbGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUbyh0YXJnZXRfaWQpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbCh0YXJnZXRfaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5saW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyhsaW5rLmhhc2guc3Vic3RyKDEpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbW9vdGhTY3JvbGw7XHJcbiIsImltcG9ydCBNYWluTmF2IGZyb20gJy4vY29tcG9uZW50cy9tYWluLW5hdic7XHJcbmltcG9ydCBTbW9vdGhTY3JvbGwgZnJvbSAnLi9jb21wb25lbnRzL3Ntb290aHNjcm9sbCc7XHJcbmltcG9ydCBMYXllcnMgZnJvbSAnLi9jb21wb25lbnRzL2xheWVycyc7XHJcblxyXG5jb25zdCBtYWluTkF2ID0gbmV3IE1haW5OYXYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1haW4tbmF2JykpO1xyXG5tYWluTkF2LmluaXQoKTtcclxuXHJcbmNvbnN0IHNtb290aFNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoKTtcclxuc21vb3RoU2Nyb2xsLmluaXQoKTtcclxuXHJcbmNvbnN0IGxheWVycyA9IG5ldyBMYXllcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxheWVycycpKTtcclxubGF5ZXJzLmluaXQoKTtcclxuIl19
