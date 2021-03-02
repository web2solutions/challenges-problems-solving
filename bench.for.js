var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting numbers')
const chalk = require('chalk')

console.log('------ prepare data')


let total = 10000// 10000000 // 10 million

const numbers = []
for (let x = 0; x <= total; x++) {
    const amount = parseFloat((Math.floor(Math.random() * 100)) + "." + (Math.floor(Math.random() * 100)))
    numbers.push(amount)
}
// console.log('------ starting perf')
// console.log('numbers', numbers)


// add tests
suite
    .add(' for in', function () {
        function someFunction1() {
            for (let index of numbers) {
                const number = numbers[index]
            }
        }
        someFunction1()
    })
    .add('classic for', function () {
        function someFunction2() {
            for (let x = 0; x < numbers.length; x++) {
                const number = numbers[x]
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
        console.log(chalk.blue(`${this[1].name} is ${compare(fastest.map('hz'), this[0].hz)} than ${this[0].name}`));
        
    })
    // run async
    .run({
        async: true
    })
