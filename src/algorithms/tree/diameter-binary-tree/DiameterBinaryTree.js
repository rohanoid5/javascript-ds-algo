/**
 * Diameter of a Binary Tree
 * Diameter of a Tree is the number of nodes in the longest path between two leaf nodes
 *
 * Solution:
 * Diameter of a Binary Tree T is the maximum of the below quantity
 * 1. Diameter of Left Subtree of T
 * 2. Diameter of Right Subtree of T
 * 3. The longest path between leaves that goes through T
 */
const getDiameterOfBinaryTree = function (root) {
  const treeDiameter = { value: 0 };
  getTreeHeight(root, treeDiameter);

  return treeDiameter.value;
};

const getTreeHeight = function (node, treeDiameter) {
  if (node === null) return 0;

  const leftTreeHeight = getTreeHeight(node.left, treeDiameter);
  const rightTreeHeight = getTreeHeight(node.right, treeDiameter);

  if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {
    const diameter = 1 + leftTreeHeight + rightTreeHeight;

    treeDiameter.value = Math.max(diameter, treeDiameter.value);
  }

  return Math.max(leftTreeHeight, rightTreeHeight) + 1;
};

module.exports = getDiameterOfBinaryTree;
