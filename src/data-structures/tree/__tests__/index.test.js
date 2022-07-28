const BinarySearchTree = require("../BinarySearchTree");
const BinaryNode = require("../BinaryNode");
const BinarySearchTreeWithComments = require("../BinarySearchTreeWithComments");

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
