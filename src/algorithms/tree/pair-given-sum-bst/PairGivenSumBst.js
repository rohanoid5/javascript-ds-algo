/**
 * Given a number check if a pair exists in BST with sum equals to that number
 *
 * Solution: T = O(N)
 * 1. Do inorder traversal of BST
 * 2. Save each node in HashMap
 * 3. Check if Sum - Node exists in HashMap or not
 */
const pairGivenSumInBST = function (root, sum) {
  let hashmap = {};
  pairGivenSumInBSTUtil(root, hashmap);

  for (let k in hashmap) {
    if (sum - +k in hashmap) {
      return [+k, sum - +k];
    }
  }

  return [-1, -1];
};

const pairGivenSumInBSTUtil = function (node, hashmap) {
  if (node === null) return null;
  pairGivenSumInBSTUtil(node.left, hashmap);
  hashmap[node.value] = 1;
  pairGivenSumInBSTUtil(node.right, hashmap);
};

module.exports = pairGivenSumInBST;
