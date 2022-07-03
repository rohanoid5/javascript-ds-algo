const GraphWithAdjacencyMatrix = require("./GraphWithAdjacencyMatrix");

class WeightedGraphWithAdjacencyMatrix extends GraphWithAdjacencyMatrix {
  constructor(size, isDirected = false) {
    super(size, isDirected);
    this.weights = {};
  }

  addEdge(src, dest, weight) {
    try {
      super.addEdge(src, dest);

      this.weights[`${src},${dest}`] = weight;
      if (!this.isDirected) this.weights[`${dest},${src}`] = weight;
    } catch (error) {
      throw new Error(error);
    }
  }

  removeEdge(src, dest) {
    try {
      super.removeEdge(src, dest);

      delete this.weights[`${src},${dest}`];
      if (!this.isDirected) delete this.weights[`${dest},${src}`];
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = WeightedGraphWithAdjacencyMatrix;
