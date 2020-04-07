const {sum, nativeNull} = require('./intro');


describe('Sum function', () => {

  test('Sum should return sum of two values', () => {
    expect(sum(1,3)).toBe(4);
  });

  test('Sum should return value correctly comparing to other', () => {
    expect(sum(2,3)).toBeGreaterThan(4);
  });

  test('Sum should 2 fload values', () => {
    expect(sum(0.3, 0.6)).toBeCloseTo(0.9);
  });
  
})


describe('Null function', () => {

  test('Native null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
  });
})