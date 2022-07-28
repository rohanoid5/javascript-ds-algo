/**
 * Find distance between two nodes of a Binary Tree
 * Find the distance between two keys in a binary tree, no parent pointers are given.
 * The distance between two nodes is the minimum number of edges to be traversed to reach one node from another.
 *
 * Solution:
 * 1. Find the distance of n1 from root, d1
 * 2. Find the distance of n2 from root, d2
 * 3. The answer will be: d1 + d2 - 2 * (distance of LCA from root)
 */
const getDistanceBetweenTwoNodes = function (node, n1, n2) {
  let distance = {
    d1: -1,
    d2: -1,
    dist: 0,
  };
  let lca = fetchDistanceBetweenTwoNodes(node, n1, n2, distance, 1);

  if (distance.d1 !== -1 && distance.d2 !== -1) {
    return distance.dist;
  }

  if (distance.d1 !== -1) {
    return findLevel(lca, n2, 0);
  }
  if (distance.d2 !== -1) {
    return findLevel(lca, n1, 0);
  }

  return -1;
};

const fetchDistanceBetweenTwoNodes = function (node, n1, n2, distance, level) {
  if (node === null) return null;

  if (node.value === n1) {
    distance.d1 = level;
    return node;
  }
  if (node.value === n2) {
    distance.d2 = level;
    return node;
  }

  let leftLca = fetchDistanceBetweenTwoNodes(
    node.left,
    n1,
    n2,
    distance,
    level + 1
  );
  let rightLca = fetchDistanceBetweenTwoNodes(
    node.right,
    n1,
    n2,
    distance,
    level + 1
  );

  if (leftLca !== null && rightLca !== null) {
    distance.dist = distance.d1 + distance.d2 - 2 * level;
    return node;
  }

  return leftLca ? leftLca : rightLca;
};

const findLevel = function (node, target, level) {
  if (node === null) return -1;

  if (node.value === target) return level;

  let leftLevel = findLevel(node.left, target, level + 1);
  return leftLevel !== -1
    ? leftLevel
    : findLevel(node.right, target, level + 1);
};

module.exports = getDistanceBetweenTwoNodes;
