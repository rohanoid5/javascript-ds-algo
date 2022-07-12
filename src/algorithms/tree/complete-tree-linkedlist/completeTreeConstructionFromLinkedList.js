const BinaryNode = require("../../../data-structures/tree/BinaryNode");

/**
 * Construct Complete Binary Tree from its Linked List Representation
 *
 * Given Linked List Representation of Complete Binary Tree, construct the Binary tree.
 * A complete binary tree can be represented in an array in the following approach.
 * If root node is stored at index i, its left, and right children are stored at indices 2*i+1, 2*i+2 respectively.
 *
 * Solution:
 * Essentially the LinkedList is the level order representation of the Tree.
 * 1. Use a queue.
 * 2. Enqueue the first node from LinkedList and make that root of the tree.
 * 3. Dequeue a node from the queue
 * 4. Traverse the LinkedList twice and put those elements as the left and right node of the dequeued node.
 * 5. Push the two nodes from the LinkedList into the queue.
 * 6. Repeat step 3 to 6 until the queue is empty
 */
const buildCompleteTreeFromLinkedList = function (list) {
  let queue = [];
  if (list === null) return null;

  let root = new BinaryNode(list.value);
  queue.push(root);
  let ptr = list;

  while (queue.length > 0) {
    let currNode = queue.shift();

    if (ptr && ptr.next) {
      currNode.left = new BinaryNode(ptr.next.value);
      ptr = ptr.next;
    }

    if (ptr && ptr.next) {
      currNode.right = new BinaryNode(ptr.next.value);
      ptr = ptr.next;
    }

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return root;
};

module.exports = buildCompleteTreeFromLinkedList;
