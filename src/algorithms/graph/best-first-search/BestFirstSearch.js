const MinHeap = require("../../../data-structures/heap/MinHeap");

const bestFirstSearch = function (graph, src, dest) {
  const { nodes, adjacencyList, weights } = graph;
  let marked = {};
  let bestPath = [];

  if (!nodes.has(src) || !nodes.has(dest)) {
    throw new Error(
      "Either source or destination node or both are absent in the graph"
    );
  }

  let minHeap = new MinHeap(nodes.size);
  minHeap.enqueue(src, 0);

  while (minHeap.N > 0) {
    let { value: u } = minHeap.dequeue();

    bestPath.push(u);
    if (u === dest) break;

    if (u in adjacencyList) {
      for (let v of Array.from(adjacencyList[u])) {
        if (!(v in marked)) {
          marked[v] = true;
          minHeap.enqueue(v, weights[`${u},${v}`]);
        }
      }
    }
  }

  return bestPath;
};

module.exports = bestFirstSearch;
