'use strict';

const fs = require('fs');
const { finished } = require('stream');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

const value = ''

/* console.log(JSON.stringify(value).length)


const typeSizes = {
  "undefined": () => 0,
  "boolean": () => 8,
  "number": () => 8,
  "string": item => 2 * item.length,
  "object": item => !item ? 0 : Object
    .keys(item)
    .reduce((total, key) => sizeOf(key) + sizeOf(item[key]) + total, 0)
};



const type = typeof value

const sizeOf = value => typeSizes[type](value)
console.log(sizeOf(value))

return */

/*
 * Complete the contacts function below.
 */

const trie = {

}

function insert(word) {
  // console.log('insert word', word)
  let str = word
  if (str) {
    // console.log(`trie `, str)
    if (!trie[str]) {
      trie[str] = 0
    }
    for (let node in trie) {
      if (str.indexOf(node) === 0) {
        trie[node] += 1 
      }
    }
  }
    
  // console.log(trie)
}

function search(word) {
  // console.log('search', word)
  if (Object.keys(trie).length === 0) {
    return 0
  }
  let sum = 0
  for (let node in trie) {
    if (node.indexOf(word) === 0) {
      sum += 1
    }
  }
  return sum
}

function contacts(queries, ops) {
  let results = []
  for (let x = 0; x < queries.length; x++) {
    const command = '' + queries[x][0]
    const value = '' + queries[x][1]
    if (command === 'add') {
      insert(value)
    } else if (command === 'find') {
      // console.log('find', value)
      let sum = search(value)
      results.push(sum)
      console.log(sum)
    }
  }
  // console.log(trie)
  // console.log('cache', cache)
  return results
}



//////   

/**
 * nui1
 * nui2
 * nui
// se chave do map comecar com value procurado
//    se o valor procurado.lenght < que chave do Map atual.length 
//        entao soma é igual a soma de todos os values de todas as chaves que comecam com o valor procurado
*/


let reader = fs.createReadStream('input01.txt');
reader.on('data', function (chunk) {
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.trim().split('\n').map(str => str.trim().split(" "))
  let ops = inputString.shift()

  const result = contacts(inputString, ops)

  process.exit(0)
});
