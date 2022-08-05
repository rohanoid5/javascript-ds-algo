class AVLNode {
  constructor(value) {
    this.value = value;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

/**
 *
 * This is a specialized form of BST. The idea behind AVL Tree is that it is Self Balancing.
 * This basically means for any node in the Tree, the height difference between it's children will
 * not be more than 1 (can be -1, 0, 1 as we will take the absolute difference of height).
 * Given this criteria an AVL Tree will perform all operations(Search, Min, Max, Insertion, Deletion)
 * at O(logN) time.
 */
class AVLTree {
  constructor() {
    this.root = null;
  }

  /**
   * Returns Height of a Node
   * @param {AVLNode} node
   * @returns {number}
   */
  getHeightOfNode(node) {
    if (node === null) return 0;

    return node.height;
  }

  /**
   * Returns the height difference(Balance) of a Node in Tree
   * @param {AVLNode} node
   * @returns {number}
   */
  getBalance(node) {
    if (node === null) return true;

    let leftTreeHeight = this.getHeightOfNode(node.left);
    let rightTreeHeight = this.getHeightOfNode(node.right);

    return leftTreeHeight - rightTreeHeight;
  }

  /**
   *       z                       y
   *   T1     y               z        x
   *      T2    x          T1   T2   T3  T4
   *          T3  T4
   *
   * Let's say z is the node which is right side imbalanced, y is it's right child.
   * We have to rotate in left direction keeping y as the pivot.
   * Hence, z will become y's left child and y's pre-existing left child will become
   * z's right child. Lastly, we will update the newly changed nodes (z and y). Return y as the new root
   * of the now balanced subtree
   * @param {AVLNode} node
   * @returns {AVLNode}
   */
  leftRotate(node) {
    let z = node;
    let y = z.right;
    let T2 = y.left;

    y.left = z;
    z.right = T2;

    z.height =
      Math.max(this.getHeightOfNode(z.left), this.getHeightOfNode(z.right)) + 1;
    y.height =
      Math.max(this.getHeightOfNode(y.left), this.getHeightOfNode(y.right)) + 1;

    return y;
  }

  /**
   *         z                       y
   *     y      T1              x        z
   *   x   T2                T3  T4   T2   T1
   * T3  T4
   * Let's say z is the node which is left side imbalanced, we need rotate the subtree along
   * the node y (right child of z) which will be the pivot of the rotation and we will rotate in right direction.
   * y will be the new root node, z will become it's right child, y's existing right child will become
   * z's left child. Lastly, we will just fix the height of newly updated subtree(y and z nodes)
   * and return the new root y
   * @param {AVLNode} node
   * @returns {AVLNode}
   */
  rightRotate(node) {
    let z = node;
    let y = z.left;
    let T2 = y.right;

    y.right = z;
    z.left = T2;

    z.height =
      Math.max(this.getHeightOfNode(z.left), this.getHeightOfNode(z.right)) + 1;
    y.height =
      Math.max(this.getHeightOfNode(y.left), this.getHeightOfNode(y.right)) + 1;

    return y;
  }

  /**
   * First we check if the new node to be inserted is null or not, if yes
   * we will create new AVLNode and return that. Otherwise we will compare the value
   * with the preexisting node's value and insert it in either left subtree or right subtree depending on the comparison.
   * After insertion we will update the height of the node. Next we will check the balance of the node.
   * If it is imbalanced we will take one of the below steps:
   * 1. Node is imbalanced on left side and the new node is inserted on left subtree, we will do Left Left Rotation of Node.
   * 2. Node is imbalanced on right side and the new node is inserted on right subtree, we will do Right Right Rotation of Node.
   * 3. Node is imbalanced on left side and the new node is inserted on right subtree, we will do Left Right Rotation of Node.
   * (First rotate left node of Node in Left direction and then rotate node on right direction)
   * 4. Node is imbalanced on right side and the new node is inserted on left subtree, we will do Right Left Rotation of Node.
   * (First rotate right node of Node in Right direction and then rotate node on Left direction)
   *
   * Inserts a new node in the Tree, if insertion causes imbalance then it is balanced.
   * @param {AVLNode} node
   * @param {number} value
   * @returns {AVLNode}
   */
  insert(node, value) {
    if (node === null) return new AVLNode(value);

    if (value < node.value) node.left = this.insert(node.left, value);
    else if (value > node.value) node.right = this.insert(node.right, value);
    else return node;

    node.height =
      1 +
      Math.max(
        this.getHeightOfNode(node.left),
        this.getHeightOfNode(node.right)
      );

    const balance = this.getBalance(node);

    // Left Left Case as balance more than 1 means node is
    // imbalanced on left side and new value is inserted at the left subtree
    if (balance > 1 && value < node.left.value) {
      return this.rightRotate(node);
    }

    // Right Right Case as balance less than -1 means node is
    // imbalanced on right side and new value is inserted at the right subtree
    if (balance < -1 && value > node.right.value) {
      return this.leftRotate(node);
    }

    // Left Right Case as balance is more than 1 but new node is inserted at right side
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case as balance is less than -1 but new node is inserted at left side
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  /**
   * Deletes Minimum Node in the Tree
   * @param {AVLNode} node
   * @returns {AVLNode}
   */
  _removeMin(node) {
    if (node.left === null) return node.right;

    node.left = this._removeMin(node.left);

    return node;
  }

  /**
   * First we find out where the node is located, since it's BST we recurse on
   * either left or right subtree. Finally if we find the node and it has both left and right child,
   * we find it's inorder successor (left most node in right subtree). We replace that node with the node to be deleted.
   * otherwise we replace the node with left or right child whichever is non-null.
   * After that we update the height of the node and check if it is imbalanced.
   * If it is imbalanced we will take one of the below steps:
   * 1. The balance is more than 1 and it's left child's balance is greater than equal to 0,
   * which means the node is Left side heavy and we will do Left Left Rotation.
   * 2. The balance is less than -1 and it's right child's balance is less than equal to 0,
   * which means the node is Right side heavy and we will do Right Right Rotation.
   * 3. The balance is more than 1 and it's left child's balance is less than 0, so we will do Left Right Rotation.
   * 4. The balance is less than -1 and it's right child's balance is more than 0, so we will do Right Left Rotation.
   *
   * Deletes a node if it exists in the Tree and re-balances the changed Tree
   * @param {AVLNode} node
   * @param {number} value
   * @returns {AVLNode}
   */
  remove(node, value) {
    if (node === null) return null;

    if (node.value > value) node.left = this.remove(node.left, value);
    else if (node.value < value) node.right = this.remove(node.right, value);
    else {
      if (node.left === null || node.right === null) {
        node = node.left ? node.left : node.right;
      } else {
        let original = node;
        node = node.right;

        while (node.left) {
          node = node.left;
        }

        node.right = this._removeMin(original.right);
        node.left = original.left;
      }
    }
    if (node === null) return null;

    node.height =
      Math.max(
        this.getHeightOfNode(node.left),
        this.getHeightOfNode(node.right)
      ) + 1;
    let balance = this.getBalance(node);

    if (balance > 1 && this.getBalance(node.left) >= 0) {
      return this.rightRotate(node);
    }

    if (balance < -1 && this.getBalance(node.right) <= 0) {
      return this.leftRotate(node);
    }

    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rightRotate(node.rightRotate);
      return this.leftRotate(node);
    }

    return node;
  }
}

module.exports = { AVLTree, AVLNode };
