(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigation = function () {
    function Navigation(nav) {
        _classCallCheck(this, Navigation);

        this.nav = nav;
        this.nav_toggle = nav.querySelector('.main-nav__toggle');
        this.nav_colapse = nav.querySelector('.js-main-nav__colapse');
        this.nav_circle = nav.querySelector('.main-nav__circle');
        this.state = {
            scroll: true
        };
    }

    _createClass(Navigation, [{
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

            console.log(this.nav_colapse);
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

    return Navigation;
}();

exports.default = Navigation;

},{}],2:[function(require,module,exports){
'use strict';

var _nav = require('./components/nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = new _nav2.default(document.querySelector('.js-main-nav'));
nav.init();

},{"./components/nav":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZXNvdXJjZXNcXGpzXFxjb21wb25lbnRzXFxuYXYuanMiLCJyZXNvdXJjZXNcXGpzXFxtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FNLFU7QUFDRix3QkFBWSxHQUFaLEVBQWlCO0FBQUE7O0FBQ2IsYUFBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLGFBQUssVUFBTCxHQUFrQixJQUFJLGFBQUosQ0FBa0IsbUJBQWxCLENBQWxCO0FBQ0EsYUFBSyxXQUFMLEdBQW1CLElBQUksYUFBSixDQUFrQix1QkFBbEIsQ0FBbkI7QUFDQSxhQUFLLFVBQUwsR0FBa0IsSUFBSSxhQUFKLENBQWtCLG1CQUFsQixDQUFsQjtBQUNBLGFBQUssS0FBTCxHQUFhO0FBQ1Qsb0JBQVE7QUFEQyxTQUFiO0FBR0g7Ozs7aUNBRVE7QUFBQTs7QUFDTCx3QkFBWSxZQUFNO0FBQ2Qsb0JBQUksTUFBSyxLQUFMLENBQVcsTUFBZixFQUF1QjtBQUNuQiwwQkFBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixLQUFwQjtBQUNBLDBCQUFLLFFBQUw7QUFDSDtBQUNKLGFBTEQsRUFLRyxHQUxIO0FBTUg7OzttQ0FFVTtBQUNQLGdCQUFNLFNBQVUsU0FBUyxlQUFULElBQTRCLFNBQVMsZUFBVCxDQUF5QixTQUF0RCxJQUFvRSxTQUFTLElBQVQsQ0FBYyxTQUFqRzs7QUFFQSxnQkFBSSxVQUFVLEVBQWQsRUFBa0I7QUFDZCxxQkFBSyxHQUFMLENBQVMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixTQUF2QjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLEdBQUwsQ0FBUyxTQUFULENBQW1CLE1BQW5CLENBQTBCLFNBQTFCO0FBQ0g7QUFDSjs7OzBDQUVpQjtBQUNkLGlCQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsQ0FBMEIsTUFBMUIsQ0FBaUMsU0FBakM7QUFDQSxpQkFBSyxXQUFMLENBQWlCLFNBQWpCLENBQTJCLE1BQTNCLENBQWtDLFNBQWxDOztBQUVBLG9CQUFRLEdBQVIsQ0FBWSxLQUFLLFdBQWpCO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUNMLG1CQUFPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDcEMsdUJBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsSUFBcEI7QUFDSCxhQUZEO0FBR0EsaUJBQUssVUFBTCxDQUFnQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsWUFBTTtBQUM1Qyx1QkFBSyxlQUFMO0FBQ0gsYUFGRDtBQUdIOzs7K0JBRU07QUFDSCxpQkFBSyxNQUFMO0FBQ0EsaUJBQUssTUFBTDtBQUNIOzs7Ozs7a0JBR1UsVTs7Ozs7QUNwRGY7Ozs7OztBQUdBLElBQUksTUFBTSxrQkFBZSxTQUFTLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZixDQUFWO0FBQ0EsSUFBSSxJQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIE5hdmlnYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IobmF2KSB7XHJcbiAgICAgICAgdGhpcy5uYXYgPSBuYXY7XHJcbiAgICAgICAgdGhpcy5uYXZfdG9nZ2xlID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fdG9nZ2xlJyk7XHJcbiAgICAgICAgdGhpcy5uYXZfY29sYXBzZSA9IG5hdi5xdWVyeVNlbGVjdG9yKCcuanMtbWFpbi1uYXZfX2NvbGFwc2UnKTtcclxuICAgICAgICB0aGlzLm5hdl9jaXJjbGUgPSBuYXYucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19jaXJjbGUnKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzY3JvbGw6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbCgpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNjcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudU1vdmUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCA+PSAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hdi5jbGFzc0xpc3QuYWRkKCdpcy1tb3ZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbW92ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb2JpbGVOYXZUb2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZfdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuICAgICAgICB0aGlzLm5hdl9jb2xhcHNlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYXZfY29sYXBzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5hdl90b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTmF2VG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247IiwiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL25hdic7XHJcblxyXG5cclxubGV0IG5hdiA9IG5ldyBOYXZpZ2F0aW9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tYWluLW5hdicpKTtcclxubmF2LmluaXQoKTtcclxuIl19
