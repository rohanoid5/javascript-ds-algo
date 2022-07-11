/**
 * Determine if a binary tree is height-balanced
 *
 * A tree T is height-balanced if the following conditions are met:
 * 1. Left Subtree of T is height-balanced
 * 2. Right Subtree of T is height-balanced
 * 3. The difference between left subtree and right subtree is not more than 1
 */
const isBinaryTreeBalanced = function (root) {
  if (root === null) return true;

  const leftTreeHeight = getTreeHeight(root.left);
  const rightTreeHeight = getTreeHeight(root.right);

  if (
    Math.abs(leftTreeHeight - rightTreeHeight) <= 1 &&
    isBinaryTreeBalanced(root.left) &&
    isBinaryTreeBalanced(root.right)
  ) {
    return true;
  }

  return false;
};

const getTreeHeight = function (root) {
  if (root === null) return 0;

  return 1 + Math.max(getTreeHeight(root.left), getTreeHeight(root.right));
};

module.exports = isBinaryTreeBalanced;
