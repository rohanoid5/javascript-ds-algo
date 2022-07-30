/**
 * Given a Binary Tree, construct a BST, without changing the structure of the Tree.
 *
 * Solution: O(NlogN)
 * 1. Traverse the Binary Tree in Inorder and save it in an Array
 * 2. Sort the Array
 * 3. Do another Inorder traversal of the sorted array with the Tree
 */
const binaryTreeToBST = function (root) {
  if (root === null) return null;

  let inorder = [];
  let index = { idx: 0 };

  inorderTraversal(root, inorder, index);
  inorder.sort((a, b) => a - b);

  index.idx = 0;
  arrayToBST(root, inorder, index);

  return root;
};

const inorderTraversal = function (node, inorder, index) {
  if (node === null) return null;

  inorderTraversal(node.left, inorder, index);
  inorder[index.idx] = node.value;
  index.idx += 1;
  inorderTraversal(node.right, inorder, index);
};

const arrayToBST = function (node, inoder, index) {
  if (node === null) return null;

  arrayToBST(node.left, inoder, index);
  node.value = inoder[index.idx];
  index.idx += 1;
  arrayToBST(node.right, inoder, index);
};

module.exports = binaryTreeToBST;
