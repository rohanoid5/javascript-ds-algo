class StackUsingArray {
  constructor(capacity = 100) {
    this.capacity = capacity;
    this.peak = -1;
    this.storage = [];
  }

  getSize() {
    return this.peak + 1;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  push(item) {
    if (this.capacity === this.getSize()) {
      throw new Error("Stack size exceeded");
    }

    this.peak += 1;
    this.storage.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    let item = this.storage.pop();
    this.peak -= 1;

    return item;
  }
}

module.exports = StackUsingArray;
