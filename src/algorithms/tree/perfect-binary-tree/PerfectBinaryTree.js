/**
 * Check if given Binary Tree is Perfect
 *
 * A Binary Tree is said to be perfect if all the leaves are on same
 * level and all the internal nodes have 2 children
 *
 * Solution:
 * 1. Find the depth of left most leaf
 * 2. If the node doesn't have left and right children it's Perfect
 * 3. If the node is internal it must have both left and right child
 * 4. If it's a leaf node check if depth is same as previously found depth
 */
const checkPerfectBinaryTree = function (root) {
  let leftMostDepth = getLeftMostDepth(root);
  return isPerfectBinaryTree(root, leftMostDepth, 0);
};

const getLeftMostDepth = function (root) {
  let depth = 0;

  while (root) {
    root = root.left;
    depth += 1;
  }

  return depth;
};

const isPerfectBinaryTree = function (node, leftMostDepth, level) {
  if (node === null) return true;

  if (node.left === null && node.right === null) {
    return leftMostDepth === level + 1;
  }

  if (node.left === null || node.right === null) {
    return false;
  }

  return (
    isPerfectBinaryTree(node.left, leftMostDepth, level + 1) &&
    isPerfectBinaryTree(node.right, leftMostDepth, level + 1)
  );
};

module.exports = checkPerfectBinaryTree;
