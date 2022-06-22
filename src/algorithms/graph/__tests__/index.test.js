const Graph = require("../../../data-structures/graph/Graph");
const { depthFirstSearch, pathTo } = require("../depth-first-search/DFS");

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
});
