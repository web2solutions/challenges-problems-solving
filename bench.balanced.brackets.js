let Benchmark = require('benchmark')
let suite = new Benchmark.Suite('Couting words')
const chalk = require('chalk')

console.log('------ prepare data')
const STR = '1 2 5 3 6 4'

let isMatchingBrackets = function (str) {
  const allBrackets = []
  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  str = str.replace(new RegExp('[0-9]', 'g'), '')
  str = str.replace(new RegExp('[a-z A-Z]', 'g'), '')
  for (let x = 0; x < str.length; x++) {
    const char = str[x]
    if (char === '[' || char === '(' || char === '{') {
      allBrackets.push(char)
    } else {
      const lastItem = allBrackets.pop()
      if (char !== map[lastItem]) {
        console.log(map[lastItem])
        return false
      }
    }
  }
  
  if (allBrackets.length !== 0) {
   return false
  }

  return true
}

console.log(isMatchingBrackets("(a[0]+b[2c[6]]) {24 + 53}")); // returns true
console.log(isMatchingBrackets("(){}")); // returns true
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
