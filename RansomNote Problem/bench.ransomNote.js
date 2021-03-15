var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting magazine')
const chalk = require('chalk')


/**
   Problem 
   
   Given a magazine (collection of words) and a ransom note set, check if we can build a ransom note set using the words of magazine
   This problem is assuming that to be an ransom note, it must be match a 100% equal word in the magazine. Example, if you are building the word coffee, the same word coffee must be present in tthe magazine, the word coffees in this case does not satisfy.
   
   Example 1:
   magazine is : Tomorrow a lot of coffee candies will be bought Do you like to drink coffee
   Ransom Note is: Drink coffee coffee
        In this case your ransom notes can entirely be built using the magazine.
  
  Example 2:
   magazine is : Tomorrow a lot of coffee candies will be bought Do you like to drink coffee
   Ransom Note is: Drink coffee coffee drink
        In this case your ransom notes can not be built because there is no drink words in magazine
  
 */

/**
================= START
 */
console.log('------ prepare data')




const magazine = 'Tomorrow a lot of coffee candies will be bought Do you like to drink coffee'
const note = 'Drink coffee coffee'


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
        if (!letter.match(/[a-z]/i)) {
          continue
        }
        letter = letter.toLowerCase()
        let sum = dict.get(letter) || 0
        dict.set(letter, sum + 1)
      }
      for (let letter of note) {
        if (!letter.match(/[a-z]/i)) {
          continue
        }
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
        if (!letter.match(/[a-z]/i)) {
          continue
        }
        letter = letter.toLowerCase()
        let sum = dict[letter] || 0
        dict[letter] = sum + 1
      }
      for (let letter of note) {
        if (!letter.match(/[a-z]/i)) {
          continue
        }
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



  /* 
  Trie tree 

  {
  "root": {
    "isLastChar": false,
    "wordCount": 0,
    "t": {
      "o": {
        "m": {
          "o": {
            "r": {
              "r": {
                "o": {
                  "w": {
                    "wordCount": 1,
                    "isLastChar": true
                  }
                }
              }
            }
          }
        },
        "wordCount": 1,
        "isLastChar": true
      }
    },
    "a": {
      "wordCount": 1,
      "isLastChar": true
    },
    "l": {
      "o": {
        "t": {
          "wordCount": 1,
          "isLastChar": true
        }
      },
      "i": {
        "k": {
          "e": {
            "wordCount": 1,
            "isLastChar": true
          }
        }
      }
    },
    "o": {
      "f": {
        "wordCount": 1,
        "isLastChar": true
      }
    },
    "c": {
      "o": {
        "f": {
          "f": {
            "e": {
              "e": {
                "wordCount": 2,
                "isLastChar": true
              }
            }
          }
        }
      },
      "a": {
        "n": {
          "d": {
            "i": {
              "e": {
                "s": {
                  "wordCount": 1,
                  "isLastChar": true
                }
              }
            }
          }
        }
      }
    },
    "w": {
      "i": {
        "l": {
          "l": {
            "wordCount": 1,
            "isLastChar": true
          }
        }
      }
    },
    "b": {
      "e": {
        "wordCount": 1,
        "isLastChar": true
      },
      "o": {
        "u": {
          "g": {
            "h": {
              "t": {
                "wordCount": 1,
                "isLastChar": true
              }
            }
          }
        }
      }
    },
    "d": {
      "o": {
        "wordCount": 1,
        "isLastChar": true
      },
      "r": {
        "i": {
          "n": {
            "k": {
              "wordCount": 1,
              "isLastChar": true
            }
          }
        }
      }
    },
    "y": {
      "o": {
        "u": {
          "wordCount": 1,
          "isLastChar": true
        }
      }
    }
  }
}
  
  */
