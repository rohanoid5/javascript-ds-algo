const Graph = require("../../../data-structures/graph/Graph");
const GraphWithAdjacencyMatrix = require("../../../data-structures/graph/GraphWithAdjacencyMatrix");

const depthFirstSearch = require("../depth-first-search/DFS");
const breadthFirstSearch = require("../breadth-first-search/BFS");
const hasCycle = require("../cycle-detection/CheckCycle");
const topologicalSort = require("../topological-sort/TopologicalSort");
const transposeDirectedGraph = require("../transpose-directed-graph/TransposeGraph");
const isGraphBipartite = require("../check-bipartite/BipartiteGraph");

const { pathTo } = require("../util");

describe("Graph", () => {
  describe("Depth First Search", () => {
    it("should create all possible paths from source node", () => {
      /* 
        A -> B
        A -> C
        C -> D
        D -> E
        E -> F
        B -> G
        B -> H
      */
      const graph = new Graph();
      const nodes = ["A", "B", "C", "D", "E", "F", "G", "H"];
      graph.addNodesFrom(nodes);
      graph.addEdgesFrom([
        ["A", "B"],
        ["A", "C"],
        ["C", "D"],
        ["D", "E"],
        ["E", "F"],
        ["B", "G"],
        ["B", "H"],
      ]);
      const nodeFrom = depthFirstSearch(graph, "A");

      expect(Object.keys(nodeFrom).length).toBe(nodes.length);
      expect(pathTo(nodeFrom, "A", "F")).toEqual(["A", "C", "D", "E", "F"]);
      expect(pathTo(nodeFrom, "A", "H")).toEqual(["A", "B", "H"]);
    });
  });

  describe("Breadth First Search", () => {
    it("should create all possible paths from source node", () => {
      /* 
        A -> B
        A -> C
        C -> D
        D -> E
        E -> F
        B -> G
        B -> H
      */
      const graph = new Graph();
      const nodes = ["A", "B", "C", "D", "E", "F", "G", "H"];
      graph.addNodesFrom(nodes);
      graph.addEdgesFrom([
        ["A", "B"],
        ["A", "C"],
        ["C", "D"],
        ["D", "E"],
        ["E", "F"],
        ["B", "G"],
        ["B", "H"],
      ]);
      const nodeFrom = breadthFirstSearch(graph, "A");

      expect(Object.keys(nodeFrom).length).toBe(nodes.length);
      expect(pathTo(nodeFrom, "A", "F")).toEqual(["A", "C", "D", "E", "F"]);
      expect(pathTo(nodeFrom, "A", "H")).toEqual(["A", "B", "H"]);
    });
  });

  describe("Cycle Detection", () => {
    it("should return true in case there's a cycle in Directed Graph", () => {
      /* 
        A -> B -> C -> D -> E -> A
      */
      const graph = new Graph(true);
      const nodes = ["A", "B", "C", "D", "E"];
      graph.addNodesFrom(nodes);
      graph.addEdgesFrom([
        ["A", "B"],
        ["B", "C"],
        ["C", "D"],
        ["D", "E"],
        ["E", "A"],
      ]);

      expect(hasCycle(graph)).toBe(true);
    });

    it("should return false in case there's no cycle in Directed Graph", () => {
      /* 
        A -> B -> C -> D -> E -> A
      */
      const graph = new Graph(true);
      const nodes = ["A", "B", "C", "D", "E"];
      graph.addNodesFrom(nodes);
      graph.addEdgesFrom([
        ["A", "B"],
        ["B", "C"],
        ["C", "D"],
        ["D", "E"],
      ]);

      expect(hasCycle(graph)).toBe(false);
    });
  });

  describe("Topological Sort", () => {
    it("should return topologically sorted acyclic directed graph", () => {
      /* 
        A -> B
        A -> C
        B -> C
        B -> D 
      */
      const graph = new Graph(true);
      const nodes = ["A", "B", "C", "D"];
      graph.addNodesFrom(nodes);
      graph.addEdgesFrom([
        ["A", "B"],
        ["A", "C"],
        ["B", "C"],
        ["B", "D"],
      ]);

      expect(topologicalSort(graph)).toEqual(["A", "B", "D", "C"]);
    });
  });

  describe("Transpose Directed Graph", () => {
    const graph = new Graph(true);
    const nodes = ["A", "B", "C", "D"];
    graph.addNodesFrom(nodes);

    /*
    A -> B
    B -> C
    D -> B
    */
    graph.addEdgesFrom([
      ["A", "B"],
      ["B", "C"],
      ["D", "B"],
    ]);
    let transpose = transposeDirectedGraph(graph);
    /*
    B -> A
    C -> B
    B -> D
    */
    expect(transpose.adjacencyList["B"].has("A")).toBe(true);
    expect(transpose.adjacencyList["B"].has("D")).toBe(true);
    expect(transpose.adjacencyList["C"].has("B")).toBe(true);
  });

  describe("Bipartite Graph", () => {
    it("should return true if a Graph is Bipartite otherwise it'll return false", () => {
      let graph = new GraphWithAdjacencyMatrix(4, true);

      graph.addEdge(0, 1);
      graph.addEdge(0, 3);
      graph.addEdge(1, 0);
      graph.addEdge(1, 2);
      graph.addEdge(2, 1);
      graph.addEdge(2, 3);
      graph.addEdge(3, 0);
      graph.addEdge(3, 2);

      expect(isGraphBipartite(graph.adjacencyMatrix)).toBe(true);
    });
  });
});
