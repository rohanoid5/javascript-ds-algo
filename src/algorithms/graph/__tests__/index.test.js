const Graph = require("../../../data-structures/graph/Graph");
const GraphWithAdjacencyMatrix = require("../../../data-structures/graph/GraphWithAdjacencyMatrix");
const WeightedGraph = require("../../../data-structures/graph/WeightedGraph");
const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");

const depthFirstSearch = require("../depth-first-search/DFS");
const breadthFirstSearch = require("../breadth-first-search/BFS");
const hasCycle = require("../cycle-detection/CheckCycle");
const hasCycle2 = require("../cycle-detection/CheckCycle2");
const hasCycle3 = require("../cycle-detection/CheckCycle3");
const topologicalSort = require("../topological-sort/TopologicalSort");
const transposeDirectedGraph = require("../transpose-directed-graph/TransposeGraph");
const isGraphBipartite = require("../check-bipartite/BipartiteGraph");
const countPathBetweenVertices = require("../path-count/CountPath");
const bestFirstSearch = require("../best-first-search/BestFirstSearch");
const hasNegativeCycle = require("../bellman-ford/CheckNegativeCycle");
const hasNegativeCycle2 = require("../floyd-warshall/CheckNegativeCycle2");
const countCyclesInUndirectedGraph = require("../count-cycle/CountCycleUndirected");
const cloneDAG = require("../clone-dag/CloneDirectedAcyclicGraph");

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

  describe("Cycle Detection 2", () => {
    it("should detect cycle in a graph built with adjacency matrix", () => {
      const graph = new GraphWithAdjacencyMatrix(5, true);
      /**
       *   0 1 2 3 4
       * 0 0 1 1 0 0
       * 1 0 0 1 0 1
       * 2 0 0 0 1 1
       * 3 1 0 0 0 1
       * 4 0 0 0 0 0
       */
      graph.addEdge(0, 1);
      graph.addEdge(1, 2);
      graph.addEdge(2, 3);
      graph.addEdge(3, 0);
      graph.addEdge(3, 4);

      expect(hasCycle2(graph.adjacencyMatrix)).toBe(true);

      graph.removeEdge(3, 0);
      expect(hasCycle2(graph.adjacencyMatrix)).toBe(false);
    });
  });

  describe("Cycle Detection 3", () => {
    it("should detect cycle in a graph built with adjacency matrix", () => {
      const graph = new GraphWithAdjacencyMatrix(5, true);
      /**
       *   0 1 2 3 4
       * 0 0 1 1 0 0
       * 1 0 0 1 0 1
       * 2 0 0 0 1 1
       * 3 1 0 0 0 1
       * 4 0 0 0 0 0
       */
      graph.addEdge(0, 1);
      graph.addEdge(1, 2);
      graph.addEdge(2, 3);
      graph.addEdge(3, 0);
      graph.addEdge(3, 4);

      expect(hasCycle3(graph.adjacencyMatrix)).toBe(true);

      graph.removeEdge(3, 0);
      expect(hasCycle3(graph.adjacencyMatrix)).toBe(false);
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

  describe("Count Number of Paths", () => {
    it("should return the number of path exists between two vertices", () => {
      let graph = new Graph(true);
      let nodes = ["A", "B", "C", "D", "E", "F"];

      /**
       * A -> B
       * B -> C
       * C -> F
       * A -> D
       * D -> F
       * A -> E
       * E -> F
       */

      graph.addNodesFrom(nodes);
      graph.addEdgesFrom([
        ["A", "B"],
        ["B", "C"],
        ["C", "F"],
        ["A", "D"],
        ["D", "F"],
        ["A", "E"],
        ["E", "F"],
      ]);

      let pathCount = countPathBetweenVertices(graph, "A", "F");
      expect(pathCount).toBe(3);
    });
  });

  describe("Best First Search", () => {
    it("should find the best possible path from source to destination in a weighted graph", () => {
      const graph = new WeightedGraph(true);
      const nodes = ["A", "B", "C", "D"];
      graph.addNodesFrom(nodes);
      /**
       * A ->(5) B
       * B ->(3) C
       * C ->(2) D
       * A ->(4) C
       * C ->(2) D
       */
      graph.addEdgesFrom([
        ["A", "B", 5],
        ["B", "C", 3],
        ["C", "D", 2],
        ["A", "C", 4],
        ["C", "D", 2],
      ]);
      expect(bestFirstSearch(graph, "A", "D")).toEqual(["A", "C", "D"]);
    });
  });

  describe("Bellman Ford", () => {
    it("should detect negative cycle in weighted graph", () => {
      const graph = new WeightedGraphWithAdjacencyMatrix(4, true);
      /**
       *   0  1  2  3
       * 0 0  1  0  0
       * 1 0  0 -1  0
       * 2 0  0  0 -1
       * 3 -1 0  0  0
       */

      graph.addEdge(0, 1, 1);
      graph.addEdge(1, 2, -1);
      graph.addEdge(2, 3, -1);
      graph.addEdge(3, 0, -1);

      expect(hasNegativeCycle(graph)).toBe(true);
    });
  });

  describe("Floyd Warshall", () => {
    it("should detect negative cycle in weighted graph", () => {
      const graph = new WeightedGraphWithAdjacencyMatrix(4, true);
      /**
       *   0  1  2  3
       * 0 0  1  0  0
       * 1 0  0 -1  0
       * 2 0  0  0 -1
       * 3 -1 0  0  0
       */

      graph.addEdge(0, 1, 1);
      graph.addEdge(1, 2, -1);
      graph.addEdge(2, 3, -1);
      graph.addEdge(3, 0, -1);

      expect(hasNegativeCycle2(graph)).toBe(true);
    });
  });

  describe("Count Cycles of N-length in Undirected Graph", () => {
    it("should count number of cycles of N-length in undirected Graph", () => {
      const graph = new GraphWithAdjacencyMatrix(5);
      /**
       *   0 1 2 3 4
       * 0 0 1 0 1 0
       * 1 1 0 1 0 1
       * 2 0 1 0 1 0
       * 3 1 0 1 0 1
       * 4 0 1 0 1 0
       */

      graph.addEdge(0, 1);
      graph.addEdge(0, 3);
      graph.addEdge(1, 2);
      graph.addEdge(1, 4);
      graph.addEdge(2, 3);
      graph.addEdge(3, 4);

      expect(countCyclesInUndirectedGraph(graph, 4)).toBe(3);
    });
  });

  describe("Clone DAG", () => {
    it("should create a clone of a Directed Acyclic Graph", () => {
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

      const clone = cloneDAG(graph);
      expect(clone.adjacencyMatrix).toEqual(graph.adjacencyMatrix);

      clone.removeEdge(4, 1);
      expect(clone.adjacencyMatrix[4][1]).toBe(0);
      expect(graph.adjacencyMatrix[4][1]).toBe(1);
    });
  });
});
