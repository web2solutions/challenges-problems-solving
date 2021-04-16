'use strict';

// https://www.hackerrank.com/challenges/new-year-chaos/problem

const fs = require('fs');
const { mainModule } = require('process');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;


/*
 * Complete the contacts function below.
 */
const allBribs = []
const allChaos = []
let minbrib = 0
let fchaos = false

function minimumBribes(q) {
  const n = q.length
  let subornos = {}
  for (let position = 0; position < n; position++) {
    
    let bribs = 0
    
    const pnumber = q[position]
    const actualPosition = position + 1

    for (let y = actualPosition; y < n; y++) {
      const nnumber = q[y]
      if (pnumber > nnumber) {
        bribs = bribs + 1
      }
    }
    if(bribs > 0) subornos['n_'+pnumber] = bribs
    // console.log(pnumber, bribs)
  }
  // console.log(subornos)
  let isChaotic = false
  let minbribs = 0
  for (let key in subornos) {
    if (subornos[key] >= 2) {
      isChaotic = true;
    }
    minbribs = minbribs + subornos[key]
    
  }
  allChaos.push(isChaotic)
  allBribs.push(minbribs)
  //console.log(minbribs)
  //if(isChaotic) console.log('Too chaotic')
  
  //console.log(allBribs)
  //console.log(allChaos)
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

    minimumBribes(q);
  }
  console.log(allBribs, allChaos)
  for (let x = 0; x < allBribs.length; x++) {
    const brib = allBribs[x]
    if (x === 0) {
      minbrib = brib
    }

    if (brib < minbrib) {
      minbrib = brib
    }

    if (allChaos[x]) {
      console.log('Too chaotic')
    }
  }

  console.log(minbrib)
  // if (fchaos) console.log('Too chaotic')
}


function readLine() {
  return inputString[currentLine++];
}
let reader = fs.createReadStream('bribinput01.txt');
reader.on('data', function (chunk) {
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.replace(/\s*$/, '')
        .split('\n')
    .map(str => str.replace(/\s*$/, ''));
  
  main()
});
