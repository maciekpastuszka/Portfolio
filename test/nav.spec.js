import chai from 'chai';
chai.should();

import Navigation from '../src/nav';


describe('Nav', () => {
    before(function(){
        fixture.setBase('public');
    });

    beforeEach(function(){
        this.result = fixture.load('index.html');
    });

    afterEach(function(){
        fixture.cleanup()
    });

    it('plays with the html fixture', function(){
        // expect(fixture.el.firstChild).to.equal(this.result[0][0]);
        console.log(fixture.el.querySelector('.main-nav__logo'));
    });
});


describe('scroll', () => {
    let navigation = 10;
    it('returns the width', () => {
        navigation.should.equal(10);
    });
});
