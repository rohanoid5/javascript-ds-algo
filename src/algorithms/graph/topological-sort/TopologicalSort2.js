const GraphWithAdjacencyMatrix = require("../../../data-structures/graph/GraphWithAdjacencyMatrix");
const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");

/**
 * Given a Weighted Graph find the nodes Topologically Sorted
 * @param {WeightedGraphWithAdjacencyMatrix | GraphWithAdjacencyMatrix} graph
 * @returns {Array<number>}
 */
const topologicalSort2 = function (graph) {
  const marked = {};
  const postOrder = [];
  const { adjacencyMatrix } = graph;

  for (let u = 0; u < adjacencyMatrix.length; u++) {
    if (!marked[u]) dfs(adjacencyMatrix, marked, postOrder, u);
  }

  return postOrder.reverse();
};

const dfs = function (adjacencyMatrix, marked, postOrder, u) {
  marked[u] = true;

  for (let v = 0; v < adjacencyMatrix[u].length; v++) {
    if (adjacencyMatrix[u][v] === 1 && !marked[v])
      dfs(adjacencyMatrix, marked, postOrder, v);
  }

  postOrder.push(u);
};

module.exports = topologicalSort2;
