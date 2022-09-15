class TrieNode {
  constructor() {
    this.node = new Array(26).fill(null);
    this.lastChar = false;
  }

  containsKey(char) {
    return this.node[char.charCodeAt(0) - "a".charCodeAt(0)] !== null;
  }

  putKey(char) {
    this.node[char.charCodeAt(0) - "a".charCodeAt(0)] = new TrieNode();
  }

  getKey(char) {
    return this.node[char.charCodeAt(0) - "a".charCodeAt(0)];
  }

  isEnd() {
    return this.lastChar;
  }

  setEnd() {
    this.lastChar = true;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.containsKey(char)) {
        node.putKey(char);
      }

      node = node.getKey(char);
    }

    node.setEnd();
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.getKey(char)) return false;

      node = node.getKey(char);
    }

    return node.isEnd();
  }

  startsWith(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.getKey(char)) return false;

      node = node.getKey(char);
    }

    return true;
  }
}

module.exports = Trie;
