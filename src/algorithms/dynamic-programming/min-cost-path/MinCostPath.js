/**
 * Min Cost Path
 * Given a cost matrix cost[][] and a position (m, n) in cost[][],
 * write a function that returns cost of minimum cost path to reach (m, n) from (0, 0).
 *
 * Solution:
 * If C(M, N) is the solution to reach (M, N) Co-ordinate from (0, 0)
 * then we can say C(M, N) = MIN(C(M, N - 1), C(M - 1, N - 1), C(M - 1, N - 1))
 * Since there is overlapping sub-problems we can use DP
 */
const minCostPath = function (costs) {
  const N = costs.length;
  const M = costs[0].length;
  const dp = new Array(N).fill(null).map((_) => new Array(M).fill(0));
  dp[0][0] = costs[0][0];

  for (let i = 1; i < N; i++) {
    dp[i][0] = dp[i - 1][0] + costs[i][0];
  }

  for (let i = 1; i < M; i++) {
    dp[0][i] = dp[0][i - 1] + costs[0][i];
  }

  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      dp[i][j] =
        Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + costs[i][j];
    }
  }

  return dp[N - 1][M - 1];
};

module.exports = minCostPath;
