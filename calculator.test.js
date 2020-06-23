const calculator = require('./calculator');

// Add
test('adds integers correctly', () => {
  expect(calculator.add(1,5)).toBe(6);
  expect(calculator.add(0,8)).toBe(8);
  expect(calculator.add(12,-75)).toBe(63);
});

test('adds floats correctly', () => {
  expect(calculator.add(9.4,11.2)).toBe(20.6);
  expect(calculator.add(21.9,11.8)).toBe(33.7);
  expect(calculator.add(12.4,11.1)).toBe(23.5);
});

test('adds float with integer', () => {
  expect(calculator.add(18.5,12)).toBe(30.5);
  expect(calculator.add(11.5,10)).toBe(21.5);
  expect(calculator.add(4.3,10)).toBe(14.3);
});

test('throws error when different type is being passed', () => {
  expect(calculator.add('12','14')).toThrow(TypeError);
  expect(calculator.add('rer',12)).toThrow(TypeError);
});

// Substract
test('substracts integers correctly', () => {
  expect(calculator.substract(1,5)).toBe(-4);
  expect(calculator.substract(0,8)).toBe(-8);
  expect(calculator.substract(12,-75)).toBe(87);
});

test('substracts floats correctly', () => {
  expect(calculator.substract(9.4,11.2)).toBe(-1.8);
  expect(calculator.substract(21.9,11.8)).toBe(10.1);
  expect(calculator.substract(12.4,11.1)).toBe(1.3);
});

test('substracts float with integer', () => {
  expect(calculator.substract(18.5,12)).toBe(6.5);
  expect(calculator.substract(11.5,10)).toBe(1.5);
  expect(calculator.substract(4.3,10)).toBe(-5.7);
});

test('throws error when different type is being passed to substract', () => {
  expect(calculator.substract('12','14')).toThrow(TypeError);
  expect(calculator.substract('rer',12)).toThrow(TypeError);
});

// Multiply
test('multiplies integers correctly', () => {
  expect(calculator.multiply(1,5)).toBe(5);
  expect(calculator.multiply(0,8)).toBe(0);
  expect(calculator.multiply(12,-75)).toBe(-900);
});

test('multiplies floats correctly', () => {
  expect(calculator.multiply(9.4,11.2)).toBe(105.28);
  expect(calculator.multiply(21.9,11.8)).toBe(258.42);
  expect(calculator.multiply(12.4,11.1)).toBe(137.64);
});

test('multiplies float with integer', () => {
  expect(calculator.multiply(18.5,12)).toBe(222);
  expect(calculator.multiply(11.5,10)).toBe(115);
  expect(calculator.multiply(4.3,10)).toBe(43);
});

test('throws error when different type is being passed to multiply', () => {
  expect(calculator.multiply('12','14')).toThrow(TypeError);
  expect(calculator.multiply('rer',12)).toThrow(TypeError);
});

// Divide
test('divides integers correctly', () => {
  expect(calculator.divide(1,5)).toBe(0.2);
  expect(calculator.divide(0,8)).toBe(0);
  expect(calculator.divide(5,0)).toBe(undefined);
  expect(calculator.divide(12,-75)).toBe(-0.16);
});

test('divides floats correctly', () => {
  expect(calculator.divide(9.4,11.2)).toBe(0.8392857142857144);
  expect(calculator.divide(10.5,2.5)).toBe(4.2);
  expect(calculator.divide(12.8,2.5)).toBe(5.12);
});

test('divides float with integer', () => {
  expect(calculator.divide(18.5,2)).toBe(9.25);
  expect(calculator.divide(11.5,10)).toBe(1.15);
  expect(calculator.divide(4.3,10)).toBe(0.43);
});

test('throws error when different type is being passed to divide', () => {
  expect(calculator.divide('12','14')).toThrow(TypeError);
  expect(calculator.divide('rer',12)).toThrow(TypeError);
});
