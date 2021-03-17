var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting magazine')
const chalk = require('chalk')


/**
   Problem 
   
   Given a magazine (collection of words) and a ransom note set, check if we can build a ransom note set using the letters of the magazine
   This problem is assuming that to be an ransom note, All it letters must be found in the magazine. Example, if you are building the word coff, the coffee word in the magazine should satisfy this.
   
  Example 1:
   magazine is : Tomorrow a lot of coffee candies will be bought Do you like to drink coffee
   Ransom Note is: Drin coffe cof
        In this case your ransom notes can entirely be built using the magazine.
  
  Example 2:
   magazine is : Tomorrow a lot of coffee candies will be bought Do you like to drink coffee
   Ransom Note is: Drin Drin coffe cof
        In this case your ransom notes can not be built because there is no 2 drink words in magazine
  
 */

/**
================= START
 */
console.log('------ prepare data')

const magazine = 'Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Tomorrow a lot of coffee candies will be bought Do you like to drink coffee '
const note = 'Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee '

console.log('---magazine words:', magazine.split(' ').length)
console.log('---magazine letters:', magazine.split('').length)
console.log('---rasom notes words:', note.split(' ').length)
console.log('---rasom notes letters:', note.split('').length)

console.log('------ starting perf')

// add tests
suite
  .add('Map implementation', function () {
    function someFunction1(note, magazine) {
      let dict = new Map()
      let isok = true
      for (let letter of magazine) {
        letter = letter.toLowerCase()
        let sum = dict.get(letter) || 0
        dict.set(letter, sum + 1)
      }
      for (let letter of note) {
        letter = letter.toLowerCase()
        let sum = dict.get(letter)
        if (typeof sum !== 'undefined') {
          if (dict.get(letter) < 1) {
            isok = false
            break
          }
          dict.set(letter, sum - 1)
          isok = true
        } else {
          isok = false
          break
        }
      }
      // console.log(isok)
      // console.log(dict)
      return isok
    }
    someFunction1(note, magazine)
  })
  .add('Hash implementation', function () {
    function someFunction2(note, magazine) {
      let dict = {}
      let isok = true
      for (let letter of magazine) {
        letter = letter.toLowerCase()
        let sum = dict[letter] || 0
        dict[letter] = sum + 1
      }
      for (let letter of note) {
        letter = letter.toLowerCase()
        let sum = dict[letter]
        if (typeof sum !== 'undefined') {
          if (dict[letter] < 1) {
            isok = false
            break
          }
          dict[letter] = sum - 1
          isok = true
        } else {
          isok = false
          break
        }
      }
      // console.log(isok)
      // console.log(dict)
      return isok
    }
    someFunction2(note, magazine)
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
