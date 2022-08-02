/**
 * Minimum Subset Sum Difference
 * Given a set of positive numbers, partition the set into two subsets
 * with minimum difference between their subset sums.
 *
 * Solution: T = O(N * S) where N is the number of elements and S is total sum of all elements
 * This problem is essentially a variation of Subset Sum.
 * We need to find out the set which sums to S / 2 or comes as close as possible to it.
 * The reason being S is the total sum of all elements then we can split it into two halves
 * If the two halves are as equal as possible the difference between them can also be as minimum as possible.
 * 1. Create a 2D Array of size (N + 1) * (S/2 + 1), Table[][]
 * 2. If N = 0 the Table[0][i] = false as without any number sum isn't possible
 * 3. If S = 0 the Table[i][0] = true as sum can be 0 without including any number
 * 4. If Num[i - 1] > j then Table[i][j] = Table[i - 1][j]
 * 5. Otherwise, Table[i][j] = Table[i - 1][j] || table[i - 1][j - Num[i - 1]]
 * 6. Now the the sum S / 2 might not exist in the set.
 * 7. Hence we will iterate over last row from right to left to find the first sum (sum1) which is possible
 * 8. sum2 = Sum - sum1 and result is Math.abs(sum2 - sum1)
 */
const minimumSubsetSumDifference = function (arr) {
  let sum = arr.reduce((acc, curr) => acc + curr);
  let requiredSum = Math.floor(sum / 2);
  let table = new Array(arr.length + 1)
    .fill(null)
    .map(() => new Array(requiredSum + 1).fill(false));

  for (let j = 0; j < requiredSum + 1; j++) {
    table[0][j] = false;
  }

  for (let i = 0; i < arr.length + 1; i++) {
    table[i][0] = true;
  }

  for (let i = 1; i < arr.length + 1; i++) {
    let curr = arr[i - 1];
    for (let j = 1; j < requiredSum + 1; j++) {
      if (curr > j) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = table[i - 1][j] || table[i - 1][j - curr];
      }
    }
  }

  let sum1 = 0;
  for (let i = requiredSum; i >= 0; i--) {
    if (table[arr.length][i] === true) {
      sum1 = i;
      break;
    }
  }

  let sum2 = sum - sum1;
  return Math.abs(sum2 - sum1);
};

module.exports = minimumSubsetSumDifference;
