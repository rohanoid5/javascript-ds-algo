/**
 * Inorder predecessor and successor for a given key in BST
 *
 * Solution: T = O(n)
 *
 * 1. Start traversing the tree
 * 2. If we find the node, following steps will be taken
 * 3. If the node has left node then right most node in left tree is inorder predecessor
 * 4. Otherwise previously found node with less value than target node is predecessor
 * 5. If the node has right node then left most node in right tree is inorder successor
 * 6. Otherwise previously found node with greater value than target node is successor
 * 7. If target node is greater than current node, recurse in right subtree and save current node as predecessor
 * 8. Otherwise target node is smaller than current node, recurse in left subtree and save current node as successor
 */
const getInorderSuccessorPredecessor = function (root, target) {
  let result = { successor: null, predecessor: null };

  getInorderSuccessorPredecessorUtil(root, target, result);

  return result;
};

const getInorderSuccessorPredecessorUtil = function (node, target, result) {
  if (node === null) return result;

  if (node.value === target) {
    if (node.left) {
      let current = node.left;
      while (current.right) {
        current = current.right;
      }
      result.predecessor = current && current.value ? current.value : null;
    }

    if (node.right) {
      let current = node.right;
      while (current.left) {
        current = current.left;
      }
      result.successor = current && current.value ? current.value : null;
    }

    return result;
  }

  if (node.value < target) {
    result.predecessor = node.value;
    return getInorderSuccessorPredecessorUtil(node.right, target, result);
  } else if (node.value > target) {
    result.successor = node.value;
    return getInorderSuccessorPredecessorUtil(node.left, target, result);
  }
};

module.exports = getInorderSuccessorPredecessor;
