const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");

/**
 * Prim’s Minimum Spanning Tree (MST)
 * @param {WeightedGraphWithAdjacencyMatrix} graph
 * @returns {WeightedGraphWithAdjacencyMatrix}
 */
const getMinimumSpanningTree2 = function (graph) {
  const { adjacencyMatrix, weights, size, isDirected } = graph;
  const mstGraph = new WeightedGraphWithAdjacencyMatrix(size, isDirected);

  const edges = [];

  for (let u = 0; u < adjacencyMatrix.length; u++) {
    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (adjacencyMatrix[u][v] === 1) {
        edges.push({ src: u, dest: v, weight: weights[`${u},${v}`] });
      }
    }
  }

  edges.sort((a, b) => a.weight - b.weight);

  for (let i = 0; i < size - 1; i++) {
    const { src, dest, weight } = edges[i];
    mstGraph.addEdge(src, dest, weight);

    if (hasCycle(mstGraph)) {
      mstGraph.removeEdge(src, dest);
    }
  }

  return mstGraph;
};

const hasCycle = function (adjacencyMatrix) {
  const inStack = {};
  const marked = {};

  for (let u = 0; u < adjacencyMatrix.length; u++) {
    if (!marked[u] && dfs(adjacencyMatrix, inStack, marked, u)) {
      return true;
    }
  }

  return false;
};

const dfs = function (adjacencyMatrix, inStack, marked, u) {
  inStack[u] = true;
  marked[u] = true;

  for (let v = 0; v < adjacencyMatrix[u].length; v++) {
    if (!marked[v]) {
      if (dfs(adjacencyMatrix, inStack, marked, v)) return true;
    } else {
      if (v in inStack && inStack[v]) return true;
    }
  }

  inStack[u] = false;
  return false;
};

module.exports = getMinimumSpanningTree2;
