class cipher {
  static caesarEncrypt(string, shift = 10) {
    if (typeof string != 'string' || !Number.isInteger(shift)) throw new TypeError;
    let originalStringArray = string.split('');

    const charCodeBase26 = (charCode,shift) => { return (charCode + shift) % 26 };
    const caesarEncryptChar= (character, shift) => {
      const charCode = character.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122){ // For lowerCase
        const shiftedCharCodeBase26 = charCodeBase26(charCode - 97,shift)

        return String.fromCharCode(97 + shiftedCharCodeBase26);
      } else if (charCode >= 65 && charCode <= 90) { // For upperCase
        const shiftedCharCodeBase26 = charCodeBase26(charCode - 65,shift)

        return String.fromCharCode(65 + shiftedCharCodeBase26);
      }

      return character
    }

    let encryptedStringArray = originalStringArray.map( character => {
      return caesarEncryptChar(character, shift)
    });

    return encryptedStringArray.join('');
  }
}

module.exports = cipher;
