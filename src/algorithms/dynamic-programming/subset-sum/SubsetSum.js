/**
 * Subset Sum Problem
 * Given a set of non-negative integers, and a value sum,
 * determine if there is a subset of the given set with sum equal to given sum.
 *
 * (Bottom Up DP)
 * We can create a Table T[m + 1][n + 1] where m is the size of Set and n is the target Sum
 * When m = 0, T[0][i] = False as the set is empty.
 * When n = 0, T[i][0] = True as for target sum 0 we don't have to include anything from the Set
 *
 * We'll iterate for each possible target sum from 0 to n as i
 * and we'll iterate for each item from the set as j
 * if curr target sum is less than current item T[i][j] = T[i - 1][j], whatever was the result for previous sum
 * otherwise, T[i][j] = T[i - 1][j] OR T[i - 1][j - Set[i]]
 */
const isSubsetSum = function (sum, set) {
  const table = new Array(set.length + 1)
    .fill(null)
    .map((_) => new Array(sum + 1).fill(false));

  for (let i = 0; i < sum + 1; i++) {
    table[0][i] = false;
  }

  for (let i = 0; i < set.length + 1; i++) {
    table[i][0] = true;
  }

  for (let i = 1; i < set.length + 1; i++) {
    const curr = set[i - 1];
    for (let j = 0; j < sum + 1; j++) {
      if (j < curr) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = table[i - 1][j] || table[i - 1][j - curr];
      }
    }
  }

  return table[set.length][sum];
};

module.exports = isSubsetSum;
