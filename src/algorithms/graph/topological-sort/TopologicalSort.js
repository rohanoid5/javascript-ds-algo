const dfs = function (graph, node, marked, postOrder) {
  marked[node] = true;

  if (graph.adjacencyList[node]) {
    for (let w of Array.from(graph.adjacencyList[node])) {
      if (!(w in marked)) dfs(graph, w, marked, postOrder);
    }
  }

  postOrder.push(node);
};

const topologicalSort = function (graph) {
  let marked = {};
  let postOrder = [];

  let { nodes } = graph;
  for (let node of nodes) {
    if (!(node in marked)) dfs(graph, node, marked, postOrder);
  }

  return postOrder.reverse();
};

module.exports = topologicalSort;
