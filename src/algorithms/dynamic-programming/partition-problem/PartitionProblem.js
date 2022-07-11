/**
 * Partition problem
 * Partition problem is to determine whether a given set can be partitioned
 * into two subsets such that the sum of elements in both subsets is the same.
 *
 * Solution:
 * First we check if the sum of all the elements can be divided by 2.
 * If yes, then we can say if for Set of length N and the sum S,
 * Partition(S, N) is the solution, in that case,
 * if S < Set(N - 1), Partition(S, N) = Partition(S, N - 1)
 * Otherwise, Partition(S, N) = Partition(S, N - 1) or Partition(S - Set(N - 1), N - 1)
 */
const partitionSum = function (arr) {
  let sum = arr.reduce((acc, curr) => acc + curr);
  if (sum % 2 !== 0) return false;
  sum /= 2;
  const table = new Array(arr.length + 1)
    .fill(null)
    .map((_) => new Array(sum + 1).fill(false));

  for (let j = 0; j < sum + 1; j++) {
    table[0][j] = false;
  }

  for (let i = 0; i < arr.length + 1; i++) {
    table[i][0] = true;
  }

  for (let i = 1; i < arr.length + 1; i++) {
    const curr = arr[i - 1];
    for (let j = 0; j < sum + 1; j++) {
      if (curr > j) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = table[i - 1][j] || table[i - 1][j - curr];
      }
    }
  }

  return table[arr.length][sum];
};

module.exports = partitionSum;
