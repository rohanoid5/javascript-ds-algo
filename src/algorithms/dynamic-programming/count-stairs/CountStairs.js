/**
 * Count ways to reach the nth stair using step 1, 2 or 3
 */
const countStairs = function (n) {
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
};

module.exports = countStairs;
