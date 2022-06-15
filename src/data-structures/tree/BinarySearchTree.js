const BinaryNode = require("../tree/BinaryNode");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (node === null) {
      return new BinaryNode(value);
    }

    if (value <= node.value) {
      node.left = this._insert(node.left, value);
    } else {
      node.right = this._insert(node.right, value);
    }

    return node;
  }

  contains(target) {
    let node = this.root;

    while (node !== null) {
      if (node.value === target) return true;

      if (target > node.value) node = node.right;
      else node = node.left;
    }

    return false;
  }

  remove() {}
}

module.exports = BinarySearchTree;
