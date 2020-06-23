function arrayAnalyze(array) {
  const length = array.length;
  let sum = 0;
  let min, max;

  array.forEach( number => {
    if(typeof number != 'number') throw TypeError;
    if(min === undefined || number < min) min = number;
    if(max === undefined || number > max) max = number;
    sum += number;
  });

  return {
    length,
    min,
    max,
    average: sum/length,
  }
}

module.exports = arrayAnalyze;
