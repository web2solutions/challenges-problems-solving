var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting magazine')
const chalk = require('chalk')

console.log(`
    ====  Given an SORTED arr array of numbers, find the index of the x integer ====
`)
/**
================= START
 */
console.log('------ prepare data')

const total = 100000 // 10 million
const arr = []
const x = 99999
for (let i = 0; i <= total; i++) {
  arr.push(i)
}

console.log('------ starting perf')


// add tests
suite
  .add('Linear search best case model', function () {
    // time O(n)
    // worst case: when desired number is at end
    function linearSearch1(arr, x) {
      let n = arr.length
      if(n === 0) return -1
      for (let index = 0; index < n; index++) {
        if(arr[index] === x) return index
      }
      return -1 // not found
    }
    linearSearch1(arr, x)
  })
  .add('Linear search improved for worst case', function () {
    // Improve for worst case
    // if element Found at last  O(n) to O(1)
    // if element Not found O(n) to O(n/2)
    function linearSearch2(arr, x) {
      let n = arr.length
      if(n === 0) return -1
      let left = 0
      let right = n - 1
      while (left <= right) {
        if(arr[left] === x) return left
        if(arr[right] === x) return right
        left += 1
        right -=1
      }
      return -1
    }
    linearSearch2(arr, x)
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
  .run({ async: true })
