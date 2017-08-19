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


//# sourceMappingURL=modules.js.map
