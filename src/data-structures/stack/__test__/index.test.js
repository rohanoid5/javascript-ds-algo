const Stack = require("../Stack");

describe("Stack", () => {
  it("should create an instance of stack", () => {
    const stack = new Stack();

    expect(stack).toBeDefined();
  });

  it("should create an instance of stack of provided size", () => {
    const stack = new Stack(10);

    expect(stack.size).toBe(10);
  });

  it("should be able to push items on the stack", () => {
    const stack = new Stack(10);

    stack.push(10);
    stack.push(8);
    stack.push(2);

    expect(stack.getSize()).toBe(3);
  });

  it("should be able to pop items from the stack", () => {
    const stack = new Stack(10);

    stack.push(10);
    stack.push(8);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(8);
    expect(stack.pop()).toBe(10);
    expect(stack.getSize()).toBe(0);
  });
});
