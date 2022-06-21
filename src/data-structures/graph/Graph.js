class Graph {
  constructor() {
    this.nodes = new Set();
    this.adjacencyList = {};
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

    if (!(dest in this.adjacencyList)) {
      this.adjacencyList[dest] = new Set();
    }
    this.adjacencyList[dest].add(src);
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
}

module.exports = Graph;
