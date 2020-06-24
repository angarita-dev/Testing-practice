class calculator {
  static add(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') { throw new TypeError(); }
    return a + b;
  }

  static substract(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') { throw new TypeError(); }
    return a - b;
  }

  static multiply(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') { throw new TypeError(); }
    return a * b;
  }

  static divide(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') { throw new TypeError(); }
    if (b === 0) return undefined;
    return a / b;
  }
}

module.exports = calculator;
