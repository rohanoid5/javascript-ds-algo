const Node = require("./Node");

class StackUsingLinkedList {
  constructor(capacity = 0) {
    this.capacity = capacity;
    this.size = 0;
    this.top = null;
  }

  getSize() {
    return this.size;
  }

  push(item) {
    if (this.getSize() === this.capacity) {
      throw new Error("Stack size exceeded");
    }

    this.size += 1;
    let node = new Node(item);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.getSize() === 0) {
      throw new Error("Stack is empty");
    }

    this.size -= 1;
    let temp = this.top;
    this.top = this.top.next;

    return temp.value;
  }
}

module.exports = StackUsingLinkedList;
