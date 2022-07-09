const WeightedGraphWithAdjacencyMatrix = require("../../../data-structures/graph/WeightedGraphWithAdjacencyMatrix");
const topologicalSort2 = require("../topological-sort/TopologicalSort2");

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
 * @param {number} alpha
 * @return {Array}
 */
const printAlienDictionary = function (words, alpha) {
  const uniqueWords = new Set(words.join("").split(""));
  const uniqueWordCount = uniqueWords.size;
  const graph = new WeightedGraphWithAdjacencyMatrix(uniqueWordCount, true);
  const converter = Array.from(uniqueWords).sort(
    (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  )[0];

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        graph.addEdge(
          word1.charCodeAt(j) - converter.charCodeAt(0),
          word2.charCodeAt(j) - converter.charCodeAt(0)
        );
        break;
      }
    }
  }

  return topologicalSort2(graph).map((v) =>
    String.fromCharCode(v + converter.charCodeAt(0))
  );
};

module.exports = printAlienDictionary;
