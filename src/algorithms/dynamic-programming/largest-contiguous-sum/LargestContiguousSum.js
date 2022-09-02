/**
 * Maximum subarray sum in O(n) using prefix sum
 * Given an Array of Positive and Negative Integers, find out the Maximum Subarray Sum in that Array.
 *
 * Solution:
 * 1. Create Prefix Sum Array prefixSum[]
 * 2. Set minPrefixSum as 0
 * 3. Start a loop from 0 to n - 1
 * 4. Set Candidate as Min(prefixSum[i] - minPrefixSum, Candidate)
 * 5. Set minPrefixSum as Min(minPrefixSum, prefixSum[i])
 * 6. Return Candidate
 */
const largestContiguousSum = function (arr) {
  let prefixSum = new Array(arr.length).fill(null);
  prefixSum[0] = arr[0];
  let minPrefixSum = 0;
  let res = 0;

  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    res = Math.max(res, prefixSum[i] - minPrefixSum);
    minPrefixSum = Math.min(prefixSum[i], minPrefixSum);
  }

  return res;
};

module.exports = largestContiguousSum;
