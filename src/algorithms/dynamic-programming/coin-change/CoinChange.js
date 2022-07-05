/**
 * Coin Change
 * Given a value N, if we want to make change for N cents,
 * and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins,
 * how many ways can we make the change? The order of coins doesn’t matter.
 *
 * If we can create a state where Count(S, m, n) is the solution where S is the set of coins and
 * m is the mth coin and n is the number, we can create a recursive formula as
 * Count(S, m, n) = Count(S, m - 1, n) + Count(S, m, n - S[m])
 */
const countCoinChange = function (num, coins) {
  return dpCount(num, coins, coins.length);
};

const dpCount = function (num, coins, m) {
  let table = new Array(num + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = coins[i]; j < num + 1; j++) {
      table[j] += table[j - coins[i]];
    }
  }

  return table[num];
};

module.exports = countCoinChange;
