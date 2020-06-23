const arrayAnalyze = require('./array-analysis');

test('should contain lenght of array', () => {
  expect(arrayAnalyze([1,5,7,23,7])).toMatchObject({ length: 5 });
  expect(arrayAnalyze([1,5,7,23,7,5,2,7])).toMatchObject({ length: 8 });
  expect(arrayAnalyze([1,5,7])).toMatchObject({ length: 3 });
});

test('should contain max of array', () => {
  expect(arrayAnalyze([1,5,7,23,7])).toMatchObject({ max: 23 });
  expect(arrayAnalyze([1,5,7,23,7,5,2,79])).toMatchObject({ max: 79 });
  expect(arrayAnalyze([1,5,7])).toMatchObject({ max: 7 });
});

test('should contain max of array', () => {
  expect(arrayAnalyze([1,5,7,23,7])).toMatchObject({ min: 1 });
  expect(arrayAnalyze([5,7,23,7,5,2,79])).toMatchObject({ min: 2 });
  expect(arrayAnalyze([5,7])).toMatchObject({ min: 5 });
});

test('should contain average of array', () => {
  expect(arrayAnalyze([1,5,7,23,7])).toMatchObject({ average: 8.6 });
  expect(arrayAnalyze([5,7,23,7,5,1])).toMatchObject({ average: 8 });
  expect(arrayAnalyze([5,7])).toMatchObject({ average: 6 });
});

test('should throw error if array is not from numbers', () => {
  expect(() => { arrayAnalyze([1,5,7,'23',7])}).toThrow(TypeError);
  expect(() => { arrayAnalyze([23,7,[2],5,1])}).toThrow(TypeError);
  expect(() => { arrayAnalyze('[23,7,5,1]')}).toThrow(TypeError);
  expect(() => { arrayAnalyze(true)}).toThrow(TypeError);
  expect(() => { arrayAnalyze(12345)}).toThrow(TypeError);
});
