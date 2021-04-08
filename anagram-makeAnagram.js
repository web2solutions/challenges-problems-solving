'use strict';

// https://www.hackerrank.com/challenges/making-anagrams/problem

const fs = require('fs');
const {
  mainModule
} = require('process');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;


// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
  const totalChars = s1.length + s2.length
  const dict1 = new Map()
  let minString = null
  let maxString = null
  if (s1.length > s1.length) {
    maxString = s1
    minString = s2
  } else {
    maxString = s2
    minString = s1
  }

  let mapExtracts = 0
  let keep = 0
  for (let index = 0; index < minString.length; index++) {
    const char = minString[index]
    if (dict1.get(char)) {
      continue
    }
    // this char must be part or maxString too
    if (maxString.indexOf(char) > -1) {
      let differ = 0
      const nOccur1 = minString.split(char).length - 1
      const nOccur2 = maxString.split(char).length - 1
      differ = Math.abs(nOccur1 - nOccur2)
      mapExtracts = mapExtracts + differ
      keep = keep + (Math.min(nOccur1, nOccur2) * 2 )
      dict1.set(char, (Math.min(nOccur1, nOccur2) * 2 ))
    }
  }
  return totalChars - keep
}


function main() {
  const s1 = readLine()

  const s2 = readLine()

  let result = makingAnagrams(s1, s2)

  console.log(result)
}


function readLine() {
  return inputString[currentLine++];
}
let reader = fs.createReadStream('anagram00.txt');
reader.on('data', function (chunk) {
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});
