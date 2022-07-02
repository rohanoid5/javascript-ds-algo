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
