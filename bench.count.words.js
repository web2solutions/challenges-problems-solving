var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting words')
const chalk = require('chalk')

console.log('------ prepare data')


let total = 10000000 // 10 million

const words = []
for (let x = 0; x <= total; x++) {
  // console.log(x)
  words.push(Math.random().toString(36).substring(7))
}

console.log('------ starting perf')




// add tests
suite
  .add('forEach arrow function count words', function () {
    function someFunction1() {
      let count = 0
      words.forEach(() => {count = count + 1})
      return count
    }
    someFunction1()
  })
  .add('forEach function count words', function () {
    function someFunction2() {
      let count2 = 0
      words.forEach(function () {
        count2 = count2 + 1
      })
      return count2
    }
    someFunction2()
  })
  .add('classic for count words', function () {
    function someFunction3() {
      let count1 = 0
      for (let w = 0; w < words.length; w++) {
        count1 = count1 + 1
      }
      return count1
    }
    someFunction3()
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(chalk.magenta(String(event.target)))
  })
  .on('complete', function () {
    // console.log(this.filter('fastest'))
    console.log(chalk.green('Fastest is ' + this.filter('fastest').map('name')))
    function compare(a, b) {
      if (a > b)
        return ( a / b * 100).toFixed() + '% faster';
      if (a == b)
        return "the same";
      return ( b / a * 100).toFixed() + '% slower';
    }

    console.log(chalk.blue('for is ' + compare(this[2].hz, this[0].hz) + ' than forEach arrow'));
    console.log(chalk.blue('for is ' + compare(this[2].hz, this[1].hz) + ' than forEach function'));
  })
  // run async
  .run({ async: true })

