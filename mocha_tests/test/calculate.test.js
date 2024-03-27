const assert = require('assert');
const calculator = require('../calculate');

describe('Testing Calculator Outputs', () => {
    it('Calculate the correct sum of two values', () => {
        let o = calculator.add(1, 2);

        assert.equal(3, o, 'Expected the calculated value to be 3.');
    });

    it('Calculate the incorrect sum of two values', () => {
        let o = calculator.add(3, 5);

        assert.notEqual(3, o, 'Expected the calculated value to not be 3.');
    });

    it('Calculate the output of a string being passed in.', () => {
        let o = calculator.add("aString", 2);

        assert.equal(NaN, o, 'Expected the calculated value to be not a number (NaN).');
    });
});