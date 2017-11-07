var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add two numbers together', function () {
    calculator.previousTotal = 3;
    calculator.add(12);
    assert.equal(calculator.runningTotal, 15);
  })

  it('can subtract two numbers together', function () {
    calculator.previousTotal = 12;
    calculator.subtract(3);
    assert.equal(calculator.runningTotal, 9);
  })

  it('can multiply two numbers together', function () {
    calculator.previousTotal = 3;
    calculator.multiply(12);
    assert.equal(calculator.runningTotal, 36);
  })

  it('can divide two numbers together', function () {
    calculator.previousTotal = 12;
    calculator.divide(3);
    assert.equal(calculator.runningTotal, 4);
  })

  it('can concatenate multiple number clicks', function () {
    calculator.previousTotal = 3;
    calculator.add(12);
    calculator.numberClick(7);
    assert.equal(calculator.runningTotal, 7);
  })

  it('can chain multiple number adds together', function () {
    calculator.previousTotal = 3;
    calculator.add(12);
    calculator.operatorClick();
    calculator.add(7);
    assert.equal(calculator.runningTotal, 22);
  })

  it('can clear the total', function () {
    calculator.previousTotal = 3;
    calculator.add(12);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

});
