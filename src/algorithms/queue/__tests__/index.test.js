const {
  QueueUsingStacks1,
  QueueUsingStacks2,
} = require("../queue-using-stack/QueueUsingStack");

describe("Queue using Stacks", () => {
  it("should return a Queue using 2 stacks where enqueue is expensive", () => {
    const queue = new QueueUsingStacks1();
    const arr = [1, 2, 3, 4];

    for (let i = 0; i < arr.length; i++) {
      queue.enqueue(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
      expect(queue.dequeue()).toBe(arr[i]);
    }
  });

  it("should return a Queue using 2 stacks where dequeue is expensive", () => {
    const queue = new QueueUsingStacks2();
    const arr = [1, 2, 3, 4];

    for (let i = 0; i < arr.length; i++) {
      queue.enqueue(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
      expect(queue.dequeue()).toBe(arr[i]);
    }
  });
});
