'use strict';

// https://www.hackerrank.com/challenges/sparse-arrays/problem

const fs = require('fs');
const {
  mainModule
} = require('process');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;


// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
  const total = []
  const dict = new Map()
  for (let index = 0; index < strings.length; index++) {
    const word = strings[index]
    let occurs = dict.get(word)
    if (occurs) {
      occurs = occurs + 1
    } else {
      occurs = 1
    }
    dict.set(word, occurs)
  }
  for (let index = 0; index < queries.length; index++) {
    const word = queries[index]
    let occurs = dict.get(word) || 0
    total.push(occurs)
  }
  return total
}


function matchingStrings2(strings, queries) {
  // console.log(strings, queries)
  const  str  = ',' + strings.join(',') + ','
  const total = []
  /* const dict = new Map()
  for (let index = 0; index < strings.length; index++) {
    const word = strings[index]
    let occurs = dict.get(word)
    if (occurs) {
      occurs = occurs + 1
    } else {
      occurs = 1
    }
    dict.set(word, occurs)
  }*/
  console.log('----------', str)
  for (let index = 0; index < queries.length; index++) {
    const word = queries[index]
    let occurs = str.split(`,${word},`).length - 1
    console.log(word, occurs)
    total.push(occurs)
  }
  // console.log(dict)
  return total
}



function main() {
  const stringsCount = parseInt(readLine(), 10);

  let strings = [];

  for (let i = 0; i < stringsCount; i++) {
    const stringsItem = readLine();
    strings.push(stringsItem);
  }

  const queriesCount = parseInt(readLine(), 10);

  let queries = [];

  for (let i = 0; i < queriesCount; i++) {
    const queriesItem = readLine();
    queries.push(queriesItem);
  }

  let res = matchingStrings(strings, queries);

  console.log(res)
}


function readLine() {
  return inputString[currentLine++];
}
let reader = fs.createReadStream('sparseArray00.txt');
reader.on('data', function (chunk) {
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});
