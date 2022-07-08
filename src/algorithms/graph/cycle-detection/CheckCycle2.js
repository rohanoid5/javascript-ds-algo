const dfs = function (graph, u, marked, inStack) {
  marked[u] = true;
  inStack[u] = true;

  for (let v = 0; v < graph[u].length; v++) {
    if (graph[u][v] === 1) {
      if (!(v in marked)) {
        if (dfs(graph, v, marked, inStack)) return true;
      } else {
        if (v in inStack && inStack[v]) return true;
      }
    }
  }

  inStack[u] = false;
  return false;
};

const hasCycle2 = function (graph) {
  let marked = {};
  let inStack = {};

  for (let i = 0; i < graph.length; i++) {
    if (!(i in marked)) {
      if (dfs(graph, i, marked, inStack)) return true;
    }
  }

  return false;
};

module.exports = hasCycle2;
