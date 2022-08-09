/**
 * Next Greater Element
 * Given an array, print the Next Greater Element (NGE) for every element.
 * The Next greater Element for an element x is the first greater element on the right side of x in the array.
 * Elements for which no greater element exist, consider the next greater element as -1.
 *
 * Solution: T = O(N), S = O(N)
 * 1. Create a stack to keep monotonically increasing values
 * 2. Start from the end of the array.
 * 3. Initialize the count as 1
 * 4. While the stack is not empty and the top element of stack is less than current element
 * increment count with top stack element's count and pop the element
 * 5. Push the current element along with it's count on the stack
 * 6. Set NGE of i as count;
 * 7. Repeat step 2 to 6 until we reach the start of the array
 * 8. Traverse through NGE and replace NGE indices with the actual array item
 */
const nextGreaterElement = function (arr) {
  let nge = [];
  let stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let count = 1;

    while (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
      count += stack[stack.length - 1][1];
      stack.pop();
    }

    stack.push([arr[i], count]);
    nge[i] = i + count >= arr.length ? -1 : arr[i + count];
  }

  return nge;
};

module.exports = nextGreaterElement;
