/**
 * Count number of ways to partition a set into k subsets
 *
 * Solution:
 * The Recurrence relationship is defined as:
 * CountPartition(n, k) gives result for n numbers in k subsets
 * We can say,
 * 1. The previous n - 1 numbers are partitioned in k subsets i.e. CountPartition(n - 1, k),
 * therefore if include nth number in all sets it will be k * CountPartition(n - 1, k)
 * 2. The previous n - 1 numbers are partitioned in k - 1 i.e. CountPartition(n - 1, k - 1),
 * therefore we will create new partition for nth number, so CountPartition(n - 1, k - 1)
 * 3. CountPartition(n, k) = k * CountPartition(n - 1, k) + CountPartition(n - 1, k - 1)
 * 4. We will apply DP to optimize the solution
 */
const countNumberOfPartition = function (n, k) {
  const table = new Array(n + 1)
    .fill(null)
    .fill((_) => new Array(k + 1).fill(-1));

  for (let i = 0; i < n + 1; i++) {
    table[i][0] = 0;
  }

  for (let j = 0; j < k + 1; j++) {
    table[0][j] = 0;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < k + 1; j++) {
      if (i === j || j === 1) {
        table[i][j] = 1;
      } else {
        table[i][j] = j * table[i - 1][j] + table[i - 1][j - 1];
      }
    }
  }

  return table[n][k];
};

module.exports = countNumberOfPartition;
