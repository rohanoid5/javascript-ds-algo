const BinaryNode = require("../../../data-structures/tree/BinaryNode");

const getDiameterOfBinaryTree = require("../diameter-binary-tree/DiameterBinaryTree");

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
});
