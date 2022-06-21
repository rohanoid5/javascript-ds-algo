const Graph = require("../Graph");

describe("Graph", () => {
  it("should create a new instance of Graph", () => {
    const graph = new Graph();

    expect(graph).toBeDefined();
  });

  it("should be able to add nodes in the graph as vertices", () => {
    const graph = new Graph();

    let nodes = ["A", "B", "C", "D"];
    nodes.forEach((node) => {
      graph.addNode(node);
    });

    Array.from(graph.nodes).forEach((vertex, idx) => {
      expect(vertex).toBe(nodes[idx]);
    });
  });

  it("should be able to add multiple nodes in the graph as vertices", () => {
    const graph = new Graph();

    let nodes = ["A", "B", "C", "D"];
    graph.addNodesFrom(nodes);

    Array.from(graph.nodes).forEach((vertex, idx) => {
      expect(vertex).toBe(nodes[idx]);
    });
  });

  it("should be able to add edges from one node to another", () => {
    const graph = new Graph();

    /* 
      A -> B
      A -> C
      C -> D
    */
    let nodes = ["A", "B", "C", "D"];
    graph.addNodesFrom(nodes);
    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("C", "D");

    ["B", "C"].forEach((node) => {
      expect(graph.adjacencyList["A"].has(node)).toBe(true);
    });
    expect(graph.adjacencyList["D"].has("C")).toBe(true);
    expect(graph.adjacencyList["C"].has("D")).toBe(true);
    expect(graph.adjacencyList["C"].has("A")).toBe(true);
    expect(graph.adjacencyList["B"].has("A")).toBe(true);
  });

  it("should be able to add multiple edges from one node to another", () => {
    const graph = new Graph();

    /* 
      A -> B
      A -> C
      C -> D
    */
    let nodes = ["A", "B", "C", "D"];
    graph.addNodesFrom(nodes);
    graph.addEdgesFrom([
      ["A", "B"],
      ["A", "C"],
      ["C", "D"],
    ]);

    ["B", "C"].forEach((node) => {
      expect(graph.adjacencyList["A"].has(node)).toBe(true);
    });
    expect(graph.adjacencyList["D"].has("C")).toBe(true);
    expect(graph.adjacencyList["C"].has("D")).toBe(true);
    expect(graph.adjacencyList["C"].has("A")).toBe(true);
    expect(graph.adjacencyList["B"].has("A")).toBe(true);
  });
});
