const findMinDistance = function (dist, sptSet) {
  let min = Number.MAX_SAFE_INTEGER;
  let minIdx = -1;

  for (let i = 0; i < dist.length; i++) {
    if (!sptSet[i] && dist[i] <= min) {
      min = dist[i];
      minIdx = i;
    }
  }

  return minIdx;
};

/**
 * Dijkstra’s shortest path algorithm
 * Given a graph and a source vertex in the graph,
 * find the shortest paths from the source to all vertices in the given graph.
 */
const singleSourceShortestPath = function (graph, source) {
  const { adjacencyMatrix, weights } = graph;
  const dist = [];
  const sptSet = [];

  adjacencyMatrix.forEach((_, idx) => {
    dist[idx] = Number.MAX_SAFE_INTEGER;
    sptSet[idx] = false;
  });
  dist[source] = 0;

  for (let i = 0; i < adjacencyMatrix.length - 1; i++) {
    let u = findMinDistance(dist, sptSet);
    sptSet[u] = true;

    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (
        !sptSet[v] &&
        adjacencyMatrix[u][v] === 1 &&
        dist[u] !== Number.MAX_SAFE_INTEGER &&
        dist[v] > dist[u] + weights[`${u},${v}`]
      ) {
        dist[v] = dist[u] + weights[`${u},${v}`];
      }
    }
  }

  return dist;
};

module.exports = singleSourceShortestPath;
