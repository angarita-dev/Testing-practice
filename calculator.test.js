const calculator = require('./calculator');

test('adds integers correctly', () => {
  expect(calculator.sum(1,5)).toBe(6);
  expect(calculator.sum(0,8)).toBe(8);
  expect(calculator.sum(12,75)).toBe(87);
});

test('adds floats correctly', () => {
  expect(calculator.sum(9.4,11.2)).toBe(20.6);
  expect(calculator.sum(21.9,11.8)).toBe(33.7);
  expect(calculator.sum(12.4,11.1)).toBe(23.5);
});

test('adds float with integer', () => {
  expect(calculator.sum(18.5,12)).toBe(30.5);
  expect(calculator.sum(11.5,10)).toBe(21.5);
  expect(calculator.sum(4.3,10)).toBe(14.3);
});

test('throws error when different type is being passed', () => {
  expect(calculator.sum('12','14')).toThrow(TypeError);
  expect(calculator.sum('rer',12)).toThrow(TypeError);
});
