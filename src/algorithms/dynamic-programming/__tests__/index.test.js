const findUglyNumber = require("../ugly-numbers/UglyNumbers");
const getBellNumber = require("../bell-numbers/BellNumbers");
const countCoinChange = require("../coin-change/CoinChange");

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
