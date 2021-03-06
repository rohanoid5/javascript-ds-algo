const Graph = require("../Graph");
const GraphWithAdjacencyMatrix = require("../GraphWithAdjacencyMatrix");
const WeightedGraph = require("../WeightedGraph");
const WeightedGraphWithAdjacencyMatrix = require("../WeightedGraphWithAdjacencyMatrix");

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
    expect(graph.adjacencyList["B"].has("D")).toBe(false);
    expect(graph.adjacencyList["D"].has("A")).toBe(false);
  });

  it("should be able to remove edge", () => {
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
    graph.removeEdge("A", "B");

    expect(graph.adjacencyList["A"].has("B")).toBe(false);
  });

  it("should be able to create directed graph", () => {
    const graph = new Graph(true);

    /* 
      A -> B
      C -> B
    */
    let nodes = ["A", "B", "C"];
    graph.addNodesFrom(nodes);
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");

    expect(graph.adjacencyList["A"].has("B")).toBe(true);
    expect(graph.adjacencyList["B"].has("A")).toBe(false);
  });
});

describe("Graph with Adjacency Matrix", () => {
  it("should create an N x N matrix to store all edges", () => {
    const graph = new GraphWithAdjacencyMatrix(6, true);
    /*
      0 1 2 3 4 5
    0 0 1 1 0 0 0
    1 1 0 1 0 1 1
    2 0 0 0 1 1 0
    3 0 0 0 0 1 1
    4 0 1 0 0 0 0
    5 0 0 0 0 0 0
    */

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 0);
    graph.addEdge(1, 2);
    graph.addEdge(1, 4);
    graph.addEdge(1, 5);
    graph.addEdge(2, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 4);
    graph.addEdge(3, 5);
    graph.addEdge(4, 1);

    expect(graph.adjacencyMatrix[0][1]).toBe(1);
    expect(graph.adjacencyMatrix[2][4]).toBe(1);
    expect(graph.adjacencyMatrix[3][5]).toBe(1);
    expect(graph.adjacencyMatrix[4][1]).toBe(1);
    expect(graph.adjacencyMatrix[0][3]).toBe(0);
    expect(graph.adjacencyMatrix[1][3]).toBe(0);
    expect(graph.adjacencyMatrix[5][3]).toBe(0);
  });
});

describe("Weighted Graph", () => {
  it("should create a graph with weighted edges", () => {
    const graph = new WeightedGraph(false);
    const nodes = ["A", "B", "C", "D", "E"];
    /**
     * A ->(5) B
     * B ->(3) C
     * C ->(2) D
     * B ->(6) E
     */

    graph.addNodesFrom(nodes);
    graph.addEdgesFrom([
      ["A", "B", 5],
      ["B", "C", 3],
      ["C", "D", 2],
      ["B", "E", 6],
    ]);

    expect(graph.weights["A,B"]).toBe(5);
    expect(graph.weights["B,C"]).toBe(3);
    expect(graph.weights["C,D"]).toBe(2);
    expect(graph.weights["B,E"]).toBe(6);
  });
});

describe("Weighted Graph with Adjacency Matrix", () => {
  it("should create an N x N matrix to store all edges with weights", () => {
    const graph = new WeightedGraphWithAdjacencyMatrix(6, true);
    /*
      0 1 2 3 4 5
    0 0 2 3 0 0 0
    1 3 0 4 0 1 5
    2 0 0 0 5 4 0
    3 0 0 0 0 2 1
    4 0 1 0 0 0 0
    5 0 0 0 0 0 0
    */

    graph.addEdge(0, 1, 2);
    graph.addEdge(0, 2, 3);
    graph.addEdge(1, 0, 3);
    graph.addEdge(1, 2, 4);
    graph.addEdge(1, 4, 1);
    graph.addEdge(1, 5, 5);
    graph.addEdge(2, 3, 5);
    graph.addEdge(2, 4, 4);
    graph.addEdge(3, 4, 2);
    graph.addEdge(3, 5, 1);
    graph.addEdge(4, 1, 1);

    expect(graph.adjacencyMatrix[0][1]).toBe(1);
    expect(graph.weights["0,1"]).toBe(2);
    expect(graph.adjacencyMatrix[2][4]).toBe(1);
    expect(graph.weights["2,4"]).toBe(4);
    expect(graph.adjacencyMatrix[3][5]).toBe(1);
    expect(graph.weights["3,5"]).toBe(1);
    expect(graph.adjacencyMatrix[4][1]).toBe(1);
    expect(graph.weights["4,1"]).toBe(1);
  });
});
