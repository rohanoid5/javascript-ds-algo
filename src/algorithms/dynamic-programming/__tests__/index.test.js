const findUglyNumber = require("../ugly-numbers/UglyNumbers");
const getBellNumber = require("../bell-numbers/BellNumbers");
const countCoinChange = require("../coin-change/CoinChange");
const isSubsetSum = require("../subset-sum/SubsetSum");
const maxValRodCutting = require("../rod-cutting/RodCutting");
const LCS = require("../longest-common-subsequence/LCS");

describe("Ugly Numbers", () => {
  it("should return the nth ugly number from the sequence", () => {
    expect(findUglyNumber(7)).toBe(8);
    expect(findUglyNumber(11)).toBe(15);
    expect(findUglyNumber(15)).toBe(24);
    expect(findUglyNumber(150)).toBe(5832);
  });
});

describe("Bell Numbers", () => {
  it("should return the number of ways to partition N unique numbers", () => {
    expect(getBellNumber(3)).toBe(5);
    expect(getBellNumber(4)).toBe(15);
    expect(getBellNumber(5)).toBe(52);
  });
});

describe("Coin Change", () => {
  it("should return the number of possible set given a number and a set of coins", () => {
    expect(countCoinChange(4, [1, 2, 3])).toBe(4);
    expect(countCoinChange(10, [2, 5, 3, 6])).toBe(5);
  });
});

describe("Subset Sum", () => {
  it("should return true/false if a number can be summed up using a subset of numbers", () => {
    expect(isSubsetSum(9, [3, 34, 4, 12, 5, 2])).toBe(true);
    expect(isSubsetSum(5, [3, 4, 2, 1])).toBe(true);
  });
});

describe("Rod Cutting", () => {
  it("should return the max value", () => {
    expect(maxValRodCutting(8, [1, 5, 8, 9, 10, 17, 17, 20])).toBe(22);
    expect(maxValRodCutting(8, [3, 5, 8, 9, 10, 17, 17, 20])).toBe(24);
  });
});

describe("Longest Common Subsequence", () => {
  it("should return the length of LCS of two strings", () => {
    expect(LCS("AGGTAB", "GXTXAYB")).toBe(4);
    expect(LCS("ABCDGH", "AEDFHR")).toBe(3);
    expect(LCS("AXYT", "AYZX")).toBe(2);
  });
});
