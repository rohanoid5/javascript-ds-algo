/**
 * Find the number of islands
 * Given a boolean 2D matrix,
 * find the number of islands. A group of connected 1s forms an island.
 *
 * Solution(BFS): T = O(N * M) where N is number of rows and M is number of columns
 * 1. We maintain a Queue and a Set
 * 2. We will use the Queue to track of a node's neighbors
 * 3. We will use the Set to keep track of all the nodes already visited
 * 4. For each 1s we encounter we will check it's neighbors and if there are
 * 1s we will mark it as visited and enqueue the neighbor
 * 5. We will traverse through all the node and keep incrementing our counter
 * as long as we find 1s which are not visited already.
 * 6. Finally counter will be the count of Islands
 */
const numberOfIslands = function (islands) {
  let rows = islands.length;
  let cols = islands[0].length;
  let count = 0;
  let visited = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (islands[i][j] === 1 && !visited.has(`${i},${j}`)) {
        bfs(islands, i, j, visited, rows, cols);
        count += 1;
      }
    }
  }

  return count;
};

const bfs = function (islands, i, j, visited, rows, cols) {
  let queue = [];
  queue.push([i, j]);
  visited.add(`${i},${j}`);
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length > 0) {
    let [currRow, currCol] = queue.shift();
    for (let dir of dirs) {
      let newRow = currRow + dir[0];
      let newCol = currCol + dir[1];

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        islands[newRow][newCol] &&
        !visited.has(`${newRow},${newCol}`)
      ) {
        queue.push([newRow, newCol]);
        visited.add(`${newRow},${newCol}`);
      }
    }
  }
};

module.exports = numberOfIslands;
