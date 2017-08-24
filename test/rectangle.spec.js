import chai from 'chai';
chai.should();

import Rectangle from '../resources/js/components/nav';

describe('Rectangle', () => {
    describe('#width', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the width', () => {
            rectangle.width.should.equal(10);
        });

        it('can be changed', () => {
            rectangle.width = 30;
            rectangle.width.should.equal(30);
        });
    });
});
