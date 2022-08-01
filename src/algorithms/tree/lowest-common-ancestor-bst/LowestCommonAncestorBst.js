/**
 * Given a BST and two nodes find the Lowest Common Ancestor of the two nodes.
 *
 * Solution: T = O(H), H = height of tree
 * 1. Find the first node which has value less than one node and greater than another node.
 * 2. if current node is greater than both node then answer lies in left subtree
 * 3. If current node is less than both node then answer lies in right subtree
 */
const getLowestCommonAncestorBST = function (root, n1, n2) {
  return getLowestCommonAncestorBSTUtil(root, n1, n2);
};

const getLowestCommonAncestorBSTUtil = function (node, n1, n2) {
  if (node === null) return null;

  if (node.value > n1 && node.value > n2)
    return getLowestCommonAncestorBSTUtil(node.left, n1, n2);
  if (node.value < n1 && node.value < n2)
    return getLowestCommonAncestorBSTUtil(node.right, n1, n2);

  return node;
};

module.exports = getLowestCommonAncestorBST;
