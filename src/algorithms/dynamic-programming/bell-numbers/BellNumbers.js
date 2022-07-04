/**
 * Given a set of n elements, find number of ways of partitioning it.
 * @param {number} num
 * @returns number
 */
const getBellNumber = function (num) {
  let result = 0;
  let bellNumbers = new Array(num + 1)
    .fill(null)
    .map((_) => new Array(num + 1).fill(0));

  for (let i = 1; i < num + 1; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === 1 && i === j) {
        bellNumbers[i][j] = 1;
      } else {
        bellNumbers[i][j] =
          j * bellNumbers[i - 1][j] + bellNumbers[i - 1][j - 1];
      }
    }
  }

  for (let i = 0; i < num + 1; i++) {
    result += bellNumbers[num][i];
  }

  return result;
};

module.exports = getBellNumber;
