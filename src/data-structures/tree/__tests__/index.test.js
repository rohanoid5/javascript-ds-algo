const BinarySearchTree = require("../BinarySearchTree");
const BinaryNode = require("../BinaryNode");
const BinarySearchTreeWithComments = require("../BinarySearchTreeWithComments");
const { AVLTree } = require("../AVLTree");

describe("Binary Search Tree", () => {
  it("should create an instance", () => {
    let bst = new BinarySearchTree();

    expect(bst).toBeDefined();
  });

  it("should maintain the property of BST after insertion", () => {
    let bst = new BinarySearchTree();
    let arr = [19, 14, 3, 15, 53, 26, 58];

    arr.forEach((el) => {
      bst.insert(el);
    });

    expect(bst.root.value).toBe(19);
    expect(bst.root.left.value).toBe(14);
    expect(bst.root.right.value).toBe(53);
  });

  it("should successfully check whether a value is present in the Tree", () => {
    let bst = new BinarySearchTree();
    let arr = [19, 14, 3, 15, 53, 26, 58];

    arr.forEach((el) => {
      bst.insert(el);
    });

    expect(bst.contains(53)).toBe(true);
    expect(bst.contains(3)).toBe(true);
    expect(bst.contains(23)).toBe(false);
  });

  it("should successfully remove any node present in the Tree", () => {
    let bst = new BinarySearchTree();
    let arr = [19, 14, 3, 15, 53, 26, 58];

    arr.forEach((el) => {
      bst.insert(el);
    });
    bst.remove(19);

    expect(bst.contains(19)).toBe(false);
    expect(bst.root.value).toBe(26);
  });
});

describe("Binary Search Tree with Comments", () => {
  it("should create an instance", () => {
    let bst = new BinarySearchTreeWithComments();

    expect(bst).toBeDefined();
  });

  it("should maintain the property of BST after insertion", () => {
    let bst = new BinarySearchTreeWithComments();
    let arr = [19, 14, 3, 15, 53, 26, 58];

    arr.forEach((el) => {
      bst.insert(el);
    });

    expect(bst.root.value).toBe(19);
    expect(bst.root.left.value).toBe(14);
    expect(bst.root.right.value).toBe(53);
  });

  it("should successfully check whether a value is present in the Tree", () => {
    let bst = new BinarySearchTreeWithComments();
    let arr = [19, 14, 3, 15, 53, 26, 58];

    arr.forEach((el) => {
      bst.insert(el);
    });

    expect(bst.contains(53)).toBe(true);
    expect(bst.contains(3)).toBe(true);
    expect(bst.contains(23)).toBe(false);
  });

  it("should successfully remove any node present in the Tree", () => {
    let bst = new BinarySearchTreeWithComments();
    let arr = [19, 14, 3, 15, 53, 26, 58];

    arr.forEach((el) => {
      bst.insert(el);
    });
    bst.remove(19);

    expect(bst.contains(19)).toBe(false);
    expect(bst.root.value).toBe(26);
  });
});

describe("AVL Tree", () => {
  describe("Insertion", () => {
    it("should insert new nodes in the Tree while keeping the Tree balanced", () => {
      const tree = new AVLTree();
      tree.root = tree.insert(tree.root, 10);
      tree.root = tree.insert(tree.root, 20);
      tree.root = tree.insert(tree.root, 30);
      tree.root = tree.insert(tree.root, 40);
      tree.root = tree.insert(tree.root, 50);
      tree.root = tree.insert(tree.root, 25);

      expect(tree.root.value).toBe(30);
      expect(tree.root.left.value).toBe(20);
      expect(tree.root.right.value).toBe(40);
      expect(tree.root.left.left.value).toBe(10);
      expect(tree.root.left.right.value).toBe(25);
      expect(tree.root.right.right.value).toBe(50);
    });
  });
});
