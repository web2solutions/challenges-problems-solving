'use strict'
// https://www.hackerrank.com/challenges/apple-and-orange/problem

const fs = require('fs')


let inputString = ''
let currentLine = 0

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let count = 0
  for(let x = 0; x < apples.length; x++){
      let distance = a + (apples[x])
    if (distance >= s && distance <= t) {
          count = count + 1
      }
  }
  console.log(count)
  let count2 = 0
  for (let x = 0; x < oranges.length; x++){
    let distance = b + (oranges[x])
      if(distance >= s && distance <= t) {
        count2 = count2 + 1
      }
  }
  console.log(count2)
}



function readLine() {
  return inputString[currentLine++]
}

function main() {

  const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}

let reader = fs.createReadStream('inputOrangesAndApples8.txt')
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
