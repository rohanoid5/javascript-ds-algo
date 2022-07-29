/**
 * Minimum Swaps to Group All 1's Together
 * Given a binary array data, return the minimum
 * number of swaps required to group all 1’s present in the array together in any place in the array.
 *
 * Solution:
 * We will find out the total number of 1s available in the Array, say x
 * Now we will check each x sized subarray and find out the subarray which has the
 * maximum number of 1s. From that subarray the count of 0s will be the minimum number of
 * swaps required to group all the 1s together.
 *
 * An efficient way to solve this is to make use of Sliding Window
 * 1. Let's say totalCount is total number of 1s
 * 2. maxCount and currCount is set to 0
 * 3. We initialize windowStart and windowEnd
 * 4. We iterate over the array and increase currCount of 1s
 * 5. when window size i.e. windowEnd - windowStart + 1 === totalCount
 * 6. maxCount will be MAX(maxCount, currCount)
 * 7. We will decrease the window from start and decrease currCount if windowStart has 1
 * 8. Finally the difference between totalCount and maxCount will be the minimum swap required
 */
const minimumSwapsRequired = function (arr) {
  let totalCount = 0;
  let maxCount = 0;
  let currCount = 0;
  let windowStart = 0;

  totalCount = arr.reduce((acc, curr) => {
    if (curr === 1) acc += curr;
    return acc;
  }, 0);

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currCount += arr[windowEnd];
    if (windowEnd - windowStart + 1 === totalCount) {
      maxCount = Math.max(maxCount, currCount);
      if (arr[windowStart] === 1) currCount -= 1;
      windowStart += 1;
    }
  }

  return totalCount - maxCount;
};

module.exports = minimumSwapsRequired;
