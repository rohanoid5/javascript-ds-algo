/**
 * Convert a given Binary Tree to Doubly Linked List
 *
 * Solution:
 * We'll start from the root of the tree,
 * 1. We'll first check if root has left subtree
 *    a. If yes, then we'll recursively convert left half to DLL
 *    b. We'll find out the inorder predecessor of current node
 *    c. That node we'll be the previous node of current node and
 *       current node will be its next node.
 * 2. We'll check if root has right subtree
 *    a. If yes, then we'll recursively convert the right half
 *    b. We'll find the inorder successor of current node
 *    c. That node will be the next node of current node and
 *       current node will be its previous node
 * 3. Lastly we'll find the left most node, which will be the head of our DLL.
 */
const convertBinaryTreeToDll = function (root) {
  if (root === null) return null;

  let head = convertBinaryTreeToDllUtil(root);

  while (head && head.left) {
    head = head.left;
  }

  return head;
};

const convertBinaryTreeToDllUtil = function (node) {
  if (node === null) return null;

  if (node.left) {
    let left = convertBinaryTreeToDllUtil(node.left);

    for (; left.right != null; left = left.right) {}

    left.right = node;
    node.left = left;
  }

  if (node.right) {
    let right = convertBinaryTreeToDllUtil(node.right);

    for (; right.left != null; right = right.left) {}

    right.left = node;
    node.right = right;
  }

  return node;
};

module.exports = convertBinaryTreeToDll;
