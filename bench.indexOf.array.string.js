var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting numbers')
const chalk = require('chalk')

console.log('------ prepare data')


let total = 10000000 // 10 million

const words = []
let swords = ' '
for (let x = 0; x <= total; x++) {
  // console.log(x)
  let w = Math.random().toString(36).substring(7)
  swords = swords + w + ' '
  words.push(w)
}

console.log('------ starting perf')





// add tests
suite
    .add('indexOf string', function () {
        function someFunction1() {
          swords.indexOf('ab')
        }
        someFunction1()
    })
    .add('indexOf array', function () {
        function someFunction2() {
          words.indexOf('ab')
        }
        someFunction2()

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
        // console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.map('hz'), this[0].hz)} than ${this[0].name}`));
        // console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.map('hz'), this[1].hz)} than ${this[1].name}`));
    })
    // run async
    .run({
        async: true
    })
