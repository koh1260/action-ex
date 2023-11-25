const factorial = require('../src');

describe('Factorial function', () => {
  it('correctly compotes factorials of as positive integer number', () => {
    expect(factorial(3)).toEqual(6);
  });

  it('throw error', () => {
    expect(() => {
      factorial(-1);
    }).toThrow('error!');
  })
});