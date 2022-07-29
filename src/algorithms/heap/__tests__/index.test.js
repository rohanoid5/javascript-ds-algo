const rearrangeString = require("../rearrange-strings/RearrangeStrings");

describe("Rearrange String", () => {
  it("should return the rearranged string if possible", () => {
    expect(rearrangeString("aaabc")).toBe("abaca");
    expect(rearrangeString("aaabb")).toBe("ababa");
    expect(rearrangeString("aaaabc")).toBe("");
  });
});
