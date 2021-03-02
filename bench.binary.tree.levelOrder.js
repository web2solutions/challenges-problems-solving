let Benchmark = require('benchmark')
let suite = new Benchmark.Suite('Couting words')
const chalk = require('chalk')

console.log('------ prepare data')

const STR = '1 2 5 3 6 4'


class Node {
  constructor(val) {
    this.val = val
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor(info) {
    this.root = null
  }

  insert(val) {
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


/**
 {
    "root": {
        "val": "3",
        "right": {
            "val": "7",
            "right": null,
            "left": {
                "val": "5",
                "right": null,
                "left": {
                    "val": "4",
                    "right": null,
                    "left": null
                }
            }
        },
        "left": {
            "val": "1",
            "right": null,
            "left": null
        }
    }
}
 */

var levelOrder = function (root) {
  let levels = []
  if (!root) {
    return levels
  }
  const queue = [root]
  while (queue.length) {
    const queueLength = queue.length
    const level = []
    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    levels = [...levels, ...level]
  }
  return levels.join('- >')
}

const order = []
const tree = new BinarySearchTree()
STR.split(' ').forEach(n => tree.insert(n))
const root = tree.root
console.log(levelOrder(root))






console.log('------ starting perf')


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
