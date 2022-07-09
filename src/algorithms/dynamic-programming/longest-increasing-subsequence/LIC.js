/**
 * Longest Increasing Subsequence
 * The Longest Increasing Subsequence (LIS) problem is to
 * find the length of the longest subsequence of a given sequence such that
 * all elements of the subsequence are sorted in increasing order.
 *
 * Solution:
 * If L(i) gives us the longest increasing subsequence for index i of Array arr,
 * we can say L(i) = 1 + Max(L(j)) where 0 <= j < i and arr[j] < arr[i]
 * else L(i) = 1. Now we have to find i which yields the max value
 */
const LIC = function (arr) {
  const lic = new Array(arr.length).fill(1);
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        lic[i] = Math.max(lic[i], 1 + lic[j]);
      }
    }

    max = Math.max(max, lic[i]);
  }

  return max;
};

module.exports = LIC;
