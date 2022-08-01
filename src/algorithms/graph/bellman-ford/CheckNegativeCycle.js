const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");
/**
 * Solution: Bellman Ford T = O(VE) V = number of Vertex, E = number of Edges
 * 1. Create an array of distance from source or first node
 * 2. Mark each node's distance as INT.MAX except for first node which is set to 0
 * 3. Iterate over V - 1 nodes, except for first
 * 4. For each node check all adjacent nodes with edges
 * 5. If adjacent node has distance greater than current node's distance + edge weight between the two node
 * Update the adjacent node with the current node's distance + edge weight between the two node
 * 6. Iterate over all edges, if there's an edge between two nodes where destination node's distance is greater than
 * source node's distance plus edge weight then the graph has negative cycle
 * 7. Else the graph doesn't have negative edge
 * Given a Weighted Graph, check whether it has negative edge cycles
 * @param {WeightedGraphWithAdjacencyMatrix} graph
 * @returns boolean
 */

const hasNegativeCycle = function (graph) {
  const { adjacencyMatrix, weights } = graph;
  const edges = [];
  const dist = [];

  for (let u = 0; u < adjacencyMatrix.length; u++) {
    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (adjacencyMatrix[u][v]) {
        edges.push({
          src: u,
          dest: v,
          weight: weights[`${u},${v}`],
        });
      }
    }
  }

  for (let i = 0; i < adjacencyMatrix.length; i++) {
    dist[i] = Number.MAX_SAFE_INTEGER;
  }
  dist[0] = 0;

  for (let i = 1; i <= adjacencyMatrix.length - 1; i++) {
    for (let j = 0; j < edges.length; j++) {
      const { src: u, dest: v, weight: w } = edges[j];

      if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
      }
    }
  }

  for (let i = 0; i < edges.length; i++) {
    const { src: u, dest: v, weight: w } = edges[i];

    if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[v] > dist[u] + w) {
      return true;
    }
  }

  return false;
};

module.exports = hasNegativeCycle;
