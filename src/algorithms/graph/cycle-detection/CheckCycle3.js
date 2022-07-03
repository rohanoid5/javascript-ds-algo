const WHITE = "WHITE";
const BLACK = "BLACK";
const GREY = "GREY";

const dfs = function (adjacentMatrix, u, colorArr) {
  colorArr[u] = GREY;

  for (let v = 0; v < adjacentMatrix[u].length; v++) {
    if (adjacentMatrix[u][v] === 1) {
      if (colorArr[v] === GREY) return true;
      else {
        if (colorArr[v] === WHITE && dfs(adjacentMatrix, v, colorArr))
          return true;
      }
    }
  }

  colorArr[u] = BLACK;
  return false;
};

/**
 * Detect Cycle in a directed graph using colors
 */

const hasCycle3 = function (adjacentMatrix) {
  if (adjacentMatrix.length === 0) return false;

  const colorArr = [];
  adjacentMatrix.forEach((_) => {
    colorArr.push(WHITE);
  });

  for (let i = 0; i < adjacentMatrix.length; i++) {
    if (colorArr[i] === WHITE)
      if (dfs(adjacentMatrix, i, colorArr)) return true;
  }

  return false;
};

module.exports = hasCycle3;
