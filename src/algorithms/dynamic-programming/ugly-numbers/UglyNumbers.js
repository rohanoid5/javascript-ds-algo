/**
 * Ugly numbers are numbers whose only prime factors are 2, 3 or 5.
 * The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included.
 * Given a number n, the task is to find nth Ugly number.
 * @param {number} num
 * @returns {number}
 */
const findUglyNumber = function (num) {
  let uglyNumbers = Array(num - 1).fill(0);
  uglyNumbers[0] = 1;

  let i1 = 0;
  let i2 = 0;
  let i3 = 0;

  let nextMultipleOf2 = uglyNumbers[i1] * 2;
  let nextMultipleOf3 = uglyNumbers[i2] * 3;
  let nextMultipleOf5 = uglyNumbers[i3] * 5;

  for (let i = 1; i < num; i++) {
    uglyNumbers[i] = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );

    if (uglyNumbers[i] === nextMultipleOf2) {
      i1 += 1;
      nextMultipleOf2 = uglyNumbers[i1] * 2;
    }

    if (uglyNumbers[i] === nextMultipleOf3) {
      i2 += 1;
      nextMultipleOf3 = uglyNumbers[i2] * 3;
    }

    if (uglyNumbers[i] === nextMultipleOf5) {
      i3 += 1;
      nextMultipleOf5 = uglyNumbers[i3] * 5;
    }
  }

  return uglyNumbers[num - 1];
};

module.exports = findUglyNumber;
