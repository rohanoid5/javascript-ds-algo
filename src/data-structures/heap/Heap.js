const Entry = require("./Entry");

class Heap {
  constructor(size) {
    this.storage = new Array(size + 1);
    this.size = size;
    this.N = 0;
  }

  enqueue(value, priority) {
    const newEntry = new Entry(value, priority);
    this.N += 1;
    this.storage[this.N] = newEntry;
    this.swim(this.N);
  }

  less(i, j) {
    return this.storage[i].priority < this.storage[j].priority;
  }

  swap(i, j) {
    [this.storage[i], this.storage[j]] = [this.storage[j], this.storage[i]];
  }

  swim(child) {
    if (this.size + 1 < this.N) throw new Error("Heap size is full");

    while (child > 1 && this.less(Math.floor(child / 2), child)) {
      this.swap(child, Math.floor(child / 2));
      child = Math.floor(child / 2);
    }
  }

  sink(parent) {
    while (2 * parent <= this.N) {
      let child = 2 * parent;

      if (child < this.N && this.less(child, child + 1)) {
        child += 1;
      }

      if (this.less(child, parent)) break;

      this.swap(parent, child);

      parent = child;
    }
  }

  dequeue() {
    if (this.size === 0) throw new Error("Heap is Empty");

    let maxEntry = this.storage[1];
    this.storage[1] = this.storage[this.N];
    delete this.storage[this.N];
    this.N -= 1;
    this.sink(1);

    return maxEntry;
  }
}

module.exports = Heap;
