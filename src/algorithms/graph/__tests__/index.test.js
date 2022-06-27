const Graph = require("../../../data-structures/graph/Graph");
const depthFirstSearch = require("../depth-first-search/DFS");
const breadthFirstSearch = require("../breadth-first-search/BFS");
const hasCycle = require("../cycle-detection/CheckCycle");
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
});
