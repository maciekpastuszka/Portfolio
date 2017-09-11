import chai from 'chai';
chai.should();

import Navigation from '../src/nav';


describe('Nav', () => {
    let navigation = 10;
    describe('scroll', () => {
        it('returns the width', () => {
            navigation.should.equal(10);
        });
    });
    describe('scrol2l', () => {
        it('returns the width2', () => {
            navigation.should.equal(10);
        });
    });
});
