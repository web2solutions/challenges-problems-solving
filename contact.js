'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';


/*
 * Complete the contacts function below.
 */


function contacts(queries) {
  const allContacts = new Map()
  const results = []
  function findContacts (val) {
    let found = 0
    for (let key of allContacts.keys()) {
      if (key.indexOf(val) == 0 ) {
        found += +1
      }
    }
    results.push(found)
  }
  for (let x = 0; x < queries.length; x++) {
    if (queries[x]) {
      const command = queries[x][0]
      const value = queries[x][1] || false

      if (command === 'add') {
        allContacts.set(value, '')
      } else if (command === 'find') {
        findContacts(value)
      }
    }
  }
  results.forEach((r, i) => {
    console.log(`${i+1} - ${r}`)
  })
  return results
}


let reader = fs.createReadStream('input03.txt'); 
reader.on('data', function (chunk) { 
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.trim().split('\n').map(str => str.trim().split(" "))
  inputString.shift()
  
  contacts(inputString)
});
