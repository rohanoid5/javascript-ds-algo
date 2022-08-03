const BinaryNode = require("../../../data-structures/tree/BinaryNode");

/**
 * Sorted Linked List to Balanced BST
 *
 * Solution: T = O(NLogN)
 * 1. Get the middle of the LinkedList and make it as root
 * 2. Recurse on the left half and find the middle of that half to construct the left subtree
 * 3. Similarly recurse on the right half and find the middle of that half to find the right subtree
 */
const sortedListToBalancedBST1 = function (head) {
  return sortedListToBalancedBST1Util(head, null);
};

const sortedListToBalancedBST1Util = function (head, target) {
  if (head === target || head === null) return null;

  let middle = getMiddle(head, target);
  let root = new BinaryNode(middle.value);
  root.left = sortedListToBalancedBST1Util(head, middle);
  root.right = sortedListToBalancedBST1Util(middle.next, target);

  return root;
};

const getMiddle = function (head, lastNode) {
  if (head.next === lastNode) return head;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    if (fast === lastNode) break;
    if (lastNode !== null && fast.value > lastNode.value) break;
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

/**
 * Solution: T = O(N)
 * The idea is to construct the Tree from leaf to root.
 * 1. We first count the number of nodes, say n
 * 2. We take the left n / 2 half, create left subtree recursively and connect root with the newly created half
 * 3. We take the right n - n / 2 half and do the same for right subtree.
 * 4. At the same time we will move the next pointer of our head node of list
 */
const sortedListToBalancedBST2 = function (head) {
  let count = getLengthOfList(head);

  const sortedListToBalancedBST2Util = function (n) {
    if (n <= 0) return null;
    let left = sortedListToBalancedBST2Util(Math.floor(n / 2));
    let root = new BinaryNode(head.value);

    root.left = left;
    head = head.next;

    root.right = sortedListToBalancedBST2Util(n - Math.floor(n / 2) - 1);
    return root;
  };

  return sortedListToBalancedBST2Util(count);
};

const getLengthOfList = function (head) {
  let count = 0;
  let temp = head;
  while (temp != null) {
    temp = temp.next;
    count++;
  }
  return count;
};

module.exports = { sortedListToBalancedBST1, sortedListToBalancedBST2 };
