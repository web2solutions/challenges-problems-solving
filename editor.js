'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';


/*
 * Complete the contacts function below.
 */

function getAction(letter) {
  switch (+letter) {
    case 1:
      return 'append'
      break
    case 2:
      return 'delete'
      break
    case 3:
      return 'print'
      break
    case 4:
      return 'undo'
      break
    default:
      return false
  }
}

function processData(queries) {
  // console.log(queries)
  for (let x = 0; x < queries.length; x++) {
    const command = getAction(queries[x][0])
    if (command) {
      console.log(command)
      const value = queries[x][1] || null
      console.log(command, value)
      console.log('queries[x]', queries[x])
      console.log('--------')
    }
  }
  return []
} 


let reader = fs.createReadStream('editor.txt');
const writer = fs.createWriteStream('editoroutput.txt');
writer.on('data', function (chunk) { 
  // console.log('writer', chunk.toString())
});
reader.on('data', function (chunk) { 
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.trim().split('\n').map(str => str.trim().split(" "))
  
  
  
  const result = processData(inputString)
  // console.log(result)
  
  writer.write(result.join("\n") + "\n");

  writer.end();
  process.exit(0)
});
