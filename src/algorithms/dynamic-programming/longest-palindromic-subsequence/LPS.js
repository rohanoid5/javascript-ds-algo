/**
 * Longest Palindromic Subsequence
 * If the given sequence is “BBABCBCAB”, then the output should be 7 as
 * “BABCBAB” is the longest palindromic subsequence in it. “BBBBB” and “BBCBB”
 * are also palindromic subsequences of the given sequence, but not the longest ones.
 *
 * Solution:
 * If X[0, N - 1] is the string and LPS(N, i, j) gives us the result where i is index from start
 * and j is index from end, we can say:
 * If X[i] == X[j], LPS(N, i, j) = LPS(N, i + 1, j - 1) + 2
 * Else, LPS(N, i, j) = Max(LPS(N, i + 1, j), LPS(N, i, j - 1))
 */
const LPS = function (sequence) {
  let table = new Array(sequence.length)
    .fill(null)
    .map((_) => new Array(sequence.length).fill(0));

  for (let i = 0; i < sequence.length; i++) {
    table[i][i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (sequence[i] === sequence[j]) {
        table[i][j] = table[i - 1][j + 1] + 2;
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j + 1]);
      }
    }
  }

  return table[sequence.length - 1][0];
};

module.exports = LPS;
