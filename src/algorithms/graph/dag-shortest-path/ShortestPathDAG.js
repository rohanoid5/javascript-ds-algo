const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");
const topologicalSort2 = require("../topological-sort/TopologicalSort2");

/**
 * Given a Weighted Directed Acyclic Graph and a source vertex in the graph,
 * find the shortest paths from given source to all other vertices.
 * @param {WeightedGraphWithAdjacencyMatrix} graph
 * @param {number} source
 * @returns {Array<number>}
 */
const getShortestPathForDAG = function (graph, source) {
  const { adjacencyMatrix, weights } = graph;
  const dist = new Array(adjacencyMatrix[0].length)
    .fill(null)
    .map((_) => Number.MAX_SAFE_INTEGER);
  dist[source] = 0;

  const topologicallySorted = topologicalSort2(graph);
  for (let u of topologicallySorted) {
    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (adjacencyMatrix[u][v] === 1) {
        if (
          dist[u] !== Number.MAX_SAFE_INTEGER &&
          dist[v] > dist[u] + weights[`${u},${v}`]
        ) {
          dist[v] = dist[u] + weights[`${u},${v}`];
        }
      }
    }
  }

  return dist;
};

module.exports = getShortestPathForDAG;
