const BinaryNode = require("../../../data-structures/tree/BinaryNode");
/**
 * Given a Pre-order traversal, construct the BST.
 *
 * Solution: O(N^2)
 * 1. We will traverse the preorder array
 * 2. We know the first node is root
 * 3. After that we will compare each element with root
 * 4. Based on comparison we will construct left and right subtree recursively
 */
const preorderBSTConstruction1 = function (preorder) {
  let root = new BinaryNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    constructBst(preorder[i], root);
  }

  return root;
};

const constructBst = function (value, node) {
  if (node === null) return new BinaryNode(value);

  if (value <= node.value) {
    node.left = constructBst(value, node.left);
  } else {
    node.right = constructBst(value, node.right);
  }

  return node;
};

/**
 * Solution: O(N)
 * 1. Initially min is set to INT.MIN and max is set to INT.MAX
 * 2. First element is root which is withing min and max, so create a new node
 * 3. After that we will take each element and construct it
 * 4. If it's within min and node.value then it's in left subtree
 * 5. Otherwise if it's in node.value and max it's in right subtree
 * 6. We will repeat this process until we reach the end of the array
 */
const preorderBSTConstruction2 = function (preorder) {
  let index = { idx: 0 };
  let root = constructBst2(
    preorder,
    index,
    preorder[0],
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER
  );
  return root;
};

const constructBst2 = function (preorder, index, key, min, max) {
  if (index.idx >= preorder.length) return null;

  let node = null;

  if (key > min && key < max) {
    node = new BinaryNode(key);
    index.idx += 1;

    if (index.idx < preorder.length) {
      node.left = constructBst2(preorder, index, preorder[index.idx], min, key);
      node.right = constructBst2(
        preorder,
        index,
        preorder[index.idx],
        key,
        max
      );
    }
  }

  return node;
};

module.exports = { preorderBSTConstruction1, preorderBSTConstruction2 };
