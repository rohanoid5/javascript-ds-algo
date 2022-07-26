/**
 * Minimum number of jumps to reach end
 * Given an array of integers where each element represents the max number of
 * steps that can be made forward from that element.
 * Write a function to return the minimum number of jumps to reach the end of
 * the array (starting from the first element).
 * If an element is 0, they cannot move through that element. If the end isn’t reachable, return -1.
 *
 * Solution:
 * 1. Create an Array(jumps) to store the minimum steps for each index
 * 2. Initialize each value with MAX value, set first value as 0
 * 3. Run 2 nested loops
 * 4. First loop(i) will run from 0 to n - 1 and the second inner loop(j) will run from 0 to i
 * 5. if i <= arr[j] + j then set jumps[i] = Max(jumps[i], jumps[j] + 1)
 * 6. Return arr[n - 1]
 */
const jumpGame1 = function (arr) {
  const jumps = new Array(arr.length).fill(Number.MAX_SAFE_INTEGER);
  jumps[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (i <= arr[j] + j && jumps[j] !== Number.MAX_SAFE_INTEGER) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
        break;
      }
    }
  }

  return jumps[arr.length - 1];
};

module.exports = jumpGame1;
