let Benchmark = require('benchmark')
let suite = new Benchmark.Suite('Couting words')
const chalk = require('chalk')

console.log('------ prepare data')





/* 
49
43
81
63
84
53
74
34
77
10
31

let i = 0
while (i <= 10) {
    console.log(Math.floor(Math.random() * 100))
    i += 1
}

        49
     43    81
        63    84
           53    74
               34   77
                  10  31 
*/

/* let total = 10000000 // 10 million
const words = []
for (let x = 0; x <= total; x++) {
  // console.log(x)
  words.push(Math.random().toString(36).substring(7))
} */

console.log('------ starting perf')

const STR = '3 1 7 5 4'
// 3 5 2 1 4 6 7
// 3 1 7 5 4

/*
              3 
            1   7 
              5 
            4
*/

class Node {
  constructor (val) {
    this.val = val
    this.right = null
    this.left = null
  }
}


class BinarySearchTree {
  constructor (info) {
    this.root = null
  }

  insert (val) {
    if (!this.root) {
      this.root = new Node(val)
    } else {
      let current = this.root

      while (true) {
        if (val < current.val) {
          if (current.left) {
            current = current.left
          } else {
            current.left = new Node(val)
            // break
          }
        } else if (val > current.val) {
          if (current.right) {
            current = current.right
          } else {
            current.right = new Node(val)
            break
          }
        } else {
          break
        }
      }
    }
  }
}


class BinarySearchTree2 {
  constructor () {
    this.root = null
  }

  insert (val) {
    let newNode = new Node(val)
    if (!this.root) this.root = newNode
    let current = this.root
    while (true) {
      if (val === current.val) return undefined
      if (current.val < val) {
        if (current.right === null) {
          current.right = newNode
          return this
        } else current = current.right
      }
      if (current.val > val) {
        if (current.left === null) {
          current.left = newNode
          return this
        } else current = current.left
      }
    }
  }
  print () {
    let all = 'Root='
    let visit = (current = this.root) => {
      if (!current.left && !current.right) {
        if (all[all.length - 1] < current.val) all += `,LeR${current.val}`
        else all += `,LeL${current.val}`
      } else {
        if (all[all.length - 1] < current.val) all += `,FR${current.val}`
        else all += `,FL${current.val}`
      }

      if (current.left) visit(current.left)
      if (current.right) visit(current.right)
    }
    visit()
    all += ` ,valid bst:${this.isValidBST()}`
    return all
  }

  isValidBST (node = this.root, min = null, max = null) {
    if (!node) return true
    if (max !== null && node.data >= max) {
      return false
    }
    if (min !== null && node.data <= min) {
      return false
    }
    const leftSide = this.isValidBST(node.left, min, node.data)
    const rightSide = this.isValidBST(node.right, node.val, max)

    return leftSide && rightSide
  }

  find (val) {
    let found = false
    let innerFind = (current = this.root) => {
      if (val > current.val)
        if (current.right != null) return innerFind(current.right)
      if (val === current.val) found = true
      else if (current.left != null) return innerFind(current.left)
      if (val === current.val) found = true
      return found
    }
    return innerFind()
  }
}

let tree2 = new BinarySearchTree2()
STR.split(' ').forEach(n => tree2.insert(n))


let getHeight2 = function (root) {
  return maxDepthHandler(root, 0)
}
let maxDepthHandler = function (root, num) {
  if (root == null) {
    return 0
  }
  if (typeof root.left === 'undefined' && typeof root.right === 'undefined') {
    return 0
  }
  if (root.right == null && root.left == null) {
    return num
  }
  if (root.right && root.left) {
    return Math.max(
      maxDepthHandler(root.right, num + 1),
      maxDepthHandler(root.left, num + 1)
    )
  } else if (root.right != null) {
    return maxDepthHandler(root.right, num + 1)
  } else {
    return maxDepthHandler(root.left, num + 1)
  }
}

// console.log(tree2.root)
console.log('getHeight2', getHeight2(tree2.root))


return;

// add tests
suite
  .add('get max number using array.reduce and Math.max', function () {
        /**
        size_t getHeight(const binary_tree_t *tree)
        {
            size_t r, l, height = 0;

            if (tree)
            {
                r = tree->right ? getHeight(tree->right) + 1 : 0;
                l = tree->left ? getHeight(tree->left) + 1 : 0;
                height += (r > l ? r : l);
            }
            return (height);
        }
        */
        function getHeight (root) {
            console.log(root)
            let right = 0
            let left = 0
            let height = 0
            if (root) {
                right = root.right ? getHeight(root.right) + 1 : 0
                left = root.lefy ? getHeight(root.left) + 1 : 0
                height += right > left ? right : left
            }
            console.log('-----------')
            return height
        }
        getHeight(tree)
    })
    
    // add listeners
    .on('cycle', function (event) {
        console.log(chalk.magenta(String(event.target)))
    })
    .on('complete', function () {
        // console.log(this.filter('fastest'))
        const fastest = this.filter('fastest')
        console.log(chalk.green('Fastest is ' + fastest.map('name')))

        function compare(a, b) {
            if (a > b)
                return (a / b * 100).toFixed() + '% faster';
            if (a == b)
                return "the same";
            return (b / a * 100).toFixed() + '% slower';
        }
        console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.map('hz'), this[0].hz)} than ${this[0].name}`));
        console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.map('hz'), this[1].hz)} than ${this[1].name}`));
    })
    // run async
    .run({
        async: true
    })
