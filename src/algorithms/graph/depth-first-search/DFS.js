const StackUsingArray = require("../../../data-structures/stack/StackUsingArray");

const depthFirstSearch = function (graph, src) {
  const marked = {};
  const nodeFrom = {};
  const stack = new StackUsingArray();

  stack.push(src);

  while (!stack.isEmpty()) {
    let v = stack.pop();

    for (let w of Array.from(graph.adjacencyList[v])) {
      if (!(w in marked)) {
        nodeFrom[w] = v;
        marked[w] = true;
        stack.push(w);
      }
    }
  }

  return nodeFrom;
};

const pathTo = function (nodeFrom, src, dest) {
  if (!(dest in nodeFrom)) {
    throw new Error("Destination node can't be reaced from source");
  }

  let v = dest;
  let path = [];

  while (v !== src) {
    path.push(v);
    v = nodeFrom[v];
  }

  path.push(src);
  return path.reverse();
};

module.exports = {
  depthFirstSearch,
  pathTo,
};
