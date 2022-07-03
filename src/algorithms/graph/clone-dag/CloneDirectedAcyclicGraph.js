const GraphWithAdjacencyMatrix = require("../../../data-structures/graph/GraphWithAdjacencyMatrix");

const dfsClone = function (original, clone, u, visited) {
  visited[u] = true;

  for (let v = 0; v < original.adjacencyMatrix.length; v++) {
    if (!visited[v]) {
      if (original.adjacencyMatrix[u][v] === 1) {
        clone.addEdge(u, v);
      }
      dfsClone(original, clone, v, visited);
    }
  }

  visited[u] = false;
};

/**
 * Clone a Directed Acyclic Graph
 */
const cloneDAG = function (graph) {
  const V = graph.adjacencyMatrix.length;
  const clone = new GraphWithAdjacencyMatrix(V, true);
  const visited = {};

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfsClone(graph, clone, i, visited);
    }
  }

  return clone;
};

module.exports = cloneDAG;
