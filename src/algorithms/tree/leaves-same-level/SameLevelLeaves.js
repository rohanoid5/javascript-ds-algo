/**
 * Check if all leaves are at same level
 * Given a Binary Tree, check if all leaves are at same level or not.
 *
 * Solution:
 * First we need to find the level of the left most leaf in the tree.
 * We will save that value and recursively check all other nodes. If that
 * node is a leaf and is not on same level then the answer will be false
 * otherwise it's true
 */
const checkLeavesSameLevel = function (root) {
  const leafLevel = { level: 0 };
  return isSameLevel(root, 0, leafLevel);
};

const isSameLevel = function (node, level, leafLevel) {
  if (node === null) return true;

  if (node.left === null && node.right === null) {
    if (leafLevel.level === 0) leafLevel.level = level;

    return level === leafLevel.level;
  }

  return (
    isSameLevel(node.left, level + 1, leafLevel) &&
    isSameLevel(node.right, level + 1, leafLevel)
  );
};

module.exports = checkLeavesSameLevel;
