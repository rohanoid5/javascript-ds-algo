/**
 * Design a stack that supports getMin() in O(1) time and O(1) extra space
 *
 * Solution: We will implement this stack and keep an extra array to store the minimum value till the insertion of current element
 * 1. If Stack is empty we will insert at both normal storage and min storage
 * 2. Otherwise, we will insert at normal storage first and we will check if the currently inserted value is less than the top of min storage
 * 3. If yes we will push the new element in min storage, otherwise we will push the top of min storage again in min
 * 4. The top of min storage will give us the minimum
 * 5. When we pop we pop from both the normal storage and min storage
 *
 */
class SpecializedStack {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.storage = [];
    this.minStorage = [];
  }

  push(item) {
    if (this.capacity === this.size) throw new Error("Stack Overflow");

    this.size += 1;
    if (this.storage.length === 0) {
      this.storage.push(item);
      this.minStorage.push(item);
    } else {
      let min = this.minStorage[this.minStorage.length - 1];
      this.minStorage.push(item);

      if (item <= min) {
        this.minStorage.push(item);
      } else {
        this.minStorage.push(min);
      }
    }
  }

  pop() {
    if (this.size === 0) throw new Error("Stack is Empty");

    this.size -= 1;
    this.minStorage.pop();
    return this.storage.pop();
  }

  getMin() {
    if (this.minStorage.length === 0) throw new Error("Stack is Empty");

    return this.minStorage[this.minStorage.length - 1];
  }
}

module.exports = { SpecializedStack };
