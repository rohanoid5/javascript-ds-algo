const GraphWithAdjacencyMatrix = require("../../../data-structures/graph/GraphWithAdjacencyMatrix");

/**
 * Maximum edges that can be added to DAG so that it remains DAG
 * @param {GraphWithAdjacencyMatrix} graph
 * @returns {Array}
 */
const maximumEdgeAdditionInDAG = function (graph) {
  const addedEdges = [];
  const { adjacencyMatrix } = graph;
  const visited = new Array(adjacencyMatrix.length).fill(false);

  const sortedNodes = topologicalSort(adjacencyMatrix);

  for (let u = 0; u < sortedNodes.length; u++) {
    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (adjacencyMatrix[sortedNodes[u]][v] === 1) {
        visited[v] = true;
      }
    }

    for (let v = u + 1; v < sortedNodes.length; v++) {
      if (!visited[sortedNodes[v]]) {
        addedEdges.push([sortedNodes[u], sortedNodes[v]]);
      }
      visited[sortedNodes[v]] = false;
    }
  }

  return addedEdges;
};

const topologicalSort = function (adjacencyMatrix) {
  const visited = {};
  const postOrder = [];

  for (let u = 0; u < adjacencyMatrix.length; u++) {
    if (!visited[u]) dfs(adjacencyMatrix, visited, postOrder, u);
  }

  return postOrder.reverse();
};

const dfs = function (adjacencyMatrix, visited, postOrder, u) {
  visited[u] = true;

  for (let v = 0; v < adjacencyMatrix[u].length; v++) {
    if (adjacencyMatrix[u][v] === 1 && !visited[v]) {
      dfs(adjacencyMatrix, visited, postOrder, v);
    }
  }

  postOrder.push(u);
};

module.exports = maximumEdgeAdditionInDAG;
