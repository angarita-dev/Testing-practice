const manipulateString = require('./string-manipulation');

test('makes first character capitalized', () => {
  expect(manipulateString.capitalize('test String')).toBe('Test String');
  expect(manipulateString.capitalize('Test String')).toBe('Test String');
  expect(manipulateString.capitalize('1234 String')).toBe('1234 String');
});


test('capitalize should only allow strings', () => {
  expect(() => { manipulateString.capitalize(123) }).toThrow(TypeError);
  expect(() => { manipulateString.capitalize(true) }).toThrow(TypeError);
});

test('reverses string', () => {
  expect(manipulateString.reverse('test String')).toBe('gnirtS tset');
  expect(manipulateString.reverse('Test String')).toBe('gnirtS tseT');
  expect(manipulateString.reverse('1234 String')).toBe('gnirtS 4321');
});

test('reverse should only allow strings', () => {
  expect(() => { manipulateString.reverse(123) }).toThrow(TypeError);
  expect(() => { manipulateString.reverse(true) }).toThrow(TypeError);
});

