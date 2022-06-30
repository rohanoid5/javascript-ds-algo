const Graph = require("./Graph");

class WeightedGraph extends Graph {
  constructor(isDirected = false) {
    super(isDirected);
    this.weights = {};
  }

  addEdge(src, dest, weight) {
    try {
      super.addEdge(src, dest);
      this.weights[`${src},${dest}`] = weight;
    } catch (error) {
      throw new Error(error);
    }
  }

  addEdgesFrom(nodePairs) {
    try {
      nodePairs.forEach((nodePair) => {
        let [src, dest, weight] = nodePair;

        this.addEdge(src, dest, weight);
      });
    } catch (error) {
      throw new Error("Edge creation was unsuccessful");
    }
  }

  removeEdge(src, dest) {
    try {
      super.removeEdge(src, dest);
      delete this.weights[`${src},${dest}`];
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = WeightedGraph;
