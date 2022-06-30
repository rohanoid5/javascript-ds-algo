const dfs = function (graph, src, dest, marked, pathCount) {
  const { adjacencyList } = graph;
  marked[src] = true;

  if (adjacencyList[src]) {
    for (let v of Array.from(adjacencyList[src])) {
      if (v === dest) {
        pathCount.value += 1;
      } else if (!(v in marked)) {
        dfs(graph, v, dest, marked, pathCount);
      }
    }
  }

  marked[src] = false;
};

const countPathBetweenVertices = function (graph, src, dest) {
  if (!graph.nodes.has(src) || !graph.nodes.has(dest)) {
    throw new Error(
      "Either Source or Destination or both vertex is/are absent in the graph"
    );
  }

  let marked = {};
  let pathCount = { value: 0 };

  dfs(graph, src, dest, marked, pathCount);
  return pathCount.value;
};

module.exports = countPathBetweenVertices;
