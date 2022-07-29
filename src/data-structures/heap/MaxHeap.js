const Heap = require("./Heap");
const HeapWithComments = require("./HeapWithComments");

class MaxHeap extends HeapWithComments {
  isPairInCorrectOrder(i, j) {
    return this.storage[i].priority < this.storage[j].priority;
  }
}

module.exports = MaxHeap;
