import chai from 'chai';
chai.should();

import Navigation from '../resources/js/components/nav';


describe('Nav', () => {
    before(function () {
        fixture.setBase('public');
        this.result = fixture.load('index.html');
        this.navigation = new Navigation(fixture.el.querySelector('.js-main-nav'));
        this.navigation.init();
    });

    describe('Navigation toggle', () => {
        it('Open menu', function () {
            fixture.el.querySelector('.js-main-nav__toggle').click();
            expect(fixture.el.querySelector('.js-main-nav__toggle').classList.contains('is-open')).to.equal(true);
        });

        it('Close opened menu', function () {
            fixture.el.querySelector('.js-main-nav__toggle.is-open').click();
            expect(fixture.el.querySelector('.js-main-nav__toggle').classList.contains('is-open')).to.equal(false);
        });
    });
});
