/**
 * Kth ancestor of a node in binary tree
 *
 * Solution:
 * 1. Do DFS on the root of the tree
 * 2. Once the target node is found start backtracking
 * 3. If we find a node which is non-null after backtracking k times then that is the answer
 * 4. Otherwise -1 is the answer.
 */
const getKthAncestor = function (node, target, k) {
  let ancestor = { value: -1 };

  fetchKthAncestor(node, target, { ancestorCount: k }, ancestor);
  return ancestor.value;
};

const fetchKthAncestor = function (node, target, k, ancestor) {
  if (node === null) return null;

  let temp = null;

  if (
    node.value === target ||
    (temp = fetchKthAncestor(node.left, target, k, ancestor)) !== null ||
    (temp = fetchKthAncestor(node.right, target, k, ancestor)) !== null
  ) {
    if (k.ancestorCount > 0) k.ancestorCount -= 1;
    else if (k.ancestorCount === 0) {
      ancestor.value = node.value;
      return null;
    }

    return node;
  }

  return null;
};

module.exports = getKthAncestor;
