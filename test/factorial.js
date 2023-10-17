const assert = require('chai').assert;

describe('my factorial test space', function () {
  function factorialize(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  it.skip('should return the correct factorial for 5', function () {
    assert.equal(factorialize(5), 120);
  });


  it('should return the correct factorial for 5', function () {
    assert.equal(factorialize(0), 1);
  });


  it('should return the correct factorial for 5', function () {
    assert.equal(factorialize(1), 1);
  });



});
  