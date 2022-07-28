/**
 * Lowest Common Ancestor in a Binary Tree
 * The lowest common ancestor is the lowest node in the
 * tree that has both n1 and n2 as descendants,
 * where n1 and n2 are the nodes for which we wish to find the LCA.
 *
 * Solution: T = O(N), S = O(N)
 * 1. Create two Path arrays, p1 and p2
 * 2. p1 will hold the path from root to n1 and p2 will hold
 * path from root to n2
 * 3. Simultaneously check each node in path, once we get a mismatch the previous node is LCA
 */
const getLowestCommonAncestor1 = function (root, n1, n2) {
  let p1 = [];
  let p2 = [];
  let lca = null;

  getPathFromRoot(root, n1, p1);
  getPathFromRoot(root, n2, p2);

  for (let i = 0; i < Math.min(p1.length, p2.length); i++) {
    if (p1[i] !== p2[i]) return lca;
    else lca = p1[i];
  }

  return lca;
};

const getPathFromRoot = function (node, target, path) {
  if (node === null) return false;

  path.push(node.value);
  if (node.value === target) return true;

  if (node.left !== null && getPathFromRoot(node.left, target, path)) {
    return true;
  }

  if (node.right !== null && getPathFromRoot(node.right, target, path)) {
    return true;
  }

  path.pop();
  return false;
};

module.exports = {
  getLowestCommonAncestor1,
};
