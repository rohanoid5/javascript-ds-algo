const MaxHeap = require("../../data-structures/heap/MaxHeap");

const heapSort = function (arr) {
  const heap = new MaxHeap(arr.length);

  arr.forEach((el) => {
    heap.enqueue(0, el);
  });

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = heap.dequeue().priority;
  }

  return arr;
};

module.exports = heapSort;
