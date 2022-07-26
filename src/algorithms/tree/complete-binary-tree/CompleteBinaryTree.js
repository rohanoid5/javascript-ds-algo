/**
 * Check whether a given Binary Tree is Complete or not
 *
 * A Binary Tree is Complete if all the levels are filled
 * maybe except for the last level
 *
 * Solution:
 * We need to use BFS approach for this. We'll make use
 * of Full Node(A Node which doesn't have null nodes on both left and right)
 * 1. We will push the root of the tree
 * 2. We will keep track of whether we've seen a non Full Node or not
 * 3. If we see a non full node and the flag is already true then tree is not Complete
 */
const checkCompleteBinaryTree = function (root) {
  if (root === null) return true;

  const queue = [];
  queue.push(root);
  let flag = false;

  while (queue.length > 0) {
    let currNode = queue.shift();

    if (currNode.left !== null) {
      if (flag) return false;
      queue.push(currNode.left);
    } else flag = true;

    if (currNode.right !== null) {
      if (flag) return false;
      queue.push(currNode.right);
    } else flag = true;
  }

  return true;
};

module.exports = checkCompleteBinaryTree;
