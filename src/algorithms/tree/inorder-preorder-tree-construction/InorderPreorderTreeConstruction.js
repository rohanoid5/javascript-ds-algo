const BinaryNode = require("../../../data-structures/tree/BinaryNode");

/**
 * Construct Tree from given Inorder and Preorder traversals
 *
 * Solution:
 * Let's say Inorder sequence is D B E A F C and Preorder sequence is A B D E C F
 * Since Left most node in Pre is the root, we can say nodes before root in In is the
 * left subtree and nodes after root is the right subtree.
 * Use recursion to build the left right subtree of each node
 */
const buildTreeFromInorderPreporder = function (
  In,
  Pre,
  start,
  end,
  preIndex = { idx: 0 }
) {
  if (start > end) return null;
  if (!Pre[preIndex.idx]) return null;

  let node = new BinaryNode(Pre[preIndex.idx]);
  preIndex.idx += 1;

  if (start === end) return node;

  let inIdx = searchIndexInorder(In, start, end, node.value);
  let leftTree = buildTreeFromInorderPreporder(
    In,
    Pre,
    start,
    inIdx - 1,
    preIndex
  );
  let rightTree = buildTreeFromInorderPreporder(
    In,
    Pre,
    inIdx + 1,
    end,
    preIndex
  );

  if (leftTree) node.left = leftTree;
  if (rightTree) node.right = rightTree;

  return node;
};

const searchIndexInorder = function (In, start, end, value) {
  for (let idx = start; idx <= end; idx++) {
    if (In[idx] === value) return idx;
  }

  return -1;
};

module.exports = buildTreeFromInorderPreporder;
