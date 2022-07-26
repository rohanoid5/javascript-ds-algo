/**
 * Find largest subtree sum in a tree
 * Given a binary tree, task is to find subtree with maximum sum in tree.
 */
const findMaxSubTree = function (root) {
  let maxSum = { value: Number.MIN_SAFE_INTEGER };
  findMaxSubTreeUtil(root, maxSum);

  return maxSum.value;
};

const findMaxSubTreeUtil = function (node, maxSum) {
  if (node === null) return 0;

  let currSum =
    node.value +
    findMaxSubTreeUtil(node.left, maxSum) +
    findMaxSubTreeUtil(node.right, maxSum);

  maxSum.value = Math.max(maxSum.value, currSum);
  return currSum;
};

module.exports = findMaxSubTree;
