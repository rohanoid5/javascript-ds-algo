const LinkedListNode = require("./LinkedList");

class DoublyLinkedListNode extends LinkedListNode {
  constructor(value) {
    super(value);
    this.previous = null;
  }
}

module.exports = DoublyLinkedListNode;
