'use strict';

const fs = require('fs');
const {
  mainModule
} = require('process');

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

let callCount = 0
const corruptos = {}


function minimumBribes(q) {
  let bribs = 0;
  let min = q.length;
  for (var position = q.length - 1; position >= 0; position--) {
    const actualNumber = q[position]
    const nextIndex = position + 1
    if (actualNumber - position > 3) {
      return console.log(`Too chaotic`);
    }
    if (actualNumber > nextIndex) {
      bribs += (actualNumber - nextIndex);
    } else {
      if (min > actualNumber) {
        min = actualNumber;
      } else if (actualNumber != min) {
        bribs++;
      }
    }
  }

  console.log(bribs)
}


function minimumBribes3(q) {
  // console.log('INPUT', q)
  const n = q.length
  let min = q.length
  let bribs = 0
  for (var position = n - 1; position >= 0; position--) {
    const actualNumber = q[position]
    // const nextNumber = q[position - 1]
    const nextIndice = position + 1
    const next3Number = q[position - 3]
    
    // check chaotic
    if (actualNumber - position > 3) {
      return console.log('Too chaotic')
    }
    // console.log(`proximo ${nextNumber}`, `atual ${actualNumber}`)
    if (actualNumber > nextIndice) {
      /* console.warn('   se o atual for maior que o proximo')
      console.warn(`   tamanho do array ${n}  - posicao atual ${position} = ${n - position}`)
      // atual 3, proximo 5
      console.warn(`   >> actualNumber ${actualNumber}`)
      console.warn(`   >> actualIndice ${position}`)
      console.warn(`   >> nextNumber ${nextNumber}`)
      console.warn(`   >> nextIndice ${nextIndice}`)
      console.warn(`   >> iterated ${iterated}`)
      
      
      console.warn(`   >> total array ${n}`)*/
      bribs += (actualNumber - (position + 1))
      
    } else {
      if (min > actualNumber) {
        min = actualNumber;
      } else if (actualNumber != min) {
        bribs++;
      }
    }
    
    
  }
  
  console.warn(`${bribs}`)
  // callCount = callCount + 1
}

function minimumBribes2(q) {
  // console.log(q)
  const n = q.length
  let totalNumberBribs = 0

  for (let position = 0; position < n; position++) {

    const actualNumber = q[position]

    const actualPosition = position + 1

    const nextNumber1 = q[position + 1]
    const nextNumber2 = q[position + 2]
    const nextNumber3 = q[position + 3]

    let bribs = 0

    if (actualNumber > nextNumber1 && actualNumber > nextNumber2 && actualNumber > nextNumber3) {
      bribs = 3
      console.log('Too chaotic')
      return
    } else {
      for (let y = actualPosition; y < n; y++) {
        const nextNumber = q[y]
        if (actualNumber > nextNumber) {
          bribs = bribs + 1
          if (bribs === 3) {
            console.log('Too chaotic')
            return
          }
        }
      }
      if (bribs > 0) {
        totalNumberBribs = totalNumberBribs + bribs
        if (bribs > 2) {
          console.log('Too chaotic')
          return
        }
      }
    }
  }
  console.log(totalNumberBribs)

  // callCount = callCount + 1
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);
    corruptos[`test_${tItr}`] = {}
    const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

    minimumBribes3(q);
  }
  // console.log(corruptos)
  for (let testName in corruptos) {
    const test = corruptos[testName]
    // console.log(testName, test)
  }
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
