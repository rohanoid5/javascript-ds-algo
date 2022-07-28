const BinaryNode = require("./BinaryNode");

/**
 * This is a special Binary Tree Data Structure where Parent.value >= Left.value And Parent.value < Right.value
 */
class BinarySearchTreeWithComments {
  constructor() {
    this.root = null;
  }

  /**
   * Takes a value and inserts it into the Tree
   * @param {string | number} value
   */
  insert(value) {
    this.root = this._insert(this.root, value);
  }

  /**
   * First we will check whether the root is empty or not. If yes we will create a new Node.
   * If not we will check its value is less then or equal to new node's value or not.
   * If yes we will recurse on the left subtree of root, if it exists
   * Otherwise we will recurse on the right subtree of root.
   * Lastly we will return the node.
   * @param {BinaryNode} node
   * @param {string | number} value
   * @returns BinaryNode
   */
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

  /**
   * If we want to remove the minimum node of a subtree, we can say the left most node is the minimum node.
   * In order to remove it we can just replace the left most node with the right child of the left most child if it exists.
   * We will recurse on the left subtree, until we reach the node with no left child, then we will simply replace that node
   * with its right child and ultimately return the new modified node.
   * @param {BinaryNode} node
   * @returns BinaryNode
   */
  _removeMin(node) {
    if (node.left === null) return node.right;

    node.left = this._removeMin(node.left);

    return node;
  }

  /**
   * Remove any value inside the tree
   * @param {string | number} val
   */
  remove(val) {
    this.root = this._remove(this.root, val);
  }

  /**
   * In order to remove any node we can either replace it with its largest node in left subtree or
   * we can replace it with its smallest node in right subtree. Here, the later is implemented.
   * First we need to search for the node to be deleted. Once we reach that node, we will check if it doesn't
   * have left child, if that's the case we can return it's right subtree. Similarly if its right child doesn't exist we can
   * return the left subtree. Otherwise, we will save the original node and we will find the left most node in its right subtree.
   * Once we find it that will be the replacement of node to deleted. We will set original's left with replacement's left and
   * delete the minimum from the right subtree. Lastly, we will just return the modified node.
   * @param {BinaryNode} node
   * @param {string | numbser} val
   * @returns BinaryNode
   */
  _remove(node, val) {
    if (node === null) return null;

    if (node.value > val) {
      node.left = this._remove(node.left, val);
    } else if (node.value < val) {
      node.right = this._remove(node.right, val);
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

  /**
   * Checks whether a value is present in the BST
   * @param {string | number} val
   * @returns boolean
   */
  contains(val) {
    return this._contains(this.root, val);
  }

  /**
   * First we will check if the node is null or not. If yes it means we've reached the leaf node and we will return false;
   * Otherwise we will check if current node's values is equal to target value. If yes the value is contained in BST.
   * Otherwise we will recurse on left or right subtree depending on the value.
   * @param {BinaryNode} node
   * @param {string | number} val
   * @returns boolean
   */
  _contains(node, val) {
    if (node === null) return false;
    if (node.value === val) return true;

    if (node.value < val) {
      return this._contains(node.right, val);
    }

    return this._contains(node.left, val);
  }
}

module.exports = BinarySearchTreeWithComments;
