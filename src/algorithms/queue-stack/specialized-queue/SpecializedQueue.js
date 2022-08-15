/**
 * Design a Queue data structure to get minimum in O(1)
 *
 * Solution: T = O(N), S = O(N)
 */
class SpecializedQueue1 {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.storage = [];
    this.minValues = [];
  }

  enqueue(item) {
    if (this.size === this.capacity) throw new Error("Queue is full");

    if (this.size === 0) {
      this.storage.push(item);
      this.minValues.push(item);
    } else {
      this.storage.push(item);
      let i = this.size - 1;
      this.minValues.push(item);
      while (item < this.minValues[i] && i >= 0) {
        this.minValues[i] = item;
        i -= 1;
      }
    }
    this.size += 1;
  }

  dequeue() {
    if (this.size === 0) throw new Error("Queue is empty");

    this.minValues.shift();
    return this.storage.shift();
  }

  getMin() {
    if (this.size === 0) throw new Error("Queue is empty");

    return this.minValues[0];
  }
}

module.exports = {
  SpecializedQueue1,
};
