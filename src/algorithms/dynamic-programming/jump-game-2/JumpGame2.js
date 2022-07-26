/**
 * Count number of jumps to reach end
 * Given an array of numbers where each element represents the max number of
 * jumps that can be made forward from that element. For each array element,
 * count the number of ways jumps can be made from that element to reach the end of the array.
 * If an element is 0, then a move cannot be made through that element.
 * The element that cannot reach the end should have a count "-1"
 *
 * Solution:
 * 1. Create an Array(count) to store count steps for each index
 * 2. Initialize each index with 0
 * 3. Start loop(i) from n - 2 to 0
 * 4. If arr[i] >= n - i - 1 set count[i] += 1
 * 5. Start loop(j) from i + 1 to n - 2 while(arr[i] + i >= j)
 * 6. If count[j] !== - 1 set count[i] += count[j]
 * 7. If count[i] === 0 set count[i] = -1
 * 8. Return count
 */
const jumpGame2 = function (arr) {
  const countSteps = new Array(arr.length).fill(0);
  const n = arr.length;

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] >= n - i - 1) countSteps[i] += 1;

    for (let j = i + 1; j < n - 1 && j <= i + arr[i]; j++) {
      if (countSteps[j] !== -1) countSteps[i] += countSteps[j];
    }

    if (countSteps[i] === 0) countSteps[i] = -1;
  }

  return countSteps;
};

module.exports = jumpGame2;
