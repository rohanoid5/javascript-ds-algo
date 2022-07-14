const BinaryNode = require("../../../data-structures/tree/BinaryNode");

/**
 * Construct a complete binary tree from given array in level order fashion
 *
 * Solution:
 * If i is an index of a node in level order, we can say (2*i + 1) is the left node
 * and (2*i + 2) is the right node. We'll traverse the array and create nodes as we go on.
 */
const buildTreeFromLevelOrder = function (levelOrder) {
  const root = new BinaryNode(levelOrder[0]);
  let queue = [];
  queue.push({ node: root, idx: 0 });

  while (queue.length > 0) {
    let { node, idx } = queue.shift();

    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;

    if (leftIdx < levelOrder.length) {
      let leftNode = new BinaryNode(levelOrder[leftIdx]);
      node.left = leftNode;
      queue.push({ node: leftNode, idx: leftIdx });
    }

    if (rightIdx < levelOrder.length) {
      let rightNode = new BinaryNode(levelOrder[rightIdx]);
      node.right = rightNode;
      queue.push({ node: rightNode, idx: rightIdx });
    }
  }

  return root;
};

module.exports = buildTreeFromLevelOrder;
