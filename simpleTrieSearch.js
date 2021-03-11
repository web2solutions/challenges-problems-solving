class Node {
  constructor(/* value */) {
    // this.value = value;
    this.isLastChar = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
        if (node[char] == null) node[char] = {};
        node = node[char];
    }

    node.isLastChar = true;
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
        node = node[char];
        if (node === null) return null;
    }

    return (node !== null && node.isLastChar === true)

  }
}

let trie = new Trie()

trie.insert("test")
trie.insert("toaster")
trie.insert("taco")
console.log(trie.search("test"))
console.log(trie.search("toast"))
console.log(trie.search("test"))
