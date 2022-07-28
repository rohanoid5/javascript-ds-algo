/**
 * Check whether a string is K-Palindrome or not.
 * A string is K-Palindrome if removing at most K characters make it palindromic.
 *
 * Solution:
 * This problem is similar to Edit Distance https://github.com/rohanoid5/javascript-ds-algo/tree/9280c15f2fd2e028936e6ed823f97d7632bedf17/src/algorithms/dynamic-programming/edit-distance.
 * We have to reverse the original string. After that we can check the minimum number of
 * deletion required to make the string equal. Let's say we delete N characters of original string
 * and N characters from reversed string then 2 * N <= 2 * K if the string is K-Palindromic
 */
const isKPalindromic = function (str, k) {
  let reverse = str.split("").reverse().join("");
  let m = str.length;
  let table = new Array(m + 1).fill().map(() => new Array(m + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    table[i][0] = i;
    table[0][i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= m; j++) {
      if (str[i - 1] === reverse[j - 1]) {
        table[i][j] = table[i - 1][j - 1];
      } else {
        table[i][j] = Math.min(table[i][j - 1], table[i - 1][j]) + 1;
      }
    }
  }

  return table[m][m] <= 2 * k;
};

module.exports = isKPalindromic;
