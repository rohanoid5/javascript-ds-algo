/**
 * Policemen catch thieves
 * Given an array of size n that has the following specifications:
 * 1. Each element in the array contains either a policeman or a thief.
 * 2. Each policeman can catch only one thief.
 * 3. A policeman cannot catch a thief who is more than K units away from the policeman.
 *
 * Solution: T = O(N), S = O(N)
 * 1. We will create 2 arrays, thieves[] and police[] to store indices of same
 * 2. We will iterate the two arrays, and get the minimum indices of these two arrays
 * 3. If absolute difference is with K unit then we will increase count and increase min index for both
 * 4. Otherwise we will move whichever index is smaller among the two
 * 5. Repeat step 2 - 5 until one or both has reached the end.
 */
const policeCatchThieves = function (arr, k) {
  let pol = [];
  let thi = [];
  let res = 0;
  let i = 0;
  let j = 0;

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === "T") thi.push(k);
    else pol.push(k);
  }

  while (i < pol.length && j < thi.length) {
    if (Math.abs(pol[i] - thi[j]) <= k) {
      res += 1;
      i += 1;
      j += 1;
    } else {
      if (pol[i] < thi[j]) {
        i += 1;
      } else {
        j += 1;
      }
    }
  }

  return res;
};

module.exports = policeCatchThieves;
