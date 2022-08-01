const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");
/**
 * Solution: Floyd Warshall T = O(V^3) V = number of vertices
 * 1. Create a V x V array Dist[][]
 * 2. For each edge between i and j update Dist[i][j] = weight between i and j vertices
 * 3. For cells i = j update Dist as 0
 * 4. For rest of the cells update as INT.MAX
 * 5. Start iterating over all the rows i = 0 to V - 1 and all cols j = 0 to V - 1
 * 6. Take intermediate vertex k for all k = 0 to V - 1
 * 7. If there's an intermediate vertex for which Dist[i][k] + Dist[k][j] < Dist[i][j]
 * 8. Update Dist[i][j] as Dist[i][k] + Dist[k][j]
 * 9. Lastly, run a loop over all the diagonal elements in Dist
 * 10. If Dist[i][i] < 0 exists then the graph has negative cycles
 * Given a Weighted Graph, check whether it has negative edge cycles
 * @param {WeightedGraphWithAdjacencyMatrix} graph
 * @returns boolean
 */

const hasNegativeCycle2 = function (graph) {
  const { adjacencyMatrix, weights } = graph;
  if (adjacencyMatrix.length === 0) return false;

  const V = adjacencyMatrix[0].length;
  const dist = new Array(V).fill(null).map((_) => new Array(V).fill(null));

  for (let i = 0; i < V; i++) {
    for (let j = 0; j < V; j++) {
      if (i !== j && adjacencyMatrix[i][j] === 0) {
        dist[i][j] = Number.MAX_VALUE;
      } else if (i === j) {
        dist[i][j] = 0;
      } else {
        dist[i][j] = weights[`${i},${j}`];
      }
    }
  }

  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  for (let i = 0; i < V; i++) {
    if (dist[i][i] < 0) return true;
  }

  return false;
};

module.exports = hasNegativeCycle2;
