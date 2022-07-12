const BinaryNode = require("../../../data-structures/tree/BinaryNode");

const isBinaryTreeBalanced = require("../check-tree-balance/CheckBinaryTreeBalanced");
const getDiameterOfBinaryTree = require("../diameter-binary-tree/DiameterBinaryTree");
const getInorderSuccessor = require("../inorder-successor/InorderSuccessor");

describe("Binary Tree", () => {
  describe("Diameter of a Binary Tree", () => {
    it("should return the number of nodes in the longest path between two leaf nodes", () => {
      const root = new BinaryNode(1);
      root.left = new BinaryNode(2);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.right.left = new BinaryNode(5);
      root.right.right = new BinaryNode(6);

      expect(getDiameterOfBinaryTree(root)).toBe(5);

      root.left.left = null;
      root.right.left.left = new BinaryNode(7);
      root.right.left.right = new BinaryNode(8);
      root.right.right.left = new BinaryNode(9);
      root.right.left.right.left = new BinaryNode(10);
      root.right.right.left.left = new BinaryNode(11);
      expect(getDiameterOfBinaryTree(root)).toBe(7);
    });
  });

  describe("Check whether Binary Tree is Height-Balanced", () => {
    it("should check if a Binary Tree is Height-Balanced", () => {
      const root = new BinaryNode(1);
      root.left = new BinaryNode(2);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(5);
      root.left.left.left = new BinaryNode(8);
      expect(isBinaryTreeBalanced(root)).toBe(false);

      const root1 = new BinaryNode(1);
      root1.left = new BinaryNode(2);
      root1.right = new BinaryNode(3);
      root1.left.left = new BinaryNode(4);
      root1.left.right = new BinaryNode(5);
      root1.right.left = new BinaryNode(6);
      root1.left.left.left = new BinaryNode(7);
      expect(isBinaryTreeBalanced(root1)).toBe(true);
    });
  });

  describe("Inorder Successor of a node in Binary Tree", () => {
    const root = new BinaryNode(1);
    root.left = new BinaryNode(2);
    root.right = new BinaryNode(3);
    root.left.left = new BinaryNode(4);
    root.left.right = new BinaryNode(5);
    root.right.right = new BinaryNode(6);

    expect(getInorderSuccessor(root, root.right).value).toBe(6);
    expect(getInorderSuccessor(root, root.left.left).value).toBe(2);
    expect(getInorderSuccessor(root, root.right.right).value).toBe(null);
  });
});
