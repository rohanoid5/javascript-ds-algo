const dfs = function (graph, node, marked, inStack) {
  marked[node] = true;
  inStack[node] = true;

  if (graph.adjacencyList[node]) {
    for (let w of Array.from(graph.adjacencyList[node])) {
      if (!(w in marked)) {
        if (dfs(graph, w, marked, inStack)) return true;
      } else {
        if (w in inStack && inStack[w]) return true;
      }
    }
  }

  inStack[node] = false;
  return false;
};

const hasCycle = function (graph) {
  let marked = {};
  let inStack = {};

  let { nodes } = graph;

  for (let node of Array.from(nodes)) {
    if (!(node in marked)) {
      if (dfs(graph, node, marked, inStack)) return true;
    }
  }

  return false;
};

module.exports = hasCycle;
