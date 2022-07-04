const GraphWithAdjacencyMatrix = require("../../../data-structures/graph/GraphWithAdjacencyMatrix");
/**
 * Shortest path in an unweighted graph
 * Given an unweighted graph, and a source,
 * we need to find the shortest path from source to any vertex in the graph in the most optimal way.
 * @param {GraphWithAdjacencyMatrix} graph
 * @param {number} source
 * @returns {Array<number>}
 */
const findShortestPathInUnweightedGraph = function (graph, source) {
  const { adjacencyMatrix } = graph;
  const dist = new Array(adjacencyMatrix.length).fill(Number.MAX_SAFE_INTEGER);
  const visited = {};

  dist[source] = 0;

  bfs(adjacencyMatrix, dist, source, visited);

  return dist;
};

const bfs = function (adjacencyMatrix, dist, src, visited) {
  visited[src] = true;
  let queue = [];
  queue.push(src);

  while (queue.length > 0) {
    let u = queue.shift();
    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (adjacencyMatrix[u][v] === 1 && !visited[v] && dist[v] > dist[u] + 1) {
        dist[v] = dist[u] + 1;
        queue.push(v);
      }
    }
  }
};

module.exports = findShortestPathInUnweightedGraph;
