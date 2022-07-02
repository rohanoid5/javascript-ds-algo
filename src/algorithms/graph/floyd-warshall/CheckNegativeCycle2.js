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

  console.log(dist);

  for (let i = 0; i < V; i++) {
    if (dist[i][i] < 0) return true;
  }

  return false;
};

module.exports = hasNegativeCycle2;
