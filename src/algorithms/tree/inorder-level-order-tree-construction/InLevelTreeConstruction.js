const BinaryNode = require("../../../data-structures/tree/BinaryNode");

/**
 * Construct a tree from Inorder and Level order traversals
 * Let's sat Inorder = {4, 8, 10, 12, 14, 20, 22} and Level = {20, 8, 22, 4, 12, 10, 14}
 *
 * Solution:
 * The first node in Level order will be the root. Since in level order node's aren't placed in
 * any order. Here's the trick:
 * 1. We will pick an element from Level Order 1 at a time
 * 2. Check it's position in Inorder. Create a node from the element
 * 3. If it exists we'll splice the inorder array from 0 till the found index,
 * this will be the left subtree.
 * 4. Similarly the other half will be the right subtree.
 * 5. We'll recursively create the tree
 */
const buildTreeFromInorderLevelOrder = function (inorder, level) {
  if (inorder.length > 0) {
    let node;
    let ioIdx;

    for (let i = 0; i < level.length; i++) {
      if (inorder.indexOf(level[i]) !== -1) {
        node = new BinaryNode(level[i]);
        ioIdx = inorder.indexOf(level[i]);
        break;
      }
    }

    if (node) {
      node.left = buildTreeFromInorderLevelOrder(
        inorder.slice(0, ioIdx),
        level
      );
      node.right = buildTreeFromInorderLevelOrder(
        inorder.slice(ioIdx + 1, inorder.length),
        level
      );
    }

    return node;
  }

  return null;
};

module.exports = buildTreeFromInorderLevelOrder;
