/**
 * Egg Dropping Puzzle
 * Given n eggs and k floors, find out minimum number of trials to find out where the egg would break.
 *
 * Solution:
 * For a floor x we can say if we drop an egg from n eggs 2 things can happen:
 * If the egg breaks: the solution is reduced to x - 1 floors and n - 1 eggs,
 * otherwise it is reduced to k - x floors and n eggs
 *
 * If Fn(k, n) gives us the output we can say,
 * Fn(k, n) = 1 + MIN{MAX(Fn(k - x, n), Fn(x - 1, n - 1))} where 1 >= x >= k
 */
const eggDropping = function (n, k) {
  const table = new Array(n + 1)
    .fill(null)
    .map((_) => new Array(k + 1).fill(0));
  let res = 0;

  for (let i = 1; i < n + 1; i++) {
    table[i][0] = 0;
    table[i][1] = 1;
  }

  for (let j = 1; j < k + 1; j++) {
    table[1][j] = j;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= k; j++) {
      table[i][j] = Number.MAX_SAFE_INTEGER;
      for (let x = 1; x <= j; x++) {
        res = 1 + Math.max(table[i][j - x], table[i - 1][x - 1]);
        if (res < table[i][j]) {
          table[i][j] = res;
        }
      }
    }
  }

  return table[n][k];
};

module.exports = eggDropping;
