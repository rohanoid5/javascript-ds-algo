const Graph = require("../Graph");

describe("Graph", () => {
  it("should create a new instance of Graph", () => {
    const graph = new Graph();

    expect(graph).toBeDefined();
  });
});
