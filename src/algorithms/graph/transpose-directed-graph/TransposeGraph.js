const Graph = require("../../../data-structures/graph/Graph");

const transposeDirectedGraph = function (graph) {
  let { nodes, adjacencyList } = graph;
  const transpose = new Graph(true);
  transpose.addNodesFrom(Array.from(graph.nodes));

  for (let u of Array.from(nodes)) {
    if (u in adjacencyList) {
      Array.from(adjacencyList[u]).forEach((v) => {
        transpose.addEdge(v, u);
      });
    }
  }

  return transpose;
};

module.exports = transposeDirectedGraph;
