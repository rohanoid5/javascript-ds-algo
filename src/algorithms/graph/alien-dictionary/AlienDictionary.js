/**
 * Given a sorted dictionary of an alien language, find order of characters
 * Input:  words[] = {"baa", "abcd", "abca", "cab", "cad"}
 * Output: Order of characters is 'b', 'd', 'a', 'c'
 *
 * Solution:
 * 1. Create a Graph of size Min(Words)
 * 2. Iterate through each of the adjacent pairs
 * 3. Check each character of the pairs
 * 4. If there's a mismatch add an edge from 1 character to another, break the loop
 * 5. Repeat steps 2 - 4 for each adjacent pairs
 * 6. Topologically sort the vertices
 *
 * @param {Array} words
 * @return {Array}
 */
const printAlienDictionary = function (words) {
  const uniqueChars = new Set(words.join("").split(""));
  const uniqueCharsMap = {};
  const uniqueNodesMap = {};
  let idx = 0;

  for (let char of Array.from(uniqueChars)) {
    if (char in uniqueCharsMap) continue;

    uniqueCharsMap[char] = idx;
    uniqueNodesMap[idx] = char;
    idx += 1;
  }

  const graph = new Array(Object.keys(uniqueCharsMap).length)
    .fill(null)
    .map(() => new Array(Object.keys(uniqueCharsMap).length).fill(0));

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        let u = uniqueCharsMap[word1[j]];
        let v = uniqueCharsMap[word2[j]];
        graph[u][v] = 1;
        break;
      }
    }
  }

  const sortedNodes = topologicalSort(graph);
  let res = "";

  for (let node of sortedNodes) {
    res += uniqueNodesMap[node];
  }

  return res;
};

const topologicalSort = function (graph) {
  let visited = new Set();
  let inStack = {};
  let postOrder = [];
  let isImpossible = { value: false };

  for (let u = 0; u < graph.length; u++) {
    if (!visited.has(u)) {
      dfs(graph, u, visited, inStack, postOrder, isImpossible);
    }
  }

  return postOrder.reverse();
};

const dfs = function (graph, u, visited, inStack, postOrder, isImpossible) {
  visited.add(u);
  inStack[u] = true;

  for (let v = 0; v < graph.length; v++) {
    if (graph[u][v] === 1) {
      if (!visited.has(v)) {
        dfs(graph, v, visited, inStack, postOrder, isImpossible);
      } else if (v in inStack && inStack[v]) {
        isImpossible.value = false;
      }
    }
  }

  inStack[u] = false;
  postOrder.push(u);
};

module.exports = printAlienDictionary;
