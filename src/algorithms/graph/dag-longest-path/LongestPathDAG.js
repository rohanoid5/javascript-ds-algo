const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");
const topologicalSort2 = require("../topological-sort/TopologicalSort2");
/**
 * Longest Path in a Directed Acyclic Graph
 * @param {WeightedGraphWithAdjacencyMatrix} graph
 * @param {number} source
 * @returns {Array}
 */
const getLongestPathForDAG = function (graph, source) {
  const { adjacencyMatrix, weights } = graph;
  const dist = new Array(adjacencyMatrix.length).fill(Number.MIN_SAFE_INTEGER);
  dist[source] = 0;

  const sortedVertices = topologicalSort2(graph);

  for (let u of sortedVertices) {
    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (adjacencyMatrix[u][v] === 1) {
        if (dist[v] < dist[u] + weights[`${u},${v}`]) {
          dist[v] = dist[u] + weights[`${u},${v}`];
        }
      }
    }
  }

  return dist;
};

module.exports = getLongestPathForDAG;
