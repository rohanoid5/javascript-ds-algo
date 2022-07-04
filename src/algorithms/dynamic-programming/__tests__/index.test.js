const findUglyNumber = require("../ugly-numbers/UglyNumbers");

describe("Ugly Numbers", () => {
  it("should return the nth ugly number from the sequence", () => {
    expect(findUglyNumber(7)).toBe(8);
    expect(findUglyNumber(11)).toBe(15);
    expect(findUglyNumber(15)).toBe(24);
    expect(findUglyNumber(150)).toBe(5832);
  });
});
