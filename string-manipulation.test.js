const manipulateString = require('./string-manipulation');

test('makes first character capitalized', () => {
  expect(manipulateString.capitalize('test String')).toBe('Test String');
  expect(manipulateString.capitalize('Test String')).toBe('Test String');
  expect(manipulateString.capitalize('1234 String')).toBe('1234 String');
});
