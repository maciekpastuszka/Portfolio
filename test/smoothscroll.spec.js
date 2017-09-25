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

    describe('Clicked link scrolls to element', () => {
        it('scroll to element below link', function () {
            let start_position  = window.pageYOffset || document.documentElement.scrollTop;
            this.smoothscroll.scrollTo('about');
            let stop_position  = window.pageYOffset || document.documentElement.scrollTop;

            expect(stop_position).to.be.above(start_position);
        });

        it('scroll to element above link', function () {


        });
    });
});
