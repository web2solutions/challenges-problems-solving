let Benchmark = require('benchmark')
let suite = new Benchmark.Suite('Couting words')
const chalk = require('chalk')

console.log('------ prepare data')

const STR = '1 2 5 3 6 4'

function calcHeight(q) {
  let tot = 0
  for (let x = 0; x < q.length; x++) {
    tot = tot + q[x]
  }
  return tot
}

const queues = {}

function equalStacks(h1, h2, h3) {
  // Write your code here
  queues['h1'] = {
    items: h1,
    height:calcHeight(h1)
  }
  queues['h2'] = {  
    items: h2,
    height:calcHeight(h2)
  }
  queues['h3'] = {
    items: h3,
    height:calcHeight(h3)
  }
  const heights = [q1Height, q2Height, q3Height]
  if (q1Height === q2Height && q1Height === q3Height) {
    return q1Height
  }
  let highestQ = Math.max(...heights)
  const q1Items = h1.length
  const q2Items = h2.length
  const q3Items = h3.length
  
  
}


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
