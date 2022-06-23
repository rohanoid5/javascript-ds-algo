const breadthFirstSearch = function (graph, src) {
  const nodeFrom = {};
  const marked = {};
  const queue = [];

  queue.push(src);
  while (queue.length > 0) {
    let v = queue.shift();

    for (let w of Array.from(graph.adjacencyList[v])) {
      if (!(w in marked)) {
        marked[w] = true;
        nodeFrom[w] = v;
        queue.push(w);
      }
    }
  }

  return nodeFrom;
};

module.exports = breadthFirstSearch;
