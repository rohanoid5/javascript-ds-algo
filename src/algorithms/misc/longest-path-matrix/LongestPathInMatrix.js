const longestIncreasingPath = function (matrix) {
  let maxPathMap = {};
  let rows = matrix.length;
  let cols = matrix[0].length;
  let max = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dfs(matrix, i, j, maxPathMap, Number.MIN_SAFE_INTEGER);
    }
  }

  for (let key in maxPathMap) {
    if (maxPathMap[key] > max) max = maxPathMap[key];
  }

  return max;
};

const dfs = function (matrix, i, j, maxPathMap, prevVal) {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[0].length ||
    prevVal >= matrix[i][j]
  )
    return 0;

  let key = `${i},${j}`;
  if (key in maxPathMap) return maxPathMap[key];

  let res = Math.max(
    1,
    dfs(matrix, i + 1, j, maxPathMap, matrix[i][j]) + 1,
    dfs(matrix, i, j + 1, maxPathMap, matrix[i][j]) + 1,
    dfs(matrix, i - 1, j, maxPathMap, matrix[i][j]) + 1,
    dfs(matrix, i, j - 1, maxPathMap, matrix[i][j]) + 1
  );

  maxPathMap[key] = res;
  return res;
};

module.exports = longestIncreasingPath;
