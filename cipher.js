class cipher {
  static caesarEncrypt(string, shift = 10) {
    if (typeof string !== 'string' || !Number.isInteger(shift)) throw new TypeError();
    const originalStringArray = string.split('');

    const charCodeBase26 = (charCode, shift) => (charCode + shift) % 26;
    const caesarEncryptChar = (character, shift) => {
      const charCode = character.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) { // For lowerCase
        const shiftedCharCodeBase26 = charCodeBase26(charCode - 97, shift);

        return String.fromCharCode(97 + shiftedCharCodeBase26);
      } if (charCode >= 65 && charCode <= 90) { // For upperCase
        const shiftedCharCodeBase26 = charCodeBase26(charCode - 65, shift);

        return String.fromCharCode(65 + shiftedCharCodeBase26);
      }

      return character;
    };

    const encrypted = originalStringArray.map(character => caesarEncryptChar(character, shift));

    return encrypted.join('');
  }
}

module.exports = cipher;
