const bipartiteUtil = function (graph, source) {
  let V = graph.size;

  const colorArr = new Array(V).fill(null).map((_) => -1);
  colorArr[source] = 1;

  let queue = [];
  queue.push(source);

  while (queue.length > 0) {
    let u = queue.shift();

    for (let v = 0; v < V; v++) {
      if (graph[u][v] === 1 && colorArr[v] === -1) {
        queue.push(v);
        colorArr[v] = 1 - colorArr[u];
      } else if (graph[u][v] === 1 && colorArr[v] === colorArr[u]) {
        return false;
      }
    }
  }

  return true;
};

const isGraphBipartite = function (graph) {
  return bipartiteUtil(graph, 0);
};

module.exports = isGraphBipartite;
