class Graph {
  constructor(isDirected = false) {
    this.nodes = new Set();
    this.adjacencyList = {};
    this.isDirected = isDirected;
  }

  addNode(name) {
    this.nodes.add(name);
  }

  addNodesFrom(names) {
    names.forEach((name) => {
      this.addNode(name);
    });
  }

  addEdge(src, dest) {
    if (!this.nodes.has(src) || !this.nodes.has(dest)) {
      throw new Error(
        "Either source or destination node or both are absent in the graph"
      );
    }

    if (!(src in this.adjacencyList)) {
      this.adjacencyList[src] = new Set();
    }
    this.adjacencyList[src].add(dest);

    if (!this.isDirected) {
      if (!(dest in this.adjacencyList)) {
        this.adjacencyList[dest] = new Set();
      }
      this.adjacencyList[dest].add(src);
    }
  }

  addEdgesFrom(nodePairs) {
    try {
      nodePairs.forEach((nodePair) => {
        let src = nodePair[0];
        let dest = nodePair[1];

        this.addEdge(src, dest);
      });
    } catch (error) {
      throw new Error("Edge creation was unsuccessful");
    }
  }

  removeEdge(src, dest) {
    if (!this.nodes.has(src) || !this.nodes.has(dest)) {
      throw new Error(
        "Either source or destination node or both are absent in the graph"
      );
    }

    this.adjacencyList[src].delete(dest);
    this.adjacencyList[dest].delete(src);
  }
}

module.exports = Graph;
