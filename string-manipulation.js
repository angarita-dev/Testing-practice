class manipulateString {
  static reverse(string) {
    if (typeof (string) !== 'string') { throw new TypeError(); }
    return string.split('').reverse().join('');
  }

  static capitalize(string) {
    if (typeof (string) !== 'string') { throw new TypeError(); }
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
  }
}

module.exports = manipulateString;
