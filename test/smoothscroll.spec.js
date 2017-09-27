import chai from 'chai';
chai.should();

import SmoothScroll from '../resources/js/components/smoothscroll';

describe('Smoothscroll', () => {
    before(function () {
        fixture.setBase('public');
        this.result = fixture.load('index.html');
        this.smoothscroll = new SmoothScroll();
        this.smoothscroll.init();
    });

    describe('Click anchor', () => {
        it('scroll to element below link', function () {
            let start_position = window.pageYOffset || document.documentElement.scrollTop;
            return this.smoothscroll.scroll('about').then(function(result) {
                let stop_position = window.pageYOffset || document.documentElement.scrollTop;
                expect(stop_position).to.be.above(start_position);
            });
        });

        it('scroll to element above link', function () {
            let start_position = window.pageYOffset || document.documentElement.scrollTop;
            return this.smoothscroll.scroll('about').then(function (result) {
                let stop_position = window.pageYOffset || document.documentElement.scrollTop;
                expect(stop_position).to.be.below(start_position);
            });
        });

        it('after scroll return finish', function () {
            return this.smoothscroll.scroll('about').then(function (result) {
                expect(result).to.equal('scrolled');
            });
        });
    });
});
