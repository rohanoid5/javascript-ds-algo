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
const topologicalSort2 = require("../topological-sort/TopologicalSort2");
const transposeDirectedGraph = require("../transpose-directed-graph/TransposeGraph");
const isGraphBipartite = require("../check-bipartite/BipartiteGraph");
const countPathBetweenVertices = require("../path-count/CountPath");
const bestFirstSearch = require("../best-first-search/BestFirstSearch");
const hasNegativeCycle = require("../bellman-ford/CheckNegativeCycle");
const hasNegativeCycle2 = require("../floyd-warshall/CheckNegativeCycle2");
const countCyclesInUndirectedGraph = require("../count-cycle/CountCycleUndirected");
const cloneDAG = require("../clone-dag/CloneDirectedAcyclicGraph");
const singleSourceShortestPath = require("../djikstra/SingleSourceShortestPath");
const getShortestPathForDAG = require("../dag-shortest-path/ShortestPathDAG");
const findShortestPathInUnweightedGraph = require("../unweighted-shortest-path/ShortestPathUnweighted");
const findMinWeightCycleInUndirectedGraph = require("../minimum-weight-cycle/MinimumWeightCycle");
const maximumEdgeAdditionInDAG = require("../maximum-edge-dag/MaximumEdgeInDAG");
const getLongestPathForDAG = require("../dag-longest-path/LongestPathDAG");
const printAlienDictionary = require("../alien-dictionary/AlienDictionary");
const scheduleTasks = require("../task-scheduling/TaskScheduling");
const getMinimumSpanningTree2 = require("../kruskals-mst/MinimumSpanningTree2");
const getMinimumSpanningTree = require("../prims-mst/MinimumSpanningTree");

const { pathTo } = require("../util");
const findMotherVertex = require("../find-mother-vertex/FindMotherVertex");
const numberOfIslands = require("../number-of-islands/NumberOfIslands");

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

  describe("Topological Sort 2", () => {
    it("should return topologically sorted acyclic directed graph(adjacency matrix)", () => {
      const graph = new WeightedGraphWithAdjacencyMatrix(6, true);
      /**
       *   r s t x y  z
       *   0 1 2 3 4  5
       * 0 0 5 3 0 0  0
       * 1 0 0 2 6 0  0
       * 2 0 0 0 7 4  2
       * 3 0 0 0 0 -1 1
       * 4 0 0 0 0 0 -2
       * 5 0 0 0 0 0 0
       */
      graph.addEdge(0, 1, 5);
      graph.addEdge(0, 2, 3);
      graph.addEdge(1, 2, 2);
      graph.addEdge(1, 3, 6);
      graph.addEdge(2, 3, 7);
      graph.addEdge(2, 4, 4);
      graph.addEdge(2, 5, 2);
      graph.addEdge(3, 4, -1);
      graph.addEdge(3, 5, 1);
      graph.addEdge(4, 5, -2);

      expect(topologicalSort2(graph)).toEqual([0, 1, 2, 3, 4, 5]);
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

  describe("Djikstra", () => {
    it("should find single source shortest path", () => {
      const graph = new WeightedGraphWithAdjacencyMatrix(9);
      /**
       *    0  1  2  3  4  5  6  7  8
       * 0  0  4  0  0  0  0  0  8  0
       * 1  4  0  8  0  0  0  0  11 0
       * 2  0  8  0  7  0  4  0  0  2
       * 3  0  0  7  0  9  14 0  0  0
       * 4  0  0  0  9  0  10 0  0  0
       * 5  0  0  4  14 10 0  2  0  0
       * 6  0  0  0  0  0  2  0  1  6
       * 7  8  11 0  0  0  0  1  0  7
       * 8  0  0  2  0  0  0  6  7  0
       */

      graph.addEdge(0, 1, 4);
      graph.addEdge(0, 7, 8);
      graph.addEdge(1, 2, 8);
      graph.addEdge(1, 7, 11);
      graph.addEdge(2, 3, 7);
      graph.addEdge(2, 5, 4);
      graph.addEdge(2, 8, 2);
      graph.addEdge(3, 4, 9);
      graph.addEdge(3, 5, 14);
      graph.addEdge(4, 5, 10);
      graph.addEdge(5, 6, 2);
      graph.addEdge(6, 7, 1);
      graph.addEdge(6, 8, 6);
      graph.addEdge(7, 8, 7);

      expect(singleSourceShortestPath(graph, 0)).toEqual([
        0, 4, 12, 19, 21, 11, 9, 8, 14,
      ]);
    });
  });

  describe("Shortest Path of DAG", () => {
    it("should return shortest paths from source of a DAG", () => {
      const graph = new WeightedGraphWithAdjacencyMatrix(6, true);
      /**
       *   r s t x y  z
       *   0 1 2 3 4  5
       * 0 0 5 3 0 0  0
       * 1 0 0 2 6 0  0
       * 2 0 0 0 7 4  2
       * 3 0 0 0 0 -1 1
       * 4 0 0 0 0 0 -2
       * 5 0 0 0 0 0 0
       */
      graph.addEdge(0, 1, 5);
      graph.addEdge(0, 2, 3);
      graph.addEdge(1, 2, 2);
      graph.addEdge(1, 3, 6);
      graph.addEdge(2, 3, 7);
      graph.addEdge(2, 4, 4);
      graph.addEdge(2, 5, 2);
      graph.addEdge(3, 4, -1);
      graph.addEdge(3, 5, 1);
      graph.addEdge(4, 5, -2);
      expect(getShortestPathForDAG(graph, 0)).toEqual([0, 5, 3, 10, 7, 5]);

      const graph2 = new WeightedGraphWithAdjacencyMatrix(6, true);
      graph2.addEdge(0, 1, 5);
      graph2.addEdge(0, 2, 3);
      graph2.addEdge(1, 3, 6);
      graph2.addEdge(1, 2, 2);
      graph2.addEdge(2, 4, 4);
      graph2.addEdge(2, 5, 2);
      graph2.addEdge(2, 3, 7);
      graph2.addEdge(3, 4, -1);
      graph2.addEdge(4, 5, -2);
      expect(getShortestPathForDAG(graph2, 1)).toEqual([
        9007199254740991, 0, 2, 6, 5, 3,
      ]);
    });
  });

  describe("Shortest Path of Unweighted Graph", () => {
    it("should return an array of distance from source vertex to all vertices", () => {
      const graph = new GraphWithAdjacencyMatrix(8);
      graph.addEdge(0, 1);
      graph.addEdge(0, 3);
      graph.addEdge(1, 2);
      graph.addEdge(3, 4);
      graph.addEdge(3, 7);
      graph.addEdge(4, 5);
      graph.addEdge(4, 6);
      graph.addEdge(4, 7);
      graph.addEdge(5, 6);
      graph.addEdge(6, 7);

      expect(findShortestPathInUnweightedGraph(graph, 0)).toEqual([
        0, 1, 2, 1, 2, 3, 3, 2,
      ]);
    });
  });

  describe("Minimum Weight Cycle in Undirected Graph", () => {
    it("should return the minimum weight cycle in Undirected Graph", () => {
      const graph = new WeightedGraphWithAdjacencyMatrix(9);
      graph.addEdge(0, 1, 4);
      graph.addEdge(0, 7, 8);
      graph.addEdge(1, 2, 8);
      graph.addEdge(1, 7, 11);
      graph.addEdge(2, 3, 7);
      graph.addEdge(2, 8, 2);
      graph.addEdge(2, 5, 4);
      graph.addEdge(3, 4, 9);
      graph.addEdge(3, 5, 14);
      graph.addEdge(4, 5, 10);
      graph.addEdge(5, 6, 2);
      graph.addEdge(6, 7, 1);
      graph.addEdge(6, 8, 6);
      graph.addEdge(7, 8, 7);

      expect(findMinWeightCycleInUndirectedGraph(graph)).toBe(14);
    });
  });

  describe("Maximum Edge Addition in DAG", () => {
    it("should return an array of pairs which can be added in a DAG", () => {
      const graph = new GraphWithAdjacencyMatrix(6, true);
      graph.addEdge(5, 2);
      graph.addEdge(5, 0);
      graph.addEdge(4, 0);
      graph.addEdge(4, 1);
      graph.addEdge(2, 3);
      graph.addEdge(3, 1);

      expect(maximumEdgeAdditionInDAG(graph)).toEqual([
        [5, 4],
        [5, 3],
        [5, 1],
        [4, 2],
        [4, 3],
        [2, 1],
        [2, 0],
        [3, 0],
        [1, 0],
      ]);
    });
  });

  describe("Longest Path from source in DAG", () => {
    it("should return an array of longest distances from source", () => {
      const graph = new WeightedGraphWithAdjacencyMatrix(6, true);
      graph.addEdge(0, 1, 5);
      graph.addEdge(0, 2, 3);
      graph.addEdge(1, 3, 6);
      graph.addEdge(1, 2, 2);
      graph.addEdge(2, 4, 4);
      graph.addEdge(2, 5, 2);
      graph.addEdge(2, 3, 7);
      graph.addEdge(3, 5, 1);
      graph.addEdge(3, 4, -1);
      graph.addEdge(4, 5, -2);

      expect(getLongestPathForDAG(graph, 1)).toEqual([
        -9007199254740991, 0, 2, 9, 8, 10,
      ]);
    });
  });

  describe("Alien Dictionary", () => {
    it("should return sorted dictionary words", () => {
      expect(printAlienDictionary(["caa", "aaa", "aab"], 3)).toEqual([
        "c",
        "a",
        "b",
      ]);
      expect(
        printAlienDictionary(["ywx", "wz", "xww", "xz", "zyy", "zwz"], 3)
      ).toEqual(["y", "w", "x", "z"]);
    });
  });

  describe("Task Scheduling", () => {
    it("should return order of task execution", () => {
      expect(
        scheduleTasks(
          [
            [1, 0],
            [2, 0],
            [3, 1],
            [3, 2],
          ],
          4
        )
      ).toEqual([0, 2, 1, 3]);
      expect(
        scheduleTasks(
          [
            [1, 0],
            [2, 1],
            [3, 2],
          ],
          4
        )
      ).toEqual([0, 1, 2, 3]);
    });
  });

  describe("Prim's MST", () => {
    it("should return the minimum spanning tree", () => {
      const graph = new WeightedGraphWithAdjacencyMatrix(5);
      [
        [0, 2, 0, 6, 0],
        [2, 0, 3, 8, 5],
        [0, 3, 0, 0, 7],
        [6, 8, 0, 0, 9],
        [0, 5, 7, 9, 0],
      ];
      graph.addEdge(0, 1, 2);
      graph.addEdge(0, 3, 6);
      graph.addEdge(1, 0, 2);
      graph.addEdge(1, 2, 3);
      graph.addEdge(1, 3, 8);
      graph.addEdge(1, 4, 5);
      graph.addEdge(2, 1, 3);
      graph.addEdge(2, 4, 7);
      graph.addEdge(3, 0, 6);
      graph.addEdge(3, 1, 8);
      graph.addEdge(3, 4, 9);
      graph.addEdge(4, 1, 5);
      graph.addEdge(4, 2, 7);
      graph.addEdge(4, 3, 9);

      expect(getMinimumSpanningTree(graph)).toEqual({
        0: -1,
        1: "0",
        2: "1",
        3: "0",
        4: "1",
      });
    });
  });

  describe("Kruskal's MST", () => {
    it("should return the minimum spanning tree", () => {
      const graph = new WeightedGraphWithAdjacencyMatrix(5, true);
      [
        [0, 2, 0, 6, 0],
        [2, 0, 3, 8, 5],
        [0, 3, 0, 0, 7],
        [6, 8, 0, 0, 9],
        [0, 5, 7, 9, 0],
      ];
      graph.addEdge(0, 1, 2);
      graph.addEdge(0, 3, 6);
      graph.addEdge(1, 2, 3);
      graph.addEdge(1, 3, 8);
      graph.addEdge(1, 4, 5);
      graph.addEdge(2, 4, 7);
      graph.addEdge(3, 4, 9);

      expect(getMinimumSpanningTree2(graph).weights).toEqual({
        "0,1": 2,
        "1,2": 3,
        "1,4": 5,
        "0,3": 6,
      });
    });
  });

  describe("Find Mother Vertex", () => {
    it("should return the mother vertex if it exists otherwise return -1", () => {
      const graph = new GraphWithAdjacencyMatrix(7, true);
      graph.addEdge(0, 1);
      graph.addEdge(0, 2);
      graph.addEdge(1, 3);
      graph.addEdge(4, 1);
      graph.addEdge(6, 4);
      graph.addEdge(5, 6);
      graph.addEdge(5, 2);
      graph.addEdge(6, 0);
      expect(findMotherVertex(graph)).toBe(5);

      const graph2 = new GraphWithAdjacencyMatrix(4, true);
      graph2.addEdge(3, 0);
      graph2.addEdge(3, 1);
      graph2.addEdge(1, 2);
      graph2.addEdge(0, 1);
      expect(findMotherVertex(graph2)).toBe(3);
    });
  });

  describe("Number of Islands", () => {
    it("should return the number islands", () => {
      let islands = [
        [1, 1, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1],
      ];
      expect(numberOfIslands(islands)).toBe(6);
    });
  });
});
