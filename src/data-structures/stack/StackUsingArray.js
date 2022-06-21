class StackUsingArray {
  constructor(capacity = 0) {
    this.capacity = capacity;
    this.peak = -1;
    this.storage = [];
  }

  getSize() {
    return this.peak + 1;
  }

  push(item) {
    if (this.capacity === this.getSize()) {
      throw new Error("Stack size exceeded");
    }

    this.peak += 1;
    this.storage.push(item);
  }

  pop() {
    if (this.getSize() === 0) {
      throw new Error("Stack is empty");
    }

    let item = this.storage[this.peak];
    delete this.storage[this.peak];
    this.peak -= 1;

    return item;
  }
}

module.exports = StackUsingArray;
