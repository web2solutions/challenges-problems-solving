/**
 Hackerrank certification question

 An anagram of a string is another string with the same characters in the same frequency, in any order. For example ‘abc’, ‘acb’,‘bca’,‘cab’,‘cba’,‘bac’ all are anagrams of ‘abc’.Given two arrays of strings, for every string in one list, determine how many anagrams of it are in the other list.
Write a function that receives dictionary and query, two string arrays. It should return an array of integers where each element 'i’contains the number of anagrams of query[i] that exist in dictionary.

Example

dictionary = [‘hack’, ‘a’, ‘rank’,‘khac’,‘ackh’, ‘kran’,‘rankhacker’, ‘a’, ‘ab’, ‘bo’, ‘stairs’, ‘raits’]

query = [“a”, “nark”, “bs”, “hack”, “stair”)

query[0] =“a” has 2 anagrams in dictionary: ‘a’ and ‘a’.

query[1]= “nark” has 2 anagrams in dictionary: ‘rank’ and ‘kran’.

query[2] = “bs” has 0 anagrams in dictionary

query[3] = “hack” has 3 anagrams in dictionary. ‘hack’, ‘khac’ and ‘ackh’.

query[4] = “stair” has 1 anagram in dictionary: ‘raits’

While the characters are the same in stairs, the frequency of 's’differs, so it is not an anagram.

The final answer is [2, 2, 0, 3, 1].

stringAnagram has the following parameters:

string dictionary[n]: an array of strings to search

in
string query[q]: an array of strings to search for

Returns

int[q]: an array of integers where the value is the answer to query[i].

Constraints

• 1<= length(dictionary), length(query) <= 10^5

• Every string consists of lowercase English letters.
 */


var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Couting words')
const chalk = require('chalk')

console.log('------ prepare data')


let total = 10000000 // 10 million

const words = []
for (let x = 0; x <= total; x++) {
  // console.log(x)
  words.push(Math.random().toString(36).substring(7))
}

console.log('------ starting perf')

// working
function stringAnagram(dictionary, query) {
    let totalOcurs = []
    const dictAnag = dictionary.map(w => (w.split("").sort().join("")))
    //console.log('frase: ', dictAnag.join(" "))
    for(let y = 0; y < query.length; y++){
        
        //console.log('wordAnagram: ', wordAnagram)
        let ocurs = 0
        if (query[y].length === 1) {
            ocurs = 0
            for(let j = 0; j < dictAnag.length; j++){
                if (dictAnag[j] === query[y]){
                    ocurs = ocurs + 1
                }
            }
            totalOcurs.push(ocurs)
        } else {
            const wordAnagram = query[y].split("").sort().join("")
            ocurs = dictAnag.join(" ").split(wordAnagram).length - 1
            totalOcurs.push(ocurs)
        }
        // const ocurs = dictAnag.join(" ").split(wordAnagram).length - 1
        //console.log('ocurs', ocurs)
        
    }
    //console.log('totalOcurs', totalOcurs)
    return totalOcurs
}
console.log(stringAnagram(['hack', 'a', 'rank', 'khac', 'ackh', 'kran', 'rankhacker', 'a', 'ab', 'ba', 'stairs', 'raits'], ["a", "nark", "bs", "hack", "stair"]))



function countSentences(wordSet, sentences) {
    // console.log(wordSet, sentences)
    let ocur = []
    for(let x = 0; x < sentences.length; x++){
        const sentence = sentences[x]
        // console.log('sentence 1')
        const seqAnan = sentence.split(" ").map(words => {
            return words.split("").sort().reverse().join("")
        }).join(" ")
        let oc = 0
        for(let y = 0; y < wordSet.length-1; y++){ 
            const word = wordSet[y]
            const anag = word.split("").sort().reverse().join("")
            //console.log(word.split("").sort().reverse().join(""), anag)
            // console.log(seqAnan.split(anag).length -1)
            oc = oc + seqAnan.split(anag).length -1
        }
        ocur.push(oc)
    }
    return ocur
}
console.log(countSentences(
  ['hack', 'a', 'rank', 'khac', 'ackh', 'kran', 'rankhacker', 'a', 'ab', 'ba', 'stairs', 'raits'],
  ["a", "nark", "bs", "hack", "stair"]
))


return


// add tests
suite
    .add('get max number using array.reduce and Math.max', function () {
        function someFunction1() {
            const maxNummber = numbers.reduce((a, c) => {
                return Math.max(c, a)
            }, 0)
            return maxNummber
        }
        someFunction1()
    })
    .add('get max number using array.reduce and simple number comparison', function () {
        function someFunction2() {
            const maxNummber = numbers.reduce((a, c) => {
                return c > a ? c : a
            }, 0)
            return maxNummber
        }
        someFunction2()

    })
    /* DONT SCALES WITH BIG ARRAYS - out of memory
        .add('get max number using spread ES6 operator', function () {
        function someFunction3() {
            return Math.max(...numbers)
        }
        someFunction3()
    }) */
    /* Tooo slow WITH BIG ARRAYS
        .add('get max number using array sort', function () {
        function someFunction3 () {
            return numbers.sort()[numbers.length - 1]
        }
        someFunction3()
    }) */
    .add('get max number using simple for statement', function () {
        function someFunction4 () {
            let maxNummber = 0
            for (let x = 0; x < numbers.length; x++) {
                const n = numbers[x]
                if (n > maxNummber) {
                    maxNummber = n
                }
            }
            return maxNummber
        }
        someFunction4()
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(chalk.magenta(String(event.target)))
    })
    .on('complete', function () {
        // console.log(this.filter('fastest'))
        const fastest = this.filter('fastest')
        console.log(chalk.green('Fastest is ' + fastest.map('name')))

        function compare(a, b) {
            if (a > b)
                return (a / b * 100).toFixed() + '% faster';
            if (a == b)
                return "the same";
            return (b / a * 100).toFixed() + '% slower';
        }
        console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.map('hz'), this[0].hz)} than ${this[0].name}`));
        console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.map('hz'), this[1].hz)} than ${this[1].name}`));
    })
    // run async
    .run({
        async: true
    })
