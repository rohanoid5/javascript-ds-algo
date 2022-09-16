const Trie = require("../Trie");

describe("Trie", () => {
  it("should search words inserted in the trie", () => {
    const trie = new Trie();
    trie.insert("apple");
    trie.insert("apps");
    trie.insert("bac");

    expect(trie.search("apple")).toBe(true);
    expect(trie.search("apps")).toBe(true);
    expect(trie.search("appxl")).toBe(false);
    expect(trie.search("bac")).toBe(true);
    expect(trie.search("bat")).toBe(false);
  });

  it("should search words inserted in the trie with the words which starts with the argument", () => {
    const trie = new Trie();
    trie.insert("apple");
    trie.insert("apps");
    trie.insert("bac");

    expect(trie.startsWith("app")).toBe(true);
    expect(trie.startsWith("appxl")).toBe(false);
    expect(trie.startsWith("ba")).toBe(true);
    expect(trie.startsWith("bat")).toBe(false);
  });
});
