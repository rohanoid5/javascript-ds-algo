const findUglyNumber = require("../ugly-numbers/UglyNumbers");
const getBellNumber = require("../bell-numbers/BellNumbers");
const countCoinChange = require("../coin-change/CoinChange");
const isSubsetSum = require("../subset-sum/SubsetSum");
const maxValRodCutting = require("../rod-cutting/RodCutting");
const LCS = require("../longest-common-subsequence/LCS");
const minCostPath = require("../min-cost-path/MinCostPath");
const LCS2 = require("../longest-common-substring/LCS2");
const countStairs = require("../count-stairs/CountStairs");
const knapsack = require("../knapsack-0-1/KnapsackDP");
const eggDropping = require("../egg-dropping/EggDropping");
const LIC = require("../longest-increasing-subsequence/LIC");
const partitionSum = require("../partition-problem/PartitionProblem");
const LPS = require("../longest-palindromic-subsequence/LPS");
const { LAS, LAS2 } = require("../longest-alternating-subsequence/LAS");
const {
  Job,
  findMaxWeight,
} = require("../weighted-job-schedule/WeightedJobSchedule");

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

describe("Min Cost Path", () => {
  it("should return the minimum cost path between origin to another co-ordinate", () => {
    expect(
      minCostPath([
        [1, 2, 3],
        [4, 8, 2],
        [1, 5, 3],
      ])
    ).toBe(8);
  });
});

describe("Longest Common Substring", () => {
  it("should return longest common substring between 2 strings", () => {
    expect(LCS2("GeeksforGeeks", "GeeksQuiz")).toBe(5);
  });
});

describe("Count Stairs", () => {
  it("should return the number of ways to reach the nth stairs", () => {
    expect(countStairs(4)).toBe(7);
    expect(countStairs(3)).toBe(4);
  });
});

describe("0-1 Knapsack", () => {
  it("should return the maximum value of the knapsack", () => {
    expect(knapsack([10, 20, 30], [60, 100, 120], 50)).toBe(220);
  });
});

describe("Egg Dropping", () => {
  it("should return the maximum trials required in worst case for n eggs and k floors", () => {
    expect(eggDropping(2, 36)).toBe(8);
    expect(eggDropping(2, 10)).toBe(4);
  });
});

describe("Longest Increasing Subsequence", () => {
  it("should return the longest increasing subsequence of an array of numbers", () => {
    expect(LIC([1, 2, 4, 3])).toBe(3);
    expect(LIC([10, 22, 9, 33, 21, 50, 41, 60])).toBe(5);
  });
});

describe("Partition Problem", () => {
  it("should return whether a set can be partitioned in 2 equal halves", () => {
    expect(partitionSum([1, 5, 11, 5])).toBe(true);
    expect(partitionSum([1, 5, 3])).toBe(false);
  });
});

describe("Longest Palindromic Subsequence", () => {
  it("should return the largest palindromic subsequence length", () => {
    expect(LPS("GEEKSFORGEEKS")).toBe(5);
    expect(LPS("“BBABCBCAB”")).toBe(7);
  });
});

describe("Longest Alternating Sequence", () => {
  it("should return the longest alternating sequence length", () => {
    expect(LAS([10, 22, 9, 33, 49, 50, 31, 60])).toBe(6);
    expect(LAS2([10, 22, 9, 33, 49, 50, 31, 60])).toBe(6);
  });
});

describe("Weighted Job Schedule", () => {
  it("should return the maximum weight", () => {
    const values = [
      [3, 10, 20],
      [1, 2, 50],
      [6, 19, 100],
      [2, 100, 200],
    ];
    const arr = values.map(
      ([start, end, finish]) => new Job(start, end, finish)
    );

    expect(findMaxWeight(arr)).toBe(250);
  });
});
