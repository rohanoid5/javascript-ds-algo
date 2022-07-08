const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");

/**
 * Prim’s Minimum Spanning Tree (MST)
 * @param {WeightedGraphWithAdjacencyMatrix} graph
 * @returns {Array}
 */
const getMinimumSpanningTree = function (graph) {
  const mstSet = new Set();
  const keys = {};
  const parent = {};
  const { adjacencyMatrix, weights } = graph;

  for (let i = 0; i < adjacencyMatrix.length; i++) {
    keys[i] = Number.MAX_SAFE_INTEGER;
  }

  keys[0] = 0;
  parent[0] = -1;

  for (let i = 0; i < adjacencyMatrix.length - 1; i++) {
    let u = getMinVertex(keys, mstSet);
    mstSet.add(u);

    for (let v = 0; v < adjacencyMatrix[u].length; v++) {
      if (
        adjacencyMatrix[u][v] === 1 &&
        !mstSet.has(v) &&
        keys[v] > weights[`${u},${v}`]
      ) {
        keys[v] = weights[`${u},${v}`];
        parent[v] = u;
      }
    }
  }

  return parent;
};

const getMinVertex = function (keys, mstSet) {
  let minVal = Number.MAX_SAFE_INTEGER;
  let minIdx = -1;

  for (let k in keys) {
    if (!mstSet.has(k) && minVal > keys[k]) {
      minVal = keys[k];
      minIdx = k;
    }
  }

  return minIdx;
};

module.exports = getMinimumSpanningTree;
