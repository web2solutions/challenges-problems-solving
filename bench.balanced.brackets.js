let Benchmark = require('benchmark')
let suite = new Benchmark.Suite('Couting words')
const chalk = require('chalk')

console.log('------ prepare data')
const STR = '1 2 5 3 6 4'

let isMatchingBrackets = function (str) {
  let dictionary = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let queue = [];

  for (let i = 0; i < str.length; i++) {
    // If character is an opening brace add it to a queue
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      queue.push(str[i])
    }
    else {
      let last = queue.pop();
      // if last element is  not a properly closing bracket
      if (str[i] !== dictionary[last]) {
        return false
      }
    }
  }
  // if queue is not clear
  if (queue.length !== 0) {
    return false
  }

  return true
}

console.log(isMatchingBrackets("(){}")); // returns true
console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
console.log(isMatchingBrackets("({(()))}}"));  // returns false


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
        console.log(chalk.green('Fastest is ' + fastest.dictionary('name')))

        function compare(a, b) {
            if (a > b)
                return (a / b * 100).toFixed() + '% faster';
            if (a == b)
                return "the same";
            return (b / a * 100).toFixed() + '% slower';
        }
        console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.dictionary('hz'), this[0].hz)} than ${this[0].name}`));
        console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.dictionary('hz'), this[1].hz)} than ${this[1].name}`));
    })
    // run async
    .run({
        async: true
    })
