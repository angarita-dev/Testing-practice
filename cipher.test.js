const cipher = './cipher';

test('should encrypt lowcase strings with especified shift', () => {
  expect(cipher.caesearEncrypt('really unpractical cipher'),10).toBe('bokvvi exzbkmdsmkv mszrob');
  expect(cipher.caesearEncrypt('really unpractical cipher'),15).toBe('gtpaan jcegprixrpa rxewtg');
  expect(cipher.caesearEncrypt('really unpractical cipher'),7).toBe('ylhssf buwyhjapjhs jpwoly');
});

test('should encrypt lowcase strings without especified shift', () => {
  expect(cipher.caesearEncrypt('done in javascript')).toBe('nyxo sx tkfkcmbszd');
  expect(cipher.caesearEncrypt('meant to be tested using jest')).toBe('woxd dy lo docdon ecsxq tocd');
  expect(cipher.caesearEncrypt('really unpractical cipher')).toBe('bokvvi exzbkmdsmkv mizrob');
});

test('shoud mantain the original casing', () => {
  expect(cipher.caesarEncrypt('CAPS test',15)).toBe('RPEH ithi');
  expect(cipher.caesarEncrypt('testing MAYUS',15)).toBe('ithixcv BPNJH');
});

test('shoud mantain puntuation marks', () => {
  expect(cipher.caesarEncrypt('this! is? a really, unpractical. cipher;',15))
    .toBe('iwxh! xh? p gtpaan, jcegprixrpa. rnewtg;');
  expect(cipher.caesarEncrypt('testing MAYUS',15)).toBe('ithixcv BPNJH');
});

test('should raise type error when not passing string or NaN shift', () => {
  expect(() => { cipher.caesarEncrypt(true) }).toThrow(TypeError);
  expect(() => { cipher.caesarEncrypt([]) }).toThrow(TypeError);
  expect(() => { cipher.caesarEncrypt(123) }).toThrow(TypeError);
  expect(() => { cipher.caesarEncrypt('str',[]) }).toThrow(TypeError);
  expect(() => { cipher.caesarEncrypt('str',true) }).toThrow(TypeError);
  expect(() => { cipher.caesarEncrypt('str','sdst') }).toThrow(TypeError);
});
