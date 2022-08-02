/**
 * Count of Subset Sum
 * Given a set of positive numbers,
 * find the total number of subsets whose sum is equal to a given number ‘S’.
 *
 * Solution: T = O(N * S)
 * This is a variation of Subset Sum
 * 1. We will create a 2D Array of size (N + 1) * (S + 1) Table[][]
 * 2. For S = 0, Table[i][0] = 1 as when the sum is 0 we can simply include and empty set
 * 3. For N = 1, Table[1][j] = Num[0] === j ? 1 : 0, as for 1 element we can only include if it is same as the sum
 * 4. If Num[i - 1] > j, Table[i][j] = Table[i - 1][j] as we simply exclude the last element which is greater than sum
 * 5. Otherwise we include it, Table[i][j] += Table[i - 1][j - Num[i - 1]]
 * 6. Table[N][S] will give us the result
 */
const countMinimumSubsetSum = function (arr, sum) {
  let table = new Array(arr.length + 1)
    .fill(null)
    .map(() => new Array(sum + 1).fill(0));

  for (let i = 0; i < arr.length + 1; i++) {
    table[i][0] = 1;
  }

  for (let j = 1; j < sum + 1; j++) {
    table[1][j] = arr[0] === j ? 1 : 0;
  }

  for (let i = 1; i < arr.length + 1; i++) {
    let curr = arr[i - 1];
    for (let j = 1; j < sum + 1; j++) {
      if (curr > j) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = table[i - 1][j] + table[i - 1][j - curr];
      }
    }
  }

  return table[arr.length][sum];
};

module.exports = countMinimumSubsetSum;
