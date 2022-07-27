/**
 * Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr.
 * Since the answer may be large, return the answer modulo 10^9 + 7.
 *
 * Solution:
 * The idea here is to make use of monotonously increasing Stack.
 * For each elements we will find the previous smallest element and next smallest element.
 * The distance between i and PSE is g1 and NSE and i is g2. The number of subarrays where
 * i is smallest is (g1 + 1) * (g2 + 1).
 * Hence the answer to the problem will be SUM(A[i] * (g1 + 1) * (g2 + 1)) for i = 0 to n - 1
 */
const sumSubArrayMinimum = function (arr) {
  let left = new Array(arr.length);
  let right = new Array(arr.length);
  let s1 = [];
  let s2 = [];
  let res = 0;
  let mod = 1e9 + 7;

  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    while (s1.length > 0 && s1[s1.length - 1][0] > arr[i]) {
      count += s1[s1.length - 1][1];
      s1.pop();
    }

    s1.push([arr[i], count]);
    left[i] = count;
  }

  for (let j = arr.length - 1; j >= 0; j--) {
    let count = 1;

    while (s2.length > 0 && s2[s2.length - 1][0] >= arr[j]) {
      count += s2[s2.length - 1][1];
      s2.pop();
    }

    s2.push([arr[j], count]);
    right[j] = count;
  }

  for (let i = 0; i < arr.length; i++) {
    res += arr[i] * left[i] * right[i];
    res %= mod;
  }

  return res;
};

module.exports = sumSubArrayMinimum;
