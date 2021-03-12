class Node {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}


class Tree {
  constructor(arr) {
    this.root = null
    this.buildFromArray(arr)
  }
  insert(tree, value) {
    let node = tree,
      side;
    while (node.value !== value) {
      side = value < node.value ? 'left' : 'right';
      if (!node[side]) {
        node[side] = new Node(value);
        break;
      }
      node = node[side];
    }
    return tree;
  }

  buildFromArray(arr) {
    this.root = arr.reduce((tree, value) => tree ? this.insert(tree, value) : new Node(value), this.root);
  }
}


const tree = new Tree([20, 25, 50, 100, 87, 180])
console.log(tree)
