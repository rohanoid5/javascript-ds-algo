/**
 * Inorder Successor of a node in Binary Tree
 *
 * There are 3 possibilities. Let's say we want inorder successor of node X
 * 1. X has a right child, then the left most child in the right subtree is the answer
 * 2. X doesn't have a right child,
 *    a. We recursively check parent P of X, if P.left == X then P is answer
 *    b. Otherwise, we will make P the new X and go up the tree until the above condition is met
 * 3. X is the right most child, in that case there will be no inorder successor
 */
const getInorderSuccessor = function (root, x) {
  let successor = { value: null };
  if (x.right !== null) {
    successor = {
      ...getLeftMostChild(x.right),
    };
    return successor;
  }
  const rightMostChild = getRightMostChild(root);
  if (rightMostChild === x) return successor;

  getInorderSuccessorRec(root, x, successor);
  return successor;
};

const getLeftMostChild = function (node) {
  while (node && node.left) {
    node = node.left;
  }

  return node;
};

const getRightMostChild = function (node) {
  while (node && node.right) {
    node = node.right;
  }

  return node;
};

const getInorderSuccessorRec = function (root, x, successor) {
  if (root === null) return null;

  let temp = null;
  if (
    root === x ||
    (temp = getInorderSuccessorRec(root.left, x, successor)) !== null ||
    (temp = getInorderSuccessorRec(root.right, x, successor)) !== null
  ) {
    if (temp !== null && root.left === temp) {
      successor.value = root.value;
      return null;
    }

    return root;
  }

  return null;
};

module.exports = getInorderSuccessor;
