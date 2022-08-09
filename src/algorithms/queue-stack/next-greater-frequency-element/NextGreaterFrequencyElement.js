/**
 * Next Greater Frequency Element
 * Given an array, for each element find the value of the nearest element to the
 * right which is having a frequency greater than as that of the current element.
 * If there does not exist an answer for a position, then make the value ‘-1’.
 *
 * Solution: T = O(N), S = O(N)
 * Approach is same as Next Greater Element except we have to create a frequency hashmap and push into the
 * stack from that hashmap
 */
const nextGreaterFrequencyElement = function (arr) {
  let frequencyMap = {};
  let frequencyArr = [];
  let nge = [];
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in frequencyMap) {
      frequencyMap[arr[i]] += 1;
    } else {
      frequencyMap[arr[i]] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    frequencyArr[i] = frequencyMap[arr[i]];
  }

  for (let i = frequencyArr.length - 1; i >= 0; i--) {
    let count = 1;

    while (stack.length > 0 && stack[stack.length - 1][0] <= frequencyArr[i]) {
      count += stack[stack.length - 1][1];
      stack.pop();
    }

    stack.push([frequencyArr[i], count]);
    nge[i] = i + count >= arr.length ? -1 : arr[i + count];
  }

  return nge;
};

module.exports = nextGreaterFrequencyElement;
