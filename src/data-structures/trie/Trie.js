class TrieNode {
  constructor() {
    this.node = {};
    this.lastChar = false;
  }

  containsKey(char) {
    return char in this.node;
  }

  putKey(char) {
    this.node[char] = new TrieNode();
  }

  getKey(char) {
    return this.node[char];
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
