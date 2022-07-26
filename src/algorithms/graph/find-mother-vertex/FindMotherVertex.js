/**
 * Find a Mother Vertex in a Graph
 * A Mother Vertex is a vertex in a Graph from which every other vertex is reachable.
 *
 * Solution:
 * (NAIVE)
 * For every node do a DFS and check if all other nodes are visited or not.
 * Time Complexity is O(V(V + E))
 *
 * (Kosaraju's Strongly Connected Component Algorithm)
 * If v is a vertex which is finished last in DFS then v is a mother vertex and there can
 * not be a u where u -> v and u is non-mother vertex.
 *
 * 1. We will do DFS for all the vertices in the Graph and keep track of the vertex
 * which finishes last.
 * 2. We will again do DFS and start with the last finished vertex and see if it can visit
 * all other vertices or not.
 */
const findMotherVertex = function (graph) {
  let visited = {};
  let { adjacencyMatrix } = graph;
  let lastFinishedVertex = -1;

  for (let u = 0; u < adjacencyMatrix.length; u++) {
    if (!(u in visited)) {
      dfs(adjacencyMatrix, u, visited);
      lastFinishedVertex = u;
    }
  }

  visited = {};
  dfs(adjacencyMatrix, lastFinishedVertex, visited);

  for (let u = 0; u < adjacencyMatrix.length; u++) {
    if (u === lastFinishedVertex) continue;
    if (!(u in visited)) return -1;
  }

  return lastFinishedVertex;
};

const dfs = function (adjacencyMatrix, u, visited) {
  visited[u] = true;

  for (let v = 0; v < adjacencyMatrix[u].length; v++) {
    if (adjacencyMatrix[u][v]) {
      if (!(v in visited)) dfs(adjacencyMatrix, v, visited);
    }
  }
};

module.exports = findMotherVertex;
