var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting numbers')
const chalk = require('chalk')

console.log('------ prepare data')


let total = 10000// 10000000 // 10 million

const hashMap = new Map()
const hash = {}
for (let x = 0; x <= total; x++) {
  hash[`key_${x}`] = `value_${x}`
  hashMap.set(`key_${x}`, `value_${x}`)
}
// console.log('------ starting perf')
// console.log('numbers', numbers)


// add tests
suite
    .add('hashMap with Map', function () {
        function someFunction1() {
          for (let index = 0; index < 100; index++) {
            const value = hashMap.get(`key_${index}`)
          }
        }
        someFunction1()
    })
    .add('classic hash with Object notation', function () {
        function someFunction2() {
          for (let index = 0; index < 100; index++) {
            const value = hash[`key_${index}`]
          }
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
        console.log(chalk.blue(`${this[0].name} is ${compare(fastest.map('hz'), this[1].hz)} than ${this[1].name}`));
        
    })
    // run async
    .run({
        async: true
    })
