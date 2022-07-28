/**
 * Edit Distance / Levenshtein Distance
 * Given two strings str1 and str2 and below operations that can be performed on str1.
 * Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.
 * 1. Insert
 * 2. Remove
 * 3. Replace
 *
 * Solution:
 * The recurrence relation is something like this:
 * If there are two strings str1 and str2, with lengths of m and n respectively,
 * EditDistance(m, n) gives us the result,
 * We can say if str1[m] === str2[m] then EditDistance(m, n) = EditDistance(m - 1, n - 1)
 * Otherwise, it will be minimum of all 3 operations on str1.
 * EditDistance(m, n) = Min[EditDistance(m - 1, n - 1), EditDistance(m, n - 1), EditDistance(m - 1, n)]
 * 1. Replacement: EditDistance(m - 1, n - 1)
 * 2. Insertion: EditDistance(m, n - 1)
 * 3. Deletion: EditDistance(m - 1, n)
 *
 * Since, there are overlapping sub-problems, we can use a table to get the answer in bottom up manner.
 */
const editDistance = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;
  let table = new Array(m + 1).fill(null).map((_) => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    table[i][0] = i;
  }

  for (let i = 0; i <= n; i++) {
    table[0][i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        table[i][j] = table[i - 1][j - 1];
      } else {
        table[i][j] =
          Math.min(table[i - 1][j], table[i][j - 1], table[i - 1][j - 1]) + 1;
      }
    }
  }

  return table[m][n];
};

module.exports = editDistance;
