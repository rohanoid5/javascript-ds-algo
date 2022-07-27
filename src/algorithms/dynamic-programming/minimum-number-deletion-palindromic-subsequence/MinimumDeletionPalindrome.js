/**
 * Minimum number of deletions to make a string palindrome
 * Given a string of size 'n'. The task is to remove or delete the minimum number of characters
 * from the string so that the resultant string is a palindrome.
 *
 * Solution:
 * 1. Let's say Str[0...N - 1] is the string
 * 2. LPS(N, i, j) gives us the result where i is the starting index and j is the ending index of palindromic subsequence
 * 3. If Str[i] === Str[j] then LPS(N, i, j) = LPS(N, i + 1, j - 1) + 2
 * 4. Else LPS(N, i, j) = Max(LPS(N, i + 1, j), LPS(N, i, j - 1))
 * 5. Now, N - LPS(N, i, j) will give us the result
 */
const minimumDeletionForPalindrome = function (str) {
  const len = str.length;
  const table = new Array(len).fill(null).map((_) => new Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    table[i][i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (str[i] === str[j]) {
        table[i][j] = table[i - 1][j + 1] + 2;
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j + 1]);
      }
    }
  }

  return len - table[len - 1][0];
};

module.exports = minimumDeletionForPalindrome;
