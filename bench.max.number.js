var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting numbers')
const chalk = require('chalk')

console.log('------ prepare data')


let total = 10000000// 10000000 // 10 million

const numbers = []
for (let x = 0; x <= total; x++) {
    const amount = parseFloat((Math.floor(Math.random() * 100)) + "." + (Math.floor(Math.random() * 100)))
    numbers.push(amount)
}
console.log('------ starting perf')
// console.log('numbers', numbers)


// add tests
suite
    .add('get max number using array.reduce and Math.max', function () {
        function someFunction1() {
            const maxNummber = numbers.reduce((a, c) => {
                return Math.max(c, a)
            }, 0)
            return maxNummber
        }
        someFunction1()
    })
    .add('get max number using array.reduce and simple number comparison', function () {
        function someFunction2() {
            const maxNummber = numbers.reduce((a, c) => {
                return c > a ? c : a
            }, 0)
            return maxNummber
        }
        someFunction2()

    })
    /* DONT SCALES WITH BIG ARRAYS - out of memory
        .add('get max number using spread ES6 operator', function () {
        function someFunction3() {
            return Math.max(...numbers)
        }
        someFunction3()
    }) */
    /* Tooo slow WITH BIG ARRAYS
        .add('get max number using array sort', function () {
        function someFunction3 () {
            return numbers.sort()[numbers.length - 1]
        }
        someFunction3()
    }) */
    .add('get max number using simple for statement', function () {
        function someFunction4 () {
            let maxNummber = 0
            for (let x = 0; x < numbers.length; x++) {
                const n = numbers[x]
                if (n > maxNummber) {
                    maxNummber = n
                }
            }
            return maxNummber
        }
        someFunction4()
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
