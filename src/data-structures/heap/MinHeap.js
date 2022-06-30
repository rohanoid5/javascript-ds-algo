const Heap = require("./Heap");

class MinHeap extends Heap {
  isPairInCorrectOrder(i, j) {
    return this.storage[i].priority > this.storage[j].priority;
  }
}

module.exports = MinHeap;
