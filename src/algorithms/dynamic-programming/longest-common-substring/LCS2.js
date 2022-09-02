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

  const dp = new Array(M + 1).fill(null).map((_) => new Array(N + 1).fill(0));

  for (let i = 1; i < M + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (X[i - 1] === Y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = i > j ? dp[i - 1][j] : dp[i][j - 1];
      }
    }
  }

  return dp[M][N];
};

module.exports = LCS2;
