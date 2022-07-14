/**
 * Minimum swap required to convert binary tree to binary search tree
 *
 * Solution:
 * If we do inorder traversal of a BST, the elements will be sorted in
 * increasing order. If we create an array by doing inorder traversal of
 * the Binary Tree, the minimum swap required to sort the array will be the
 * minimum swap required to get BST from Binary Tree
 */
const minimumSwapBST = function (root) {
  let arr = [];
  inorderTraversal(root, arr);

  return minSwapToSort(arr);
};

const inorderTraversal = function (node, arr) {
  if (node) {
    inorderTraversal(node.left, arr);
    arr.push(node.value);
    inorderTraversal(node.right, arr);
  }
};

const minSwapToSort = function (arr) {
  let collection = arr.map((el, idx) => [el, idx]);
  collection.sort((a, b) => a[0] - b[0]);
  let minCount = 0;
  let visited = new Array(arr.length).fill(false);

  for (let i = 0; i < arr.length; i++) {
    if (visited[i] || collection[i][1] === i) continue;

    let cycleLength = 0;
    let j = i;
    while (!visited[j]) {
      visited[j] = true;
      j = collection[j][1];
      cycleLength += 1;
    }

    if (cycleLength > 0) minCount += cycleLength - 1;
  }

  return minCount;
};

module.exports = minimumSwapBST;
