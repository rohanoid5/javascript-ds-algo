const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");

/**
 * Find minimum weight cycle in an undirected graph
 * Given a positive weighted undirected graph, find the minimum weight cycle in it.
 * @param {WeightedGraphWithAdjacencyMatrix} graph
 * @returns {number}
 */

const findMinWeightCycleInUndirectedGraph = function (graph) {
  let minWeight = Number.MAX_SAFE_INTEGER;
  const { adjacencyMatrix, weights } = graph;

  for (let u = 0; u < adjacencyMatrix.length; u++) {
    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (adjacencyMatrix[u][v] === 1) {
        const weight = weights[`${u},${v}`];
        graph.removeEdge(u, v);
        const shortestPath = findShortestPath(graph, u, v);

        minWeight = Math.min(minWeight, shortestPath + weight);
        graph.addEdge(u, v, weight);
      }
    }
  }

  return minWeight;
};

const findMinIdx = function (dist, sptSet) {
  let min = Number.MAX_SAFE_INTEGER;
  let minIdx = -1;

  for (let i = 0; i < dist.length; i++) {
    if (!sptSet[i] && min >= dist[i]) {
      min = dist[i];
      minIdx = i;
    }
  }

  return minIdx;
};

const findShortestPath = function (graph, src, dest) {
  const { adjacencyMatrix, weights } = graph;
  const dist = [];
  const sptSet = [];

  for (let i = 0; i < adjacencyMatrix.length; i++) {
    dist.push(Number.MAX_SAFE_INTEGER);
    sptSet.push(false);
  }
  dist[src] = 0;

  for (let i = 0; i < adjacencyMatrix.length - 1; i++) {
    let u = findMinIdx(dist, sptSet);
    sptSet[u] = true;

    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (
        adjacencyMatrix[u][v] === 1 &&
        !sptSet[v] &&
        dist[u] !== Number.MAX_SAFE_INTEGER &&
        dist[v] > dist[u] + weights[`${u},${v}`]
      ) {
        dist[v] = dist[u] + weights[`${u},${v}`];
      }
    }
  }

  return dist[dest];
};

module.exports = findMinWeightCycleInUndirectedGraph;
