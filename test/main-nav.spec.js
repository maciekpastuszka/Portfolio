import chai from 'chai';
chai.should();
import MainNav from '../resources/js/components/main-nav';

describe('Main-nav', () => {
    before(function () {
        fixture.setBase('public');
        this.result = fixture.load('index.html');
        this.mainNav = new MainNav(fixture.el.querySelector('.js-main-nav'));
        this.mainNav.init();
    });

    describe('CLick main-nav toggle', () => {
        it('opens mobile nav', function () {
            fixture.el.querySelector('.js-main-nav__toggle').click();
            expect(fixture.el.querySelector('.js-main-nav__toggle').classList.contains('is-open')).to.equal(true);
        });

        it('when opened closes mobile nav', function () {
            fixture.el.querySelector('.js-main-nav__toggle.is-open').click();
            expect(fixture.el.querySelector('.js-main-nav__toggle').classList.contains('is-open')).to.equal(false);
        });
    });

    describe('On scroll', () => {
        it('Add background if scroll is more than 20px', function () {
            window.scroll(0, 30);
            this.mainNav.menuMove();
            expect(fixture.el.querySelector('.js-main-nav').classList.contains('is-move')).to.equal(true);
        });

        it('Return default background if scroll is less than 20px', function () {
            window.scroll(0, 19);
            this.mainNav.menuMove();
            expect(fixture.el.querySelector('.js-main-nav').classList.contains('is-move')).to.equal(false);
        });
    });
});
