/**
 * Dijkstra’s shortest path algorithm
 * Given a graph and a source vertex in the graph,
 * find the shortest paths from the source to all vertices in the given graph.
 * Only works for graph with no negative weight cycles.
 *
 * Solution: T = O(V^2), S = O(V)
 * 1. Create an array of distance (dist) from source and initialize it with INT.MAX
 * 2. Create a set for all the vertices (SptSet)
 * 3. Initialize the SptSet with source and make source distance as 0 in dist
 * 4. Start iterating over all the vertices.
 * 5. Pick the vertex (u) with minimum distance which is not in SptSet
 * 6. Check all the adjacent vertices (v) of that vertex
 * 7. If v is not in SptSet and dist[v] > dist[u] + Weight of Edge between u and v
 * 8. Update dist[v] as dist[u] + Weight of Edge between u and v
 * 9. dist will be the shortest path of all vertices from source
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

module.exports = singleSourceShortestPath;
