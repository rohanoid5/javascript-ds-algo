/**
 * Minimum product subset of an array
 * Given an array a, we have to find the minimum product
 * possible with the subset of elements present in the array.
 * The minimum product can be a single element also.
 *
 * Solution: O(N)
 * 1. If there are even number of negative numbers then solution is product of all except greatest valued negative number
 * 2. If there are odd number of negative numbers and no zeros then solution is product of all
 * 3. If there are zeros and positive numbers then result is zero
 */
const minimumSubsetProduct = function (arr) {
  let minPositive = Number.MAX_SAFE_INTEGER;
  let maxNegative = Number.MIN_SAFE_INTEGER;
  let numberOfZeros = 0;
  let numberOfNegatives = 0;
  let subProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      numberOfZeros += 1;
      continue;
    }

    if (arr[i] > 0) {
      minPositive = Math.min(minPositive, arr[i]);
    }

    if (arr[i] < 0) {
      numberOfNegatives += 1;
      maxNegative = Math.max(maxNegative, arr[i]);
    }

    subProduct *= arr[i];
  }

  if (
    numberOfZeros === arr.length ||
    (numberOfNegatives === 0 && numberOfZeros > 0)
  ) {
    return 0;
  }

  if (numberOfNegatives === 0) return minPositive;

  if (numberOfNegatives % 2 === 0) {
    return parseInt(subProduct / maxNegative, 10);
  }

  return subProduct;
};

module.exports = minimumSubsetProduct;
