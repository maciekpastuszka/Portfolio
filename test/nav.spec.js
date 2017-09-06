import chai from 'chai';
chai.should();

import Navigation from '../resources/js/components/nav';


describe('Nav', () => {
    let navigation;
    beforeEach(() => {
        navigation = new Navigation('<div class=".js-main-nav"></div>');
    });

    describe('scroll', () => {
        it('returns the width', () => {
            rectangle.width.should.equal(10);
        });
    });
});
