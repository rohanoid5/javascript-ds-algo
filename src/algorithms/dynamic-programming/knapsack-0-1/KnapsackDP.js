/**
 * 0-1 Knapsack Problem
 * Given weights and values of n items,
 * put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
 *
 * Solution:
 * W[] is the set of weights and Val[] is the set of value associated with W.
 * If the w is capacity of the knapsack we can say, K(W, V, w, n) will give us the optimal solution.
 * If w < W[n] then K(W, V, w, n) = K(W, V, w, n - 1)
 * else K(W, V, w, n) = Max(K(W, V, w, n - 1), V[n - 1] + K(W, V, w - W[n - 1], n - 1))
 * We are basically picking the maximum value if we include or exclude the nth item.
 */
const knapsack = function (W, V, wt) {
  const table = new Array(wt + 1)
    .fill(null)
    .map((_) => new Array(W.length + 1).fill(0));

  for (let i = 0; i < wt + 1; i++) {
    for (let j = 0; j < W.length + 1; j++) {
      if (i === 0 || j === 0) {
        table[i][j] = 0;
      } else if (i >= W[j - 1]) {
        table[i][j] = Math.max(
          V[j - 1] + table[i - W[j - 1]][j - 1],
          table[i][j - 1]
        );
      } else {
        table[i][j] = table[i][j - 1];
      }
    }
  }

  return table[wt][W.length];
};

module.exports = knapsack;
