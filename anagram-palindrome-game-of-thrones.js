'use strict';

// https://www.hackerrank.com/challenges/game-of-thrones/problem

const fs = require('fs');
const {
  mainModule
} = require('process');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;


/*
 * Complete function below.
 */

function gameOfThrones(s) {
  const pivo = Math.floor(s.length / 2)
  let totalPairs = 0
  const dict = new Map()
  let haveAPair = false
  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    let element = dict.get(char)
    if (element) {
      haveAPair = true
      element = element + 1
      dict.set(char, element)
    } else {
      dict.set(char, 1)
    }
  }
  if (!haveAPair) {
    return 'NO'
  }
  
  for (let [key, value] of dict) {
    if (value < 2) {
      continue
    }
    totalPairs = totalPairs + (Math.floor(value / 2))
  }
  return (( pivo % totalPairs) === 0 ) ? 'YES' : 'NO'
}

function main() {
  const s = readLine();
  let result = gameOfThrones(s);
  // let result = gameOfThrones('cdefghmnopqrstuvw');
  // result = gameOfThrones('cdcdcdcdeeeef');
  // result = gameOfThrones('aaabbbb');
}


function readLine() {
  return inputString[currentLine++];
}
let reader = fs.createReadStream('gameofthrones05.txt');
reader.on('data', function (chunk) {
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});
