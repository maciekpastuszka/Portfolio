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
        it('scroll is element above link', function () {

            expect(true).to.equal(true);
        });

        it('scroll is element below link', function () {

        });
    });
});
