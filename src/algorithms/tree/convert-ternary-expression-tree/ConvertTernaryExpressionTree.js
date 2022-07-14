const BinaryNode = require("../../../data-structures/tree/BinaryNode");

/**
 * Convert Ternary Expression to a Binary Tree
 *
 * Solution:
 * 1. Pick the first item as the root of the Tree
 * 2. Take the next item
 *    a. If its '?' then recurse for the next element and make it current node's left child
 *    b. Otherwise its ':' then recurse for the next element and make it current node's right child
 * 3. Return the Root
 */
const convertTernaryToBinaryTree = function (expression, idx) {
  if (idx >= expression.length) return null;
  let currNode = new BinaryNode(expression[idx]);
  idx += 1;

  if (idx < expression.length && expression[idx] === "?") {
    currNode.left = convertTernaryToBinaryTree(expression, idx + 1);
  } else if (idx < expression.length) {
    currNode.right = convertTernaryToBinaryTree(expression, idx + 1);
  }

  return currNode;
};

module.exports = convertTernaryToBinaryTree;
