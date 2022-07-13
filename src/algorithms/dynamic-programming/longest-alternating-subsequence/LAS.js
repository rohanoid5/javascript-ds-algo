/**
 * Longest alternating subsequence
 * A sequence {x1, x2, .. xn} is alternating sequence
 * if its elements satisfy one of the following relations:
 * 1. x1 < x2 > x3 < x4 > x5 < …. xn
 * 2. x1 > x2 < x3 > x4 < x5 > …. xn
 *
 * Solution:
 * We need to create a 2D Matrix. Let's say Seq is the sequence of length,
 * then results of each index will be stored in Table[n][2]
 * For index i (0 <= i < n ), Table[i][0] will store the LAS length if ith
 * element is greater than last element. Similarly, Table[i][1] will store the
 * LAS length if ith element is less than last element.
 *
 * Table[i][0] = Max(Table[i][0], Table[j][1] + 1) if Seq[i] > Seq[j]
 * Table[i][1] = Max(Table[i][1], Table[j][0] + 1) if Seq[i] < Seq[j]
 * where 0 <= j < i
 */
const LAS = function (sequence) {
  const table = new Array(sequence.length)
    .fill(null)
    .map((_) => new Array(2).fill(1));
  let res = 1;

  for (let i = 0; i < sequence.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[i] > sequence[j]) {
        table[i][0] = Math.max(table[i][0], 1 + table[j][1]);
      }
      if (sequence[i] < sequence[j]) {
        table[i][1] = Math.max(table[i][1], 1 + table[j][0]);
      }
    }

    res = Math.max(res, table[i][0], table[i][1]);
  }

  return res;
};

const LAS2 = function (sequence) {
  let inc = 1;
  let dec = 1;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] > sequence[i - 1]) {
      inc = dec + 1;
    }

    if (sequence[i] < sequence[i - 1]) {
      dec = inc + 1;
    }
  }

  return Math.max(inc, dec);
};

module.exports = {
  LAS,
  LAS2,
};
