var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting magazine')
const chalk = require('chalk')


/**
================= START
 */
console.log('------ prepare data')


let total = 10000000 // 10 million

const arr = [6, 5, 7, 3, 1, 8, 7, 2, 4, 234, 34,234, 3224,234, 324,234 ,234,234,434 ,235,34656,566, 5, 7, 3, 1, 8, 7, 2, 4, 234, 34,234, 3224,234, 324,234 ,234,234,434 ,235,34656,566, 5, 7, 3, 1, 8, 7, 2, 4, 234, 34,234, 3224,234, 324,234 ,234,234,434 ,235,34656,56,6, 5, 7, 3, 1, 8, 7, 2, 4, 234, 34,234, 3224,234, 324,234 ,234,234,434 ,235,34656,56,6, 5, 7, 3, 1, 8, 7, 2, 4, 234, 34,234, 3224,234, 324,234 ,234,234,434 ,235,34656,56,6, 5, 7, 3, 1, 8, 7, 2, 4, 234, 34,234, 3224,234, 324,234 ,234,234,434 ,235,34656,56,6, 5, 7, 3, 1, 8, 7, 2, 4, 234, 34,234, 3224,234, 324,234 ,234,234,434 ,235,34656,56]
for (let x = 0; x <= total; x++) {
  // magazine = `${magazine} ${Math.random().toString(36).substring(7)}`
}


console.log('------ starting perf')


/* function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    leftIndex = left, //left pointer
    rightIndex = right; //right pointer
  while (leftIndex <= rightIndex) {
    while (items[leftIndex] < pivot) {
      leftIndex++;
    }
    while (items[rightIndex] > pivot) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swap(items, leftIndex, rightIndex); //sawpping two elements
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}






return */


// add tests
suite
  .add('native sort', function () {
    function sortClients(arr) {
      return arr.sort( (a,b) => (a - b))
    }
    sortClients(arr)
  })
  .add('heap sort', function () {
    function heapSort(arr){
      let m = arr.length;
      for(let index = Math.floor(m/2) - 1 ; index >= 0; index--){
          max_heapify(arr,index,m);            //Building max heap
      }
      for(let index = m-1;index>=0;index--){
          swap(arr,0,index);              //Deleting root element
          max_heapify(arr,0,index);           //Building max heap again
      }
      return arr;
    }
    
    function max_heapify(arr,index,m){
      let left = 2*index;              //Left child index
      let right = 2*index+1;           //Right child index
      let maximum;
      if (right < m) {                 //Checks if right child exist
        if (arr[left] >= arr[right]) {    //Compares children to find maximum
          maximum = left;
        }
        else {
          maximum = right;
        }
      }
      else if (left < m) {                //Checks if left child exists
        maximum = left;
      }
      else {
        return //In case of no children return
      }
      if(arr[index] < arr[maximum]){            //Checks if the largest child is greater than parent
          swap(arr, index, maximum);          //If it is then swap both
          max_heapify(arr, maximum, m);       //max-heapify again
      }
      return;
    }
    
    function swap(arr,index,index2){                 //Swap function
      let temp;
      temp = arr[index];
      arr[index] = arr[index2];
      arr[index2]=temp;
    }
    

    heapSort(arr)
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
