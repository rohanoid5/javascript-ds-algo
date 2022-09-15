/**
 * Convert a given tree to its Sum Tree
 *
 * Solution:
 * 1. Recurse over left and right children
 * 2. If node is null return 0
 * 3. Save the original value of node.
 * 4. Change value to sum of left and right child value
 * 5. Propagate the new value + the old value to parent
 */
const convertTreeToSumTree = function (tree) {
  if (tree === null) return null;
  convertTreeToSumTreeRec(tree);

  return tree;
};

const convertTreeToSumTreeRec = function (node) {
  if (node === null) return 0;

  let left = convertTreeToSumTreeRec(node.left);
  let right = convertTreeToSumTreeRec(node.right);
  let temp = node.value;

  node.value = left + right;

  return temp + node.value;
};

module.exports = convertTreeToSumTree;
