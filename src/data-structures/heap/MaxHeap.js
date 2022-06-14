const Heap = require("./Heap");

class MaxHeap extends Heap {
  isPairInCorrectOrder(i, j) {
    return this.storage[i].priority < this.storage[j].priority;
  }
}

module.exports = MaxHeap;
