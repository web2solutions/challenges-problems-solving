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
 Node and Trie Polyfill
 Data structure implementation
 The Trie is a replacement to Map() javascript implementation in this benchmark.
 A Trie is composed by a set of
 than it is not part of perf test
================= START
 */
class Node {
  constructor(/* value */) {
    // this.value = value;
    this.isLastChar = false;
    this.wordCount = 0
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (node[char] == null) {
        node[char] = {};
      }
      node = node[char];
    }
    node.wordCount ? node.wordCount += 1 : node.wordCount = 1
    node.isLastChar = true;
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
        node = node[char];
        if (node === null) return null;
    }

    let isFound = (node !== null && node.isLastChar === true)
    if (isFound) {
      if (node.wordCount < 1) {
        isFound = false
      } else {
        node.wordCount -= 1;  
      }
    }
    return isFound

  }
}
/**
================= START
 */
console.log('------ prepare data')


let total = 10000000 // 10 million

const magazine = 'Tomorrow a lot of coffee candies will be bought Do you like to drink coffee Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'
const note = 'Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Drink coffee coffee Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'
for (let x = 0; x <= total; x++) {
  // magazine = `${magazine} ${Math.random().toString(36).substring(7)}`
}

console.log('---magazine words:', magazine.split(' ').length)
console.log('---magazine letters:', magazine.split('').length)
console.log('---rasom notes words:', note.split(' ').length)
console.log('---rasom notes letters:', note.split('').length)

console.log('------ starting perf')


// add tests
suite
  .add('Map implementation', function () {
    function someFunction1(note, magazine) {
      let dictA = magazine.split(' ') // I'm confused if I can split magazine as arr because Manny told we should not go over magazine entire array never
      let notes = note.split(' ')
      /**
       * MAP is > 600% fastest than hash with object notation, check the benchmark bench.hash.map.js
       */
      let dict = new Map()
      for (let index = 0; index < dictA.length; index++) {
        let keyName = dictA[index].toLowerCase()
        let sum = dict.get(keyName)
        if(sum)
          dict.set(keyName, sum + 1)
        else
          dict.set(keyName, 1)
      }
      // console.log(dict)
      
      // console.log(notes)
      let isok = true
      for (let index = 0; index < notes.length; index++) {
        const note = notes[index].toLowerCase();
        let sum = dict.get(note)
        // console.log(note, sum)
        if (typeof sum !== 'undefined') {
          if (dict.get(note) < 1) {
            isok = false
            break
          }
          dict.set(note, sum - 1)
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
      let dictA = magazine.split(' ') // I'm confused if I can split magazine as arr because Manny told we should not go over magazine entire array never
      let notes = note.split(' ')
      /**
       * MAP is > 600% fastest than hash with object notation, check the benchmark bench.hash.map.js
       */
      let dict = {}
      for (let index = 0; index < dictA.length; index++) {
        let keyName = dictA[index].toLowerCase()
        let sum = dict[keyName]
        if (sum) {
          dict[keyName] = sum + 1
        }
        else {
          dict[keyName] = 1
        }
      }
      // console.log(dict)
      
      // console.log(notes)
      let isok = true
      for (let index = 0; index < notes.length; index++) {
        const note = notes[index].toLowerCase();
        let sum = dict[note]
        // console.log(note, sum)
        if (typeof sum !== 'undefined') {
          if (dict[note] < 1) {
            isok = false
            break
          }
          dict[note] = sum - 1
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
  .add('Trie implementation', function () {
    function someFunction3(note, magazine) {
      let trie = new Trie()
    
      let dictA = magazine.split(' ') // I'm confused if I can split magazine as arr because Manny told we should not go over magazine entire array never
      let notes = note.split(' ')
      
      for (let index = 0; index < dictA.length; index++) {
        let word = dictA[index].toLowerCase()
        trie.insert(word)
      }
      // console.log(JSON.stringify(trie))
      let isok = true
      for (let index = 0; index < notes.length; index++) {
        const note = notes[index].toLowerCase();
        let found = trie.search(note)
        // console.log(note, found)
        if (!found) {
          isok = false
          break
        }
      }
      // console.log(isok)
      // console.log(JSON.parse(trie))
      return isok
    }
    someFunction3(note, magazine)
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
    console.log(chalk.blue(`${this[0].name} is ${compare(fastest.map('hz'), this[2].hz)} than ${this[2].name}`));
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
