/**
 * Check if a given Binary Tree is SumTree
 * A SumTree is a Binary Tree where the value of a node is equal to the sum
 * of the nodes present in its left subtree and right subtree.
 * An empty tree is SumTree and the sum of an empty tree can be considered as 0.
 * A leaf node is also considered as SumTree.
 *
 * Solution:
 * (EASY)
 * Check sum of left and right subtree. If the sum is same as node's data it's SumTree
 */
const checkSumTree1 = function (node) {
  let leftSum = 0;
  let rightSum = 0;

  if (node === null || node.left === null || node.right === null) return true;

  leftSum = sum(node.left);
  rightSum = sum(node.right);

  if (
    node.value === leftSum + rightSum &&
    checkSumTree1(node.left) &&
    checkSumTree1(node.right)
  )
    return true;
  return false;
};

/**
 * Solution:
 * (Tricky)
 * If a node is leaf node we will set its left tree and right tree sum as its own value
 * Otherwise, assuming the node's left and right subtree is also Sum Tree we will make its
 * left sum and right sum twice its left and right node's value. If the sum of left and right tree
 * is same as the node's value then it's a Sum Tree
 */
const checkSumTree2 = function (node) {
  let leftSum = 0;
  let rightSum = 0;

  if (node === null || isLeaf(node)) return true;

  if (checkSumTree2(node.left) && checkSumTree2(node.right)) {
    if (node.left === null) {
      leftSum = 0;
    } else if (isLeaf(node.left)) {
      leftSum = node.left.value;
    } else {
      leftSum = 2 * node.left.value;
    }

    if (node.right === null) {
      rightSum = 0;
    } else if (isLeaf(node.right)) {
      rightSum = node.right.value;
    } else {
      rightSum = 2 * node.right.value;
    }

    if (leftSum + rightSum === node.value) return true;
    return false;
  }

  return false;
};

const isLeaf = function (node) {
  if (node === null) return false;

  if (node.left === null && node.right === null) return true;

  return false;
};

const sum = function (node) {
  if (node === null) return 0;

  return node.value + sum(node.left) + sum(node.right);
};

module.exports = {
  checkSumTree1,
  checkSumTree2,
};
