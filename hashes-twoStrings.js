// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps



'use strict';

const fs = require('fs');
const {
  mainModule
} = require('process');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;




function twoStrings(s1, s2) {
  // console.log('-------------------------')
  const set1 = new Set(s1.split(''))
  const set2 = new Set(s2.split(''))
  let isSubs = false
  let smaller = set1
  let greater = set2
  if (set2.size < set1.size) {
    smaller = set2
    greater = set1
  }
  for (let member of smaller) {
    // console.log(member)
    if (greater.has(member)) {
      isSubs = true
      break
    }
  }
  if (isSubs) {
    return 'YES'
  } else {
   return 'NO'
  }
  //console.log(set1,set2)
}



function main() {
  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s1 = readLine();

    const s2 = readLine();

    let result = twoStrings(s1, s2);


  }
}


function readLine() {
  return inputString[currentLine++];
}
let reader = fs.createReadStream('twoString-input00.txt');
reader.on('data', function (chunk) {
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});
