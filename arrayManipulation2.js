'use strict'

const assert = require('assert');
// https://www.hackerrank.com/challenges/crush/problem

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0



/*
 * Complete the contacts function below.
 */


function arrayManipulation(n, queries) {
  // console.log(n, queries)
  const arr = new Array(n).fill(0)

  function* generator_queries(queries) {
    let index = 0
    while (index < queries.length) {
      yield queries[index]
      index += 1
    }
  }

  
  function* execute(query) {
    console.log(query); //0123456789
    // const executed = []
    let maximunValue = 0
    for (let x = (query[0] - 1); x < query[1]; x++) {
      const val = arr[x] + query[2]
      arr[x] = val
      // executed.push(val)
      if (val > maximunValue) {
        maximunValue = val
      }
    }
    yield {
      // executed,
      maximunValue
    }
  }
  let done = 0
  let max = 0
  for (let query of generator_queries(queries)) {
    if (done === 0) {
      max = 0
    }
    const executed = execute(query).next()
    done += 1
    // console.log('executed', executed.value.executed)
    // console.log('executed', executed.value.maximunValue)
    if (executed.value.maximunValue > max) {
      max = executed.value.maximunValue
    }
  }

  // console.log(arr)
  return max
}

function readLine() {
  return inputString[currentLine++]
}

function main() {

  const nm = readLine().split(' ');

  const n = parseInt(nm[0], 10);

  const m = parseInt(nm[1], 10);

  let queries = Array(m);

  for (let i = 0; i < m; i++) {
    queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
  }

  let result = arrayManipulation(n, queries);
  console.log(result)

  // assert.equal(result, 2497169732) // 200 2497169732
  process.exit(0)
}

let reader = fs.createReadStream('inputArrayManipulation2.txt')
reader.on('data', function (chunk) {
  inputString += chunk.toString()
})
reader.on("end", () => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main()
})



// totalHourglasses ========================= 1
// row 1, column 1, column 2, column 3
// row 2, column 2
// row 3, column 1, column 2, column 3
//
// startingColumn = startingColumn = 1
//
// totalHourglasses ========================= 2
// row 1, column 2, column 3, column 4
// row 2, column 3
// row 3, column 2, column 3, column 4
//
// startingColumn = startingColumn = 1
//
// totalHourglasses ========================= 3
// row 1, column 3, column 4, column 5
// row 2, column 4
// row 3, column 3, column 4, column 5
//
// startingColumn = startingColumn = 1
//
// totalHourglasses ========================= 4
// row 1, column 4, column 5, column 6
// row 2, column 5
// row 3, column 4, column 5, column 6
//
// startingColumn = startingColumn = 1
//
// if (startingColumn === totalStackColumns) { startingColumn = 1}

// rowTop = rowTop + 1   
// rowMid = rowMid + 1    
// rowBottom = rowBottom + 1
// currentlyRow = currentlyRow + 1
// if currentlyRow === totalStacks then it is done


// totalHourglasses ========================= 5
// row 2, column 1, column 2, column 3
// row 3, column 2
// row 4, column 1, column 2, column 3
//
// startingColumn = startingColumn = 1
//
// totalHourglasses ========================= 6
// row 2, column 2, column 3, column 4
// row 3, column 3
// row 4, column 2, column 3, column 4
//
// startingColumn = startingColumn = 1
//
// totalHourglasses ========================= 7
// row 2, column 3, column 4, column 5
// row 3, column 4
// row 4, column 3, column 4, column 5
//
// startingColumn = startingColumn = 1
//
// totalHourglasses ========================= 8
// row 2, column 4, column 5, column 6
// row 3, column 5
// row 4, column 4, column 5, column 6
//
// startingColumn = startingColumn = 1
//
// if (startingColumn === totalStackColumns) { startingColumn = 1}
// 
