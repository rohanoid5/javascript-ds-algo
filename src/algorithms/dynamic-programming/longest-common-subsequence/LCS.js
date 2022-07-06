/**
 * Longest Common Subsequence
 * Given two sequences, find the length of longest subsequence present in both of them.
 * A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.
 * For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”
 *
 * Solution:
 * Let's say the first word(X) is of length N and the second(Y) one is of length M.
 * If LCS(N, M) gives us the result then we can say
 * if X[N - 1] == Y[M - 1] then LCS(N, M) = LCS(N - 1, M - 1) + 1
 * otherwise, LCS(N, M) = MAX{LCS(N - 1, M), LCS(N, M - 1)}
 * Since, there are repeating sub-problems we can use DP here.
 */
const LCS = function (X, Y) {
  const n = X.length;
  const m = Y.length;

  const table = new Array(n + 1).fill(null).map((_) => new Array(m + 1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      if (i === 0 || j === 0) {
        table[i][j] = 0;
      } else if (X[i - 1] === Y[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
      }
    }
  }

  return table[n][m];
};

module.exports = LCS;
