const {
  QueueUsingStacks1,
  QueueUsingStacks2,
} = require("../queue-using-stack/QueueUsingStack");
const {
  SpecializedStack,
  SpecializedStackWithoutSpace,
} = require("../specialized-stack/SpecializedStack");

describe("Stack", () => {
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

  describe("Specialized Stack", () => {
    it("should return the minimum value in stack with extra space", () => {
      const arr = [15, 14, 13, 29, 22, 11];
      const stack = new SpecializedStack(20);

      for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);

        if (i == 0) expect(stack.getMin()).toBe(15);
        if (i == 1) expect(stack.getMin()).toBe(14);
        if (i == 2) expect(stack.getMin()).toBe(13);
        if (i == 3) expect(stack.getMin()).toBe(13);
        if (i == 4) expect(stack.getMin()).toBe(13);
        if (i == 5) expect(stack.getMin()).toBe(11);
      }
      stack.pop();
      expect(stack.getMin(13));
    });

    it("should return the minimum value in stack without extra space", () => {
      const arr = [15, 14, 13, 29, 22, 11];
      const stack = new SpecializedStackWithoutSpace(20);

      for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);

        if (i == 0) expect(stack.getMin()).toBe(15);
        if (i == 1) expect(stack.getMin()).toBe(14);
        if (i == 2) expect(stack.getMin()).toBe(13);
        if (i == 3) expect(stack.getMin()).toBe(13);
        if (i == 4) expect(stack.getMin()).toBe(13);
        if (i == 5) expect(stack.getMin()).toBe(11);
      }

      for (let i = 0; i < arr.length; i++) {
        expect(stack.pop()).toBe(arr[arr.length - 1 - i]);
      }
    });
  });
});
