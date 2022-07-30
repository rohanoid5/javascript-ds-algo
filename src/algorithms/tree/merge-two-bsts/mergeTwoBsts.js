/**
 * Merge two BSTs with limited extra space
 */
const mergeTwoBSTs = function (root1, root2) {
  let index = { idx: 0 };
  let inorder1 = [];
  let inorder2 = [];
  inorderTraversal(root1, inorder1, index);
  index.idx = 0;
  inorderTraversal(root2, inorder2, index);

  return mergeTwoArrays(inorder1, inorder2);
};

const inorderTraversal = function (node, inorder, index) {
  if (node === null) return null;

  inorderTraversal(node.left, inorder, index);
  inorder[index.idx] = node.value;
  index.idx += 1;
  inorderTraversal(node.right, inorder, index);
};

const mergeTwoArrays = function (arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let res = new Array(arr1.length + arr2.length);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res[k] = arr1[i];
      i += 1;
    } else {
      res[k] = arr2[j];
      j += 1;
    }
    k += 1;
  }

  while (i < arr1.length) {
    res[k] = arr1[i];
    i += 1;
  }
  while (j < arr2.length) {
    res[k] = arr2[j];
    j += 1;
  }

  return res;
};

module.exports = mergeTwoBSTs;
