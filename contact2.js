'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';


/*
 * Complete the contacts function below.
 */


function contacts(queries) {

  let allContacts = " "
  // consolelog(queries)
  const results = []

  for (let x = 0; x < queries.length; x++) {
      const command = ''+queries[x][0]
      const value = ''+queries[x][1]

    if (command === 'add') {
        allContacts = allContacts + " " + value
    } else if (command === 'find') {
      let result = 0
      if (value.length === 1) {
        result = allContacts.match(new RegExp("\\b(" + value + "+)", 'g')) || []
      }
      else {
        result = allContacts.match(new RegExp("\\b(" + value + "+)", 'g')) || []
      }
      console.log(result)
      // console.log(allContacts.match(new RegExp("(" + value + "+)", 'g')))
      
      if (x > 500) {
        // console.log('find where', allContacts)
        console.log('find what', value)
        console.log(value, result.length)
      }
      
      // let found = allContacts.split(new RegExp(`${value}`)).length -1
      results.push(result.length)
    }
  }
  results.forEach((r, i) => {
    console.log(`${i+1} -> ${r}`)
  })
  // consolelog('results', results)
  return results
}


let reader = fs.createReadStream('input03.txt');
const writer = fs.createWriteStream('output03.txt');
writer.on('data', function (chunk) { 
  console.log('writer', chunk.toString())
});
reader.on('data', function (chunk) { 
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.trim().split('\n').map(str => str.trim().split(" "))
  inputString.shift()
  
  const result = contacts(inputString)
  // console.log(result)
  
  writer.write(result.join("\n") + "\n");

  writer.end();
  process.exit(0)
});
