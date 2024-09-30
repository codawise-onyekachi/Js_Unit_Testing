//unit1.test.js

const assert = require('assert')
const isEven = require('../src/unit1');

describe('isEven function', function() {
    it('Should return true for even numbers', function() {
        assert.equal(isEven(4), true); 

    });


    it('Should return false for odd numbers', function() {
        assert.equal(isEven(5), false);
    });

    it('Should throw an error if input is not a number', function() {
        assert.throws(() => isEven("a"), /Input must be a number/);
    });
})