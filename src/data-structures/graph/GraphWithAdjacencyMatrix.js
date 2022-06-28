class GraphWithAdjacencyMatrix {
  constructor(size, isDirected = false) {
    this.size = size;
    this.isDirected = isDirected;
    this.adjacencyMatrix = new Array(size)
      .fill(null)
      .map(() => new Array(size).fill(0));
  }

  addEdge(u, v) {
    if (u >= this.size || v >= this.size) {
      throw new Error(
        "Source or Destination Vertex are outside the Graph bounds"
      );
    }

    this.adjacencyMatrix[u][v] = 1;

    if (!this.isDirected) this.adjacencyMatrix[v][u] = 1;
  }

  removeEdge(u, v) {
    if (u >= this.size || v >= this.size) {
      throw new Error(
        "Source or Destination Vertex are outside the Graph bounds"
      );
    }

    this.adjacencyMatrix[u][v] = 0;

    if (!this.isDirected) this.adjacencyMatrix[v][u] = 0;
  }
}

module.exports = GraphWithAdjacencyMatrix;
