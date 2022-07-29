const MaxHeap = require("../../../data-structures/heap/MaxHeap");

/**
 * Rearrange characters in a string such that no two adjacent are same
 * Given a string with repeated characters, the task is to rearrange characters
 * in a string so that no two adjacent characters are same.
 *
 * Solution:
 * 1. Create a hashmap of frequency of characters
 * 2. Insert the characters in a Max Heap according to their frequency
 * 3. Keep a variable to track the previously dequeued character from the Heap
 * 4. Dequeue from Max Heap, insert it into result string and decrease the frequency
 * 5. If previous character has positive frequency, push it to the Max Heap
 * 6. Make the current character as previous
 * 7. Repeat step 4 - 6 until Queue is empty
 * 8. If result string and original string is of same length, we have the answer
 */
const rearrangeString = function (str) {
  let res = "";
  let frequencyMap = {};
  for (let c of str) {
    if (c in frequencyMap) frequencyMap[c] += 1;
    else frequencyMap[c] = 1;
  }

  let maxHeap = new MaxHeap(Object.keys(frequencyMap).length);
  for (let key in frequencyMap) {
    maxHeap.enqueue(key, frequencyMap[key]);
  }

  let previous = { value: "*", priority: -1 };

  while (maxHeap.N > 0) {
    let key = maxHeap.dequeue();
    res += key.value;
    frequencyMap[key.value] -= 1;

    if (previous.value in frequencyMap && previous.priority > 0) {
      maxHeap.enqueue(previous.value, previous.priority);
    }

    previous = { value: key.value, priority: frequencyMap[key.value] };
  }

  return res.length === str.length ? res : "";
};

module.exports = rearrangeString;
