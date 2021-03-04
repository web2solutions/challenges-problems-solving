'use strict'
// https://www.hackerrank.com/challenges/2d-array/leaderboard?limit=100&page=1\

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0



/*
 * Complete the contacts function below.
 */


function hourglassSum(arr) {
  // console.log(arr)
  
  const totalHourglasses = 16
  let startingColumn = 0 // starts on 1
  let rowTop = 0
  let rowMid = 1
  let rowBottom = 2

  function getHourGlass() {
    let row1 = arr[rowTop]
    // console.log('-----------------------------------startingColumn', startingColumn)
    // console.log('row 1 >>>>>>', row1)
    const a1 = [row1[startingColumn], row1[startingColumn + 1], row1[startingColumn + 2]]
    let row2 = arr[rowMid]
    // console.log('row 2 >>>>>>', row2)
    const a2 = [row2[startingColumn + 1]]
    let row3 = arr[rowBottom]
    // console.log('row 3 >>>>>>', row3)
    const a3 = [row3[startingColumn], row3[startingColumn + 1], row3[startingColumn + 2]]
    const hourGlass = [...a1, ...a2, ...a3]
    // console.log('', hourGlass)
    return hourGlass
  }

  const hourGlasses = []
  for (let x = 0; x < totalHourglasses; x++) {
    const hourGlass = getHourGlass()
    // console.log('', Math.max(...hourGlass))
    hourGlasses.push(hourGlass)
    // console.log('============== x', x)
    startingColumn = startingColumn + 1
    if (startingColumn === 4) {
      startingColumn = 0
    }
    if ( x === 3) {
      // console.log('-----------------------------------------------------')
      rowTop = rowTop + 1
      rowMid = rowMid + 1
      rowBottom = rowBottom + 1
    } else if (x === 7) {
      // console.log('-----------------------------------------------------')
      rowTop = rowTop + 1
      rowMid = rowMid + 1
      rowBottom = rowBottom + 1
    } else if (x === 11) {
      // console.log('-----------------------------------------------------')
      rowTop = rowTop + 1
      rowMid = rowMid + 1
      rowBottom = rowBottom + 1
    } else if (x === 15) {
      // console.log('-----------------------------------------------------')
      rowTop = rowTop + 1
      rowMid = rowMid + 1
      rowBottom = rowBottom + 1
    }
  }
  // console.log(hourGlasses)
  let highestSum = 0
  for (let x = 0; x < hourGlasses.length; x++) {
    let accumulator = 0
    for (let w = 0; w < hourGlasses[x].length; w++) {
      accumulator = accumulator + hourGlasses[x][w]
    }
    if (x === 0) {
      highestSum = accumulator
    }
    console.log('sum', accumulator)

    if (accumulator > highestSum) {
      highestSum = accumulator
    }
    
  }
  return highestSum
}

function readLine() {
  return inputString[currentLine++]
}

function main() {

  let arr = Array(6)

  for (let i = 0; i < 6; i++) {
      arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10))
  }

  let result = hourglassSum(arr)
  console.log(result)
  process.exit(0)
}

let reader = fs.createReadStream('input2d00.txt')
reader.on('data', function (chunk) { 
  inputString += chunk.toString()
})
reader.on("end", () => {
  inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''))  

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
