'use strict';


// https://www.hackerrank.com/challenges/contacts/problem

const fs = require('fs');

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

function Node(data) {
  this.data = data
  this.isEndOfWord = false
  this.children = {}
}

function Trie() {
  this.root = new Node()
}

Trie.prototype.search = function () {
  
}

Trie.prototype.insert = function (word) {
  let node = this.root
  for (let char of word) {
    if (node[char] == null) {
      node[char] = {}
    }
    node = node[char]
  }
  node.isEndOfWord = true
}

const cache = new Map()
let allContacts = " "

function setCache(key, value) {
  // console.log(`>>> set cache ${key}: ${value}`)
  cache.set(key, value)
}

function getCache(key) {
  let value = null
  if (cache.get(key)) {
    return cache.get(key)
  }
  for (var k of cache.keys()) {
    // console.log(k)
    if (k.indexOf(key) === 0) {
      value = cache.get(k)
      break
    }
  }
  return value
}

function add(value) {
  allContacts = allContacts + " " + value
}

function search(value) {
  if (allContacts === ' ') {
    return 0
  }
  
  let sum = getCache(value)
  if (sum === null) {
    // there is no cache
    if (value.length === 1) {
      sum = (allContacts.match(new RegExp("\\b"+value+"(\\w*)?", 'g')) || []).length
    } else {
      sum = allContacts.split(` ${value}`).length -1
    }
    //set cache
    setCache(value, sum)
  }
  return sum
}

function contacts(queries) {
  let results = []
  for (let x = 0; x < queries.length; x++) {
    const command = '' + queries[x][0]
    const value = '' + queries[x][1]
    if (command === 'add') {
      add(value)
    } else if (command === 'find') {
      // console.log('find', value)
      let sum = search(value)
      results.push(sum)
      console.log(sum)
    }
  }
  console.log(allContacts)
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


let reader = fs.createReadStream('input02.txt');
reader.on('data', function (chunk) {
  inputString += chunk.toString()
});
reader.on("end", () => {
  inputString = inputString.trim().split('\n').map(str => str.trim().split(" "))
  inputString.shift()

  const result = contacts(inputString)

  process.exit(0)
});
