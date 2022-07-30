/**
 * Transform a BST to greater sum tree
 * Given a BST, transform it into a greater sum tree
 * where each node contains sum of all nodes greater than that node.
 *
 * Solution: O(N^2)
 * 1. Do an inorder traversal of the BST.
 * 2. Create Suffix Sum Array from it.
 * 3. Do another inorder traversal and replace nodes with Suffix Sum elements
 *
 * Solution: O(N)
 * 1. Do reverse inorder traversal
 * 2. Maintain a sum varaible to keep track of sum of all nodes greater than current node
 * 3. At each recursion subtract current node's value from sum
 */
const transformBSTGreaterSum = function (root) {
  let sum = { value: 0 };
  transformBSTGreaterSumUtil(root, sum);

  return root;
};

const transformBSTGreaterSumUtil = function (node, sum) {
  if (node === null) return;

  transformBSTGreaterSumUtil(node.right, sum);
  sum.value = sum.value + node.value;
  node.value = sum.value - node.value;
  transformBSTGreaterSumUtil(node.left, sum);
};

module.exports = transformBSTGreaterSum;
