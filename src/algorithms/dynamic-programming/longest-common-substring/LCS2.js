/**
 * Longest Common Substring
 * Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.
 * Input : X = “GeeksforGeeks”, y = “GeeksQuiz”
 * Output : 5
 * Explanation: The longest common substring is “Geeks” and is of length 5.
 *
 * Solution:
 * The problem has optimal sub-structure in the form of Longest common Suffix.
 * if X of length N and Y of length M, then their longest common suffix is LCSuffix(X, Y, M, N)
 * LCSuffix(X, Y, M, N) = LCSuffix(X, Y, M - 1, N - 1) + 1 if X[M - 1] = y[N - 1]
 * LCSuffix(X, Y, M, N) = 0 if X[M - 1] != y[N - 1]
 * Now, LCS2(X, Y, M, N) = MAX(LCSuffix(X, Y, i, j)) where 1 <= i <= M and 1 <= j <= N
 */
const LCS2 = function (X, Y) {
  const M = X.length;
  const N = Y.length;
  let result = 0;

  const lcSuffix = new Array(M + 1)
    .fill(null)
    .map((_) => new Array(N + 1).fill(0));

  for (let i = 0; i < M + 1; i++) {
    for (let j = 0; j < N + 1; j++) {
      if (i === 0 || j === 0) {
        lcSuffix[i][j] = 0;
      } else if (X[i - 1] === Y[j - 1]) {
        lcSuffix[i][j] = lcSuffix[i - 1][j - 1] + 1;
        result = Math.max(result, lcSuffix[i][j]);
      } else {
        lcSuffix[i][j] = 0;
      }
    }
  }

  return result;
};

module.exports = LCS2;
