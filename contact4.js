'use strict';

// https://www.hackerrank.com/challenges/contacts/problem

const fs = require('fs');
const { finished } = require('stream');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

const value = ''

/*
 * Complete the contacts function below.
 */
class Node {
  constructor() {
    this.children = {}
    this.words_in_subtree = 0
  }
}

function insert(new_name, contacts) {
  let current_position = contacts
  for (let index in new_name) {
    let letter = new_name[index]
    if (!current_position.children[letter]) {
      current_position.children[letter] = new Node()
    }
    current_position.children[letter].words_in_subtree += 1
    current_position = current_position.children[letter]
  }
}


function search(search_term, contacts) {
  let current_position = contacts
  for (let index in search_term) {
    let letter = search_term[index]
    if (!current_position.children[letter]) {
      return 0
    }
    current_position = current_position.children[letter]
  }
  return current_position.words_in_subtree
}


function contacts(queries, ops) {

  let number_of_operations = ops
  let root = new Node()

  let results = []
  for (let x = 0; x < number_of_operations; x++) {
    const command = queries[x][0]
    const value = queries[x][1]
    if (command === 'add') {
      insert(value, root)
    } else if (command === 'find') {
      //console.log('find', value)
      //console.log(root)
      let sum = search(value, root)
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
