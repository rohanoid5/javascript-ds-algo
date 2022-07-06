/**
 * Cutting a Rod
 * Given a rod of length n inches and an array of prices that includes prices of all pieces of size smaller than n.
 * Determine the maximum value obtainable by cutting up the rod and selling the pieces.
 *
 * Solution:
 * The problem has sub-optimal hence we can solve the problem like this:
 * If C(n) is a function which calculates the maximum value that can be obtained then,
 * C(n) = Max(Price[i] + C(n - i - 1)) where 0 >= i >= n and Price[n] is the list of prices.
 * Since, there are repeating sub-problems we can create a 1D Array to store all the results.
 */
const maxValRodCutting = function (n, prices) {
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let maxValue = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
      maxValue = Math.max(maxValue, prices[j] + dp[i - j - 1]);
    }
    dp[i] = maxValue;
  }

  return dp[n];
};

module.exports = maxValRodCutting;
