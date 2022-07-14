const LinkedListNode = require("../../../data-structures/linked-list/LinkedList");
const BinaryNode = require("../../../data-structures/tree/BinaryNode");
const convertBinaryTreeToDll = require("../binary-tree-to-doubly-linkedlist/BinaryTreeToDLinkedList");

const isBinaryTreeBalanced = require("../check-tree-balance/CheckBinaryTreeBalanced");
const buildCompleteTreeFromLinkedList = require("../complete-tree-linkedlist/completeTreeConstructionFromLinkedList");
const getDiameterOfBinaryTree = require("../diameter-binary-tree/DiameterBinaryTree");
const buildTreeFromInorderLevelOrder = require("../inorder-level-order-tree-construction/InLevelTreeConstruction");
const buildTreeFromInorderPreporder = require("../inorder-preorder-tree-construction/InorderPreorderTreeConstruction");
const getInorderSuccessor = require("../inorder-successor/InorderSuccessor");
const buildTreeFromLevelOrder = require("../level-order-tree-construction/levelOrderTreeConstruction");
const convertTreeToSumTree = require("../tree-to-sum-tree-conversion/TreeToSumTreeConversion");

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

  describe("Construct Tree from given Inorder and Preorder traversals", () => {
    it("should return a tree", () => {
      let In = ["D", "B", "E", "A", "F", "C"];
      let Pre = ["A", "B", "D", "E", "C", "F"];
      let len = In.length;
      const root = new BinaryNode("A");
      root.left = new BinaryNode("B");
      root.right = new BinaryNode("C");
      root.left.left = new BinaryNode("D");
      root.left.right = new BinaryNode("E");
      root.right.left = new BinaryNode("F");

      expect(buildTreeFromInorderPreporder(In, Pre, 0, len)).toEqual(root);
    });
  });

  describe("Construct Tree from given Inorder and Level Order traversals", () => {
    it("should return a tree", () => {
      let level = [20, 8, 22, 4, 12, 10, 14];
      let inorder = [4, 8, 10, 12, 14, 20, 22];
      const root = new BinaryNode(20);
      root.left = new BinaryNode(8);
      root.right = new BinaryNode(22);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(12);
      root.left.right.left = new BinaryNode(10);
      root.left.right.right = new BinaryNode(14);

      expect(buildTreeFromInorderLevelOrder(inorder, level)).toEqual(root);
    });
  });

  describe("Construct Complete Tree from LinkedList", () => {
    it("should return a tree", () => {
      const head = new LinkedListNode(10);
      head.next = new LinkedListNode(12);
      head.next.next = new LinkedListNode(15);
      head.next.next.next = new LinkedListNode(25);
      head.next.next.next.next = new LinkedListNode(30);
      head.next.next.next.next.next = new LinkedListNode(36);

      const root = new BinaryNode(10);
      root.left = new BinaryNode(12);
      root.right = new BinaryNode(15);
      root.left.left = new BinaryNode(25);
      root.left.right = new BinaryNode(30);
      root.right.left = new BinaryNode(36);

      expect(buildCompleteTreeFromLinkedList(head)).toEqual(root);
    });
  });

  describe("Construct Tree from Level Order", () => {
    it("should return a tree", () => {
      const root = new BinaryNode(1);
      root.left = new BinaryNode(2);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(5);
      root.right.left = new BinaryNode(6);

      const resultTree = buildTreeFromLevelOrder([1, 2, 3, 4, 5, 6]);
      expect(resultTree).toEqual(root);
    });
  });

  describe("Convert Tree to Doubly LinkedList", () => {
    it("should return a DLL", () => {
      const root = new BinaryNode(10);
      root.left = new BinaryNode(12);
      root.right = new BinaryNode(15);
      root.left.left = new BinaryNode(25);
      root.left.right = new BinaryNode(30);
      root.right.left = new BinaryNode(36);

      expect(convertBinaryTreeToDll(root)).toBeDefined();
    });
  });

  describe("Convert Tree to Sum Tree", () => {
    it("should return Sum Tree", () => {
      const root = new BinaryNode(10);
      root.left = new BinaryNode(-2);
      root.right = new BinaryNode(6);
      root.left.left = new BinaryNode(8);
      root.left.right = new BinaryNode(-4);
      root.right.left = new BinaryNode(7);
      root.right.right = new BinaryNode(5);

      const sumRoot = new BinaryNode(20);
      sumRoot.left = new BinaryNode(4);
      sumRoot.right = new BinaryNode(12);
      sumRoot.left.left = new BinaryNode(0);
      sumRoot.left.right = new BinaryNode(0);
      sumRoot.right.left = new BinaryNode(0);
      sumRoot.right.right = new BinaryNode(0);

      expect(convertTreeToSumTree(root)).toEqual(sumRoot);
    });
  });
});
