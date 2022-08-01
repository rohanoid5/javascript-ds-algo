/**
 * Inorder predecessor and successor for a given key in BST
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
