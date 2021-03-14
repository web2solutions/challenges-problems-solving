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
 Node and Trie Polyfill
 Data structure implementation
 The Trie is a replacement to Map() javascript implementation in this benchmark.
 A Trie is composed by a set of
 than it is not part of perf test
================= START
 */
class Node {
  constructor(value = null) {
    this.value = value;
    this.isLastChar = false;
    this.wordCount = 0
    this.letterCount = 0
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
        node[char] = new Node(char);
      }
      node = node[char];
      node.letterCount ? node.letterCount += 1 : node.letterCount = 1
    }
    // node.wordCount ? node.wordCount += 1 : node.wordCount = 1
    node.isLastChar = true;
  }

  search(word) {
    let node = this.root;
    // console.log(JSON.stringify(this.root))
    // console.log('word', word)
    for (let char of word) {
      node = node[char];
      if (node === null) return null;
      if (typeof node === 'undefined') {
        node = null
        return
      }
      // console.log('-------> '+ node.value, node.letterCount)
    }
    if (node !== null) {
      let root = this.root
      for (let char of word) {
        root = root[char];
        root.letterCount -= 1
        // console.log('-------> '+ root.value, root.letterCount)
        if (root.letterCount < 0) {
          node = null
          break
        }
      }
    }
    // console.log(JSON.stringify(this.root))

    let wordLastChar = word[word.length - 1]
    //console.log('wordLastChar', wordLastChar)
    //console.log('node', node)
    let isFound = (node !== null && node.value === wordLastChar)
    return isFound
  }
}
/**
================= START
 */
console.log('------ prepare data')


let total = 10000000 // 10 million

const magazine = 'a'

const note = 'bbbbbbb b bbbbbb b b bbbbbbbbb   bbbbbbb b b b b bbbbbbbbbbbb bbbbbbbb bbbbbbb b bbbbbb b b bbbbbbbbb   bbbbbbb b b b b bbbbbbbbbbbb bbbbbbbb '
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
      let dictA = magazine.split('')
      let notes = note.split('')
      let dict = new Map()
      for (let index = 0; index < dictA.length; index++) {
        let letter = dictA[index].toLowerCase()
        let sum = dict.get(letter)
        if(sum)
          dict.set(letter, sum + 1)
        else
          dict.set(letter, 1)
      }
      // console.log(dict.keys())
      // console.log(dict.values())
      
      // console.log(notes)
      let isok = true
      for (let index = 0; index < notes.length; index++) {
        const letter = notes[index].toLowerCase();
        let sum = dict.get(letter)
        // console.log(letter, sum)
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
      // console.log(JSON.stringify(trie))
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
    console.log(chalk.blue(`${this[1].name} is ${compare(fastest.map('hz'), this[0].hz)} than ${this[0].name}`));
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
