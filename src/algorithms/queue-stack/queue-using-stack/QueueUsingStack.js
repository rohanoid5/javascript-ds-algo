/**
 * Queue using Stacks
 * Implement a Queue class with the help of Stack(s)
 *
 * Solution: (Making Enqueue more expensive then Dequeue) T = O(N) Enqueue and T = 1 for Dequeue
 */
class QueueUsingStacks1 {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  /**
   * We will use 2 stacks. The first stack will be popped and pushed to the second stack.
   * The new item will be pushed to the second stack and finally all the items will be pushed
   * back to first stack from second stack. In this way the oldest enqueued element is always at the
   * top of first stack.
   * @param {any} item
   */
  enqueue(item) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack2.push(item);

    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  /**
   * Since oldest element is always at the top of first stack, popping from it will
   * give us the result
   * @returns {any}
   */
  dequeue() {
    if (this.stack1.length === 0) throw new Error("Queue is Empty");

    return this.stack1.pop();
  }
}

/**
 * Solution: (Making Dequeue operation more expensive then Enqueue operation.)
 * T = O(N) for Dequeue and T = O(1) for Enqueue
 */
class QueueUsingStacks2 {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  /**
   * Push elements in stack1, since all old elements will eventually go in stack2 before popping.
   * @param {any} item
   */
  enqueue(item) {
    this.stack1.push(item);
  }

  /**
   * If both stacks are empty Queue is empty.
   * If stack2 is empty, we will pop all items from stack1 and push in stack2.
   * Lastly, we will return the popped item from stack2.
   *
   * Since we are only popping from stack1 and pushing to stack2 when stack2 is empty
   * the amortized T = O(1).
   * @returns {any}
   */
  dequeue() {
    if (this.stack1.length === 0 && this.stack2.length === 0)
      throw new Error("Queue is Empty");

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}

module.exports = {
  QueueUsingStacks1,
  QueueUsingStacks2,
};
