/**
 * Largest Sum Contiguous Subarray
 *
 * Solution:
 * 1. MaxEndingHere = 0 and MaxSoFar = MIN.INT
 * 2. Start from 0 to n - 1 in Array
 * 3. MaxEndingHere = MaxEndingHere + Array[i]
 * 4. if MaxEndingHere > MaxSoFar then MaxSoFar = MaxEndingHere
 * 5. If MaxEndingHere < 0 then MaxEndingHere = 0
 * 6. Repeat step 3-5 until the loop ends
 * 7. Return MaxSoFar
 */
const largestContiguousSum = function (arr) {
  let maxSoFar = Number.MIN_SAFE_INTEGER;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];
    if (maxEndingHere > maxSoFar) maxSoFar = maxEndingHere;
    if (maxEndingHere < 0) maxEndingHere = 0;
  }

  return maxSoFar;
};

module.exports = largestContiguousSum;
