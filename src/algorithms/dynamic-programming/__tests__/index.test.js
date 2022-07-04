const findUglyNumber = require("../ugly-numbers/UglyNumbers");
const getBellNumber = require("../bell-numbers/BellNumbers");

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
