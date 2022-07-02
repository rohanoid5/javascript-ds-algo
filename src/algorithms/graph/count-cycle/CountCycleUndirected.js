/**
 * Cycles of length n in an undirected and connected graph
 *
 * Given an undirected and connected graph and a number n, count total number of cycles of length n in the graph.
 * A cycle of length n simply means that the cycle contains n vertices and n edges.
 * And we have to count all such cycles that exist.
 */
const countCyclesInUndirectedGraph = function (graph, n) {
  const count = { value: 0 };
  const { adjacencyMatrix } = graph;
  if (adjacencyMatrix.length === 0) return 0;

  const V = adjacencyMatrix[0].length;
  const marked = new Array(V).fill(false);

  for (let i = 0; i < V - (n - 1); i++) {
    dfs(adjacencyMatrix, n - 1, i, i, count, marked);

    marked[i] = true;
  }

  return parseInt(count.value / 2);
};

const dfs = function (adjacencyMatrix, n, vert, start, count, marked) {
  marked[vert] = true;
  if (n === 0) {
    marked[vert] = false;

    if (adjacencyMatrix[vert][start] === 1) {
      count.value += 1;
      return;
    } else {
      return;
    }
  }

  for (let i = 0; i < adjacencyMatrix[0].length; i++) {
    if (!marked[i] && adjacencyMatrix[vert][i] === 1) {
      dfs(adjacencyMatrix, n - 1, i, start, count, marked);
    }
  }

  marked[vert] = false;
};

module.exports = countCyclesInUndirectedGraph;
