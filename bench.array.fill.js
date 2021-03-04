var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting numbers')
const chalk = require('chalk')

console.log('------ prepare data')


let total = 100000// 10000000 // 10 million

suite
    .add('usinf array constructor', function () {
      function someFunction1() {
        const arr = new Array(total).fill(0)
      }
      someFunction1()
    })
    .add('using for', function () {
        function someFunction2() {
          const arr = []
          for (let x = 0; x < total; x++) {
             arr.push(0)
          }
          // console.log(n, queries)
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
        console.log(chalk.blue(`${fastest.map('name')} is ${compare(fastest.map('hz'), this[1].hz)} than ${this[0].name}`));
    })
    // run async
    .run({
        async: true
    })
