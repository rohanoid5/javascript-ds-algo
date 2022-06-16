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

  _removeMin(node) {
    if (node.left === null) return node.right;

    node.left = this._removeMin(node.left);

    return node;
  }

  remove(val) {
    this.root = this._remove(this.root, val);
  }

  _remove(node, val) {
    if (node === null) return null;

    if (node.value < val) {
      node.right = this._remove(node.right, val);
    } else if (node.value > val) {
      node.left = this._remove(node.left, val);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let original = node;
      node = node.right;

      while (node.left) {
        node = node.left;
      }

      node.right = this._removeMin(original.right);
      node.left = original.left;
    }

    return node;
  }
}

module.exports = BinarySearchTree;
