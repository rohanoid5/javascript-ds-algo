/**
 * Given a Binary Tree and 2 Nodes, check whether they ar cousins or not.
 * Two Nodes are cousin, if they are on the same level but have different parents
 */
const isCousin = function (node, a, b) {
  if (node === null) return false;

  return (
    getLevel(node, a, 1) === getLevel(node, b, 1) && !isSibling(node, a, b)
  );
};

const getLevel = function (node, ptr, level) {
  if (node === null) return 0;
  if (node === ptr) return level;

  let leftLevel = getLevel(node.left, ptr, level + 1);
  if (leftLevel !== 0) return leftLevel;

  return getLevel(node.right, ptr, level + 1);
};

const isSibling = function (node, a, b) {
  if (node === null) return false;

  if (node.left === a && node.right === b) return true;
  if (node.left === b && node.right === a) return true;
  if (isSibling(node.left, a, b)) return true;
  if (isSibling(node.right, a, b)) return true;

  return false;
};

module.exports = isCousin;
