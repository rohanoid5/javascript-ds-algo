const Entry = require("./Entry");

/**
 * Heap is a Tree like Data Structure with Binary Nodes. The property of Heap is such that
 * any node's priority is greater than its children if it's a Max Heap otherwise it will be less
 * than its children
 */
class HeapWithComments {
  /**
   * Takes the capacity of the Heap
   * We will use a Array based storage with size + 1 length to store all the nodes
   * The first index in Array will always be empty. We will also use N to track the
   * last inserted node in Heap
   * @param {number} size
   */
  constructor(size) {
    this.size = size;
    this.storage = new Array(size + 1);
    this.N = 0;
  }

  /**
   * Indices of two Entries to be swapped
   * @param {number} i
   * @param {number} j
   */
  swap(i, j) {
    [this.storage[i], this.storage[j]] = [this.storage[j], this.storage[i]];
  }

  /**
   * Will check if two indices are following the Heap property
   * @param {number} i
   * @param {number} j
   */
  isPairInCorrectOrder(i, j) {
    throw new Error("This Method needs to be overridden");
  }

  /**
   * We will enqueue a value along with its priority
   * If the Heap size isn't full, we will create a new Entry.
   * We will increase the current last index N and put Entry in that index in Storage.
   * Since, we have inserted at leaf which is first available location in the Heap,
   * we need to swim the node up according to its priority
   * @param {number | string | object} value
   * @param {number} priority
   */
  enqueue(value, priority) {
    if (this.size === this.N) throw new Error("Heap is full");

    let node = new Entry(value, priority);
    this.N += 1;
    this.storage[this.N] = node;
    this.swim(this.N);
  }

  /**
   * This method takes the index of the Entry which needs to swim up.
   * We will keep checking whether the child and its immediate parent is following the Heap property.
   * If not we will swap the two Entries and we will keep doing this until the child reaches the root or
   * the property is satisfied.
   * @param {number} child
   */
  swim(child) {
    while (
      child > 1 &&
      this.isPairInCorrectOrder(Math.floor(child / 2), child)
    ) {
      this.swap(child, Math.floor(child / 2));
      child = Math.floor(child / 2);
    }
  }

  /**
   * Dequeues the Entry from the top of the Heap.
   * We will check if the Heap is empty or not. If not
   * we will save the Entry on top, replace the last entry with the top one.
   * Delete the last entry, shrink the Heap size. As we have placed the previous last entry at the top,
   * we will sink it down. Lastly, we will return the Entry we saved in the beginning
   * @returns Entry
   */
  dequeue() {
    if (this.N === 0) throw new Error("Heap is Empty");

    let entry = this.storage[1];
    this.storage[1] = this.storage[this.N];
    delete this.storage[this.N];
    this.N -= 1;
    this.sink(1);

    return entry;
  }

  /**
   * We will take the index of the Entry we want to swim downwards.
   * We will swim it downwards till there is a valid child it can be replaced with.
   * We will compare it against whichever child is greater or smaller among themselves.
   * If parent is in correct order, the Heap property is maintained. Otherwise we will swap
   * parent with child.
   * @param {number} parent
   */
  sink(parent) {
    while (2 * parent <= this.N) {
      let child = 2 * parent;

      if (child < this.N && this.isPairInCorrectOrder(child, child + 1)) {
        child += 1;
      }

      if (this.isPairInCorrectOrder(child, parent)) break;
      this.swap(child, parent);

      parent = child;
    }
  }
}

module.exports = HeapWithComments;
