const GraphWithAdjacencyMatrix = require("../../../data-structures/graph/GraphWithAdjacencyMatrix");

/**
 * Find the ordering of tasks from given dependencies
 * There are a total of n tasks you have to pick, labeled from 0 to n-1.
 * Some tasks may have prerequisites tasks, for example to pick task 0
 * you have to first finish tasks 1, which is expressed as a pair: [0, 1]
 * Given the total number of tasks and a list of prerequisite pairs,
 * return the ordering of tasks you should pick to finish all tasks.
 *
 * Solution:
 * 1. Create Directed Graph of n Size
 * 2. Iterate through all the pairs
 * 3. If task u is prerequisite of v then add edge from u to v
 * 4. Repeat step 3 until all pairs are processed
 * 5. Topologically sort the graph
 *
 * @param {number[]} tasks
 * @param {number} n
 * @returns {number[]}
 */
const scheduleTasks = function (tasks, n) {
  const graph = new GraphWithAdjacencyMatrix(n, true);

  for (let task of tasks) {
    const [current, prerequisite] = task;
    graph.addEdge(prerequisite, current);
  }

  return topologicalSort(graph);
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

const topologicalSort = function (graph) {
  const visited = {};
  const postOrder = [];
  const { adjacencyMatrix } = graph;

  for (let u = 0; u < adjacencyMatrix.length; u++) {
    if (!visited[u]) {
      dfs(adjacencyMatrix, visited, postOrder, u);
    }
  }

  return postOrder.reverse();
};

module.exports = scheduleTasks;
