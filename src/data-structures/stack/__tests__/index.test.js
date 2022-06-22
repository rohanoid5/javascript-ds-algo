const StackUsingArray = require("../StackUsingArray");
const StackUsingLinkedList = require("../StackUsingLinkedList");

describe("Stack", () => {
  it("should create an instance of stack", () => {
    const stack1 = new StackUsingArray();
    const stack2 = new StackUsingLinkedList();

    expect(stack1).toBeDefined();
    expect(stack2).toBeDefined();
  });

  it("should create an instance of stack of provided capacity", () => {
    const stack1 = new StackUsingArray(10);
    const stack2 = new StackUsingLinkedList(12);

    expect(stack1.capacity).toBe(10);
    expect(stack2.capacity).toBe(12);
  });

  it("should be able to push items on the stack", () => {
    const stack1 = new StackUsingArray(10);
    const stack2 = new StackUsingLinkedList(10);

    stack1.push(10);
    stack1.push(8);
    stack1.push(2);

    stack2.push(10);
    stack2.push(8);
    stack2.push(2);

    expect(stack1.getSize()).toBe(3);
    expect(stack2.getSize()).toBe(3);
  });

  it("should be able to pop items from the stack", () => {
    const stack1 = new StackUsingArray(10);
    const stack2 = new StackUsingLinkedList(10);

    stack1.push(10);
    stack1.push(8);
    stack1.push(2);

    stack2.push(10);
    stack2.push(8);
    stack2.push(2);

    expect(stack1.pop()).toBe(2);
    expect(stack1.pop()).toBe(8);
    expect(stack1.pop()).toBe(10);
    expect(stack1.getSize()).toBe(0);

    expect(stack2.pop()).toBe(2);
    expect(stack2.pop()).toBe(8);
    expect(stack2.pop()).toBe(10);
    expect(stack2.getSize()).toBe(0);
  });
});
