const assert = require('chai').assert;

// Define the multiply function
function multiply(a, b) {
    return a * b;
}

describe('my test space', function () {
    it('check the result of the multiply function with 1 and 1', function () {
        assert.equal(multiply(1, 1), 1);
    });

    it('check the result of the multiply function with 2 and 2', function () {
        assert.equal(multiply(2, 2), 4);
    });

    it('check the result of the multiply function with 3 and 3', function () {
        assert.equal(multiply(3, 3), 9);
    });

    it('check the result of the multiply function with 4 and 4', function () {
        assert.equal(multiply(4, 4), 16);
    });

    it('check the result of the multiply function with 23 and 45', function () {
        assert.equal(multiply(23, 45), 23*45);
    });

});
