const LinkedListNode = require("../../../data-structures/linked-list/LinkedList");
const BinaryNode = require("../../../data-structures/tree/BinaryNode");
const BinarySearchTreeWithComments = require("../../../data-structures/tree/BinarySearchTreeWithComments");
const convertBinaryTreeToDll = require("../binary-tree-to-doubly-linkedlist/BinaryTreeToDLinkedList");
const isCousin = require("../check-cousin/CheckCousin");
const {
  checkSumTree1,
  checkSumTree2,
  checkSumTree3,
} = require("../check-sum-tree/CheckSumTree");

const isBinaryTreeBalanced = require("../check-tree-balance/CheckBinaryTreeBalanced");
const checkCompleteBinaryTree = require("../complete-binary-tree/CompleteBinaryTree");
const buildCompleteTreeFromLinkedList = require("../complete-tree-linkedlist/completeTreeConstructionFromLinkedList");
const binaryTreeToBST = require("../construct-bst-from-binary-tree/constructBSTFromBinaryTree");
const convertTernaryToBinaryTree = require("../convert-ternary-expression-tree/ConvertTernaryExpressionTree");
const getDiameterOfBinaryTree = require("../diameter-binary-tree/DiameterBinaryTree");
const getDistanceBetweenTwoNodes = require("../distance-between-nodes/DistanceBetweenTwoNodes");
const findMaxSubTree = require("../find-max-subtree-sum/MaxSubtreeSum");
const buildTreeFromInorderLevelOrder = require("../inorder-level-order-tree-construction/InLevelTreeConstruction");
const buildTreeFromInorderPreporder = require("../inorder-preorder-tree-construction/InorderPreorderTreeConstruction");
const getInorderSuccessorPredecessor = require("../inorder-successor-predecessor-bst/InorderSucessorPredecessorBst");
const getInorderSuccessor = require("../inorder-successor/InorderSuccessor");
const getKthAncestor = require("../kth-ancestor/KthAncestor");
const checkLeavesSameLevel = require("../leaves-same-level/SameLevelLeaves");
const buildTreeFromLevelOrder = require("../level-order-tree-construction/levelOrderTreeConstruction");
const getLowestCommonAncestorBST = require("../lowest-common-ancestor-bst/LowestCommonAncestorBst");
const {
  getLowestCommonAncestor1,
  getLowestCommonAncestor2,
} = require("../lowest-common-ancestor/LowestCommonAncestor");
const mergeTwoBSTs = require("../merge-two-bsts/mergeTwoBsts");
const minimumSwapBST = require("../minimum-swap-bst/MinimumSwapBST");
const pairGivenSumInBST = require("../pair-given-sum-bst/PairGivenSumBst");
const checkPerfectBinaryTree = require("../perfect-binary-tree/PerfectBinaryTree");
const {
  preorderBSTConstruction1,
  getBstInPreorder,
  preorderBSTConstruction2,
} = require("../preorder-bst-construction/PreorderBSTConstruction");
const {
  sortedListToBalancedBST1,
  sortedListToBalancedBST2,
} = require("../sorted-linked-list-balanced-tree/SortedListToBalancedBST");
const transformBSTGreaterSum = require("../transformation-bst-greater-sum/TransformBSTGreaterSum");
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

  describe("Minimum Swap to turn a Binary Tree into BST", () => {
    it("should return the minimum swaps required", () => {
      const root = new BinaryNode(5);
      root.left = new BinaryNode(6);
      root.right = new BinaryNode(7);
      root.left.left = new BinaryNode(8);
      root.left.right = new BinaryNode(9);
      root.right.left = new BinaryNode(10);
      root.right.right = new BinaryNode(11);
      expect(minimumSwapBST(root)).toBe(3);

      const root2 = new BinaryNode(1);
      root2.left = new BinaryNode(2);
      root2.right = new BinaryNode(3);
      expect(minimumSwapBST(root2)).toBe(1);
    });
  });

  describe("Convert Ternary Expression to Binary Tree", () => {
    it("should return the binary tree", () => {
      expect(convertTernaryToBinaryTree("a?b:c", 0)).toBeDefined();
    });
  });

  describe("Check two nodes in Binary Tree are Cousins", () => {
    it("should return true or false if nodes are cousins or not cousins", () => {
      const root = new BinaryNode(1);
      root.left = new BinaryNode(2);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(5);
      root.left.right.right = new BinaryNode(15);
      root.right.left = new BinaryNode(6);
      root.right.right = new BinaryNode(7);
      root.right.left.right = new BinaryNode(8);

      expect(isCousin(root, root.left.left, root.right.right)).toBe(true);
      expect(isCousin(root, root.left.left, root.right.left.right)).toBe(false);
    });
  });

  describe("Check if a Binary Tree has all leaves in same level", () => {
    it("should return true or false", () => {
      const root = new BinaryNode(12);
      root.left = new BinaryNode(5);
      root.left.left = new BinaryNode(3);
      root.left.right = new BinaryNode(9);
      root.left.left.left = new BinaryNode(1);
      root.left.right.left = new BinaryNode(1);

      expect(checkLeavesSameLevel(root)).toBe(true);
    });
  });

  describe("Check if a Binary Tree is Sum Tree", () => {
    it("should return true or false", () => {
      const root = new BinaryNode(26);
      root.left = new BinaryNode(10);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(6);
      root.right.right = new BinaryNode(3);

      expect(checkSumTree1(root)).toBe(true);
      expect(checkSumTree2(root)).toBe(true);
      expect(checkSumTree3(root)).toBe(true);
    });
  });

  describe("Check if the Binary Tree is Perfect", () => {
    it("should return true or false", () => {
      const root = new BinaryNode(10);
      root.left = new BinaryNode(20);
      root.right = new BinaryNode(30);
      root.left.left = new BinaryNode(40);
      root.left.right = new BinaryNode(50);
      root.right.left = new BinaryNode(60);
      root.right.right = new BinaryNode(70);

      expect(checkPerfectBinaryTree(root)).toBe(true);
    });
  });

  describe("Check if the Binary Tree is Complete", () => {
    it("should return true or false", () => {
      const root = new BinaryNode(1);
      root.left = new BinaryNode(2);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(5);
      root.right.left = new BinaryNode(6);

      expect(checkCompleteBinaryTree(root)).toBe(true);
    });
  });

  describe("Find Max Subtree Sum in Binary Tree", () => {
    it("should return the max sum", () => {
      const root = new BinaryNode(1);
      root.left = new BinaryNode(-2);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(5);
      root.right.left = new BinaryNode(-6);
      root.right.right = new BinaryNode(2);

      expect(findMaxSubTree(root)).toBe(7);
    });
  });

  describe("Lowest Common Ancestor", () => {
    it("should return the lowest common ancestor of two nodes", () => {
      const root = new BinaryNode(1);
      root.left = new BinaryNode(2);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(5);
      root.right.left = new BinaryNode(6);
      root.right.right = new BinaryNode(7);
      expect(getLowestCommonAncestor1(root, 4, 5)).toBe(2);
      expect(getLowestCommonAncestor1(root, 4, 6)).toBe(1);
      expect(getLowestCommonAncestor1(root, 2, 4)).toBe(2);
      expect(getLowestCommonAncestor1(root, 3, 4)).toBe(1);

      expect(getLowestCommonAncestor2(root, 4, 5).value).toBe(2);
      expect(getLowestCommonAncestor2(root, 4, 6).value).toBe(1);
      expect(getLowestCommonAncestor2(root, 2, 4).value).toBe(2);
      expect(getLowestCommonAncestor2(root, 3, 4).value).toBe(1);
    });
  });

  describe("Distance between two nodes", () => {
    it("should return the distance between 2 nodes", () => {
      const root = new BinaryNode(1);
      root.left = new BinaryNode(2);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(5);
      root.right.left = new BinaryNode(6);
      root.right.right = new BinaryNode(7);
      root.right.left.right = new BinaryNode(8);
      expect(getDistanceBetweenTwoNodes(root, 4, 5)).toBe(2);
      expect(getDistanceBetweenTwoNodes(root, 4, 6)).toBe(4);
    });
  });

  describe("Get Kth Ancestor of a Node in Binary Tree", () => {
    it("should return the kth ancestor if it exists", () => {
      const root = new BinaryNode(1);
      root.left = new BinaryNode(2);
      root.right = new BinaryNode(3);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(5);

      expect(getKthAncestor(root, 5, 2)).toBe(1);
      expect(getKthAncestor(root, 5, 1)).toBe(2);
      expect(getKthAncestor(root, 5, 3)).toBe(-1);
    });
  });
});

describe("Binary Search Tree", () => {
  describe("BST Construction from Preorder Traversal", () => {
    it("should construct the BST", () => {
      let bst1 = preorderBSTConstruction1([10, 5, 1, 7, 40, 50]);
      expect(bst1.value).toBe(10);
      expect(bst1.left.value).toBe(5);
      expect(bst1.right.value).toBe(40);
      expect(bst1.left.left.value).toBe(1);
      expect(bst1.left.right.value).toBe(7);
      expect(bst1.right.right.value).toBe(50);

      let bst2 = preorderBSTConstruction2([10, 5, 1, 7, 40, 50]);
      expect(bst2.value).toBe(10);
      expect(bst2.left.value).toBe(5);
      expect(bst2.right.value).toBe(40);
      expect(bst2.left.left.value).toBe(1);
      expect(bst2.left.right.value).toBe(7);
      expect(bst2.right.right.value).toBe(50);
    });
  });

  describe("Construction of BST from Binary Tree", () => {
    it("should return a BST", () => {
      let root = new BinaryNode(10);
      root.left = new BinaryNode(30);
      root.right = new BinaryNode(15);
      root.left.left = new BinaryNode(20);
      root.right.right = new BinaryNode(5);

      expect(binaryTreeToBST(root).value).toBe(15);
      expect(binaryTreeToBST(root).left.value).toBe(10);
      expect(binaryTreeToBST(root).right.value).toBe(20);
      expect(binaryTreeToBST(root).left.left.value).toBe(5);
      expect(binaryTreeToBST(root).right.right.value).toBe(30);
    });
  });

  describe("Merge Two BSTs", () => {
    it("should return the two merged BSTs", () => {
      const root1 = new BinaryNode(3);
      root1.left = new BinaryNode(1);
      root1.right = new BinaryNode(5);

      const root2 = new BinaryNode(4);
      root2.left = new BinaryNode(2);
      root2.right = new BinaryNode(6);
      expect(mergeTwoBSTs(root1, root2)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("Transform BST to Greater Sum Tree", () => {
    it("should return greater sum tree", () => {
      const root = new BinaryNode(11);
      root.left = new BinaryNode(2);
      root.right = new BinaryNode(29);
      root.left.left = new BinaryNode(1);
      root.left.right = new BinaryNode(7);
      root.right.left = new BinaryNode(15);
      root.right.right = new BinaryNode(40);
      root.right.right.left = new BinaryNode(35);

      transformBSTGreaterSum(root);

      expect(root.value).toBe(119);
      expect(root.left.value).toBe(137);
      expect(root.right.value).toBe(75);
      expect(root.left.left.value).toBe(139);
      expect(root.left.right.value).toBe(130);
      expect(root.right.left.value).toBe(104);
      expect(root.right.right.value).toBe(0);
      expect(root.right.right.left.value).toBe(40);
    });
  });

  describe("Inorder Successor and Predecessor of BST", () => {
    it("should return the successor and predecessor of a node", () => {
      const root = new BinarySearchTreeWithComments();
      root.insert(50);
      root.insert(30);
      root.insert(20);
      root.insert(40);
      root.insert(70);
      root.insert(60);
      root.insert(80);

      expect(getInorderSuccessorPredecessor(root.root, 30)).toEqual({
        successor: 40,
        predecessor: 20,
      });
      expect(getInorderSuccessorPredecessor(root.root, 60)).toEqual({
        successor: 70,
        predecessor: 50,
      });
    });
  });

  describe("Pair of Nodes in BST for given Sum", () => {
    it("should return a Pair for a sum if it exists", () => {
      const root = new BinarySearchTreeWithComments();
      root.insert(15);
      root.insert(10);
      root.insert(20);
      root.insert(8);
      root.insert(12);
      root.insert(16);
      root.insert(25);
      root.insert(10);

      expect(pairGivenSumInBST(root.root, 33)).toEqual([8, 25]);
      expect(pairGivenSumInBST(root.root, 25)).toEqual([10, 15]);
    });
  });

  describe("Lowest Common Ancestor of two nodes in BST", () => {
    it("should return the lca", () => {
      const root = new BinaryNode(20);
      root.left = new BinaryNode(8);
      root.right = new BinaryNode(22);
      root.left.left = new BinaryNode(4);
      root.left.right = new BinaryNode(12);
      root.left.right.left = new BinaryNode(10);
      root.left.right.right = new BinaryNode(14);

      expect(getLowestCommonAncestorBST(root, 10, 14).value).toBe(12);
      expect(getLowestCommonAncestorBST(root, 4, 14).value).toBe(8);
      expect(getLowestCommonAncestorBST(root, 4, 22).value).toBe(20);
    });
  });

  describe("Sorted LinkedList to Balanced BST", () => {
    it("should return a Balanced BST", () => {
      const head = new LinkedListNode(1);
      head.next = new LinkedListNode(2);
      head.next.next = new LinkedListNode(3);
      head.next.next.next = new LinkedListNode(4);

      const root = sortedListToBalancedBST1(head);
      expect(root.value).toBe(3);
      expect(root.left.value).toBe(2);
      expect(root.left.left.value).toBe(1);
      expect(root.right.value).toBe(4);

      const head2 = new LinkedListNode(1);
      head2.next = new LinkedListNode(2);
      head2.next.next = new LinkedListNode(3);
      head2.next.next.next = new LinkedListNode(4);
      head2.next.next.next.next = new LinkedListNode(5);
      head2.next.next.next.next.next = new LinkedListNode(6);
      head2.next.next.next.next.next.next = new LinkedListNode(7);

      const root2 = sortedListToBalancedBST2(head2);
      expect(root2.value).toBe(4);
      expect(root2.left.value).toBe(2);
      expect(root2.left.left.value).toBe(1);
      expect(root2.left.right.value).toBe(3);
      expect(root2.right.value).toBe(6);
      expect(root2.right.left.value).toBe(5);
    });
  });
});
