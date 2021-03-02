let Benchmark = require('benchmark')
let suite = new Benchmark.Suite('Couting words')
const chalk = require('chalk')

// console.log('------ prepare data')
const STR = '1 2 5 3 6 4'

const commands = [
  ['add', 'hack'],
  ['add', 'hackerrank'],
  ['find', 'hac'],
  ['find', 'hak'],
  ['find', 'hac'],
  ['add', 'hack'],
  ['find', 'hac']
]


function contacts2 (queries) {
  const allContacts = new Map()
  const results = []
  function findContacts (val) {
    let found = 0
    for (let key of allContacts.keys()) {
      if (key.indexOf(val) > -1 ) {
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
  return results
}
console.log(contacts2(commands))

return

// add tests
suite
    .add('contacts using string', function () {
      function contactsString(queries) {
        // console.log(queries)
        let allContacts = " "
        // consolelog(queries)
        const results = []

        for (let x = 0; x < queries.length; x++) {
            const command = ''+queries[x][0]
            const value = ''+queries[x][1]

            if (command === 'add') {
              allContacts = allContacts + " " + value
            } else if (command === 'find') {
              // let reg = new RegExp(` ${value}`)
              let found = allContacts.split(value).length -1
              results.push(found)
            }
        }
        // consolelog('results', results)
        return results
      }
      contactsString(commands)
    })
    .add('contacts using array', function () {
      function contacts (queries) {
        const allContacts = []
        const results = []
        function findContacts (val) {
          let found = 0
          for (let x = 0; x < allContacts.length; x++) {
            if (allContacts[x].indexOf(val) > -1) {
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
              allContacts.push(value)
            } else if (command === 'find') {
              findContacts(value)
            }
          }
        }
        return results
      }
      contacts(commands)
    })
  
    .add('contacts using Map', function () {
      function contacts (queries) {
        const allContacts = new Map()
        const results = []
        function findContacts (val) {
          let found = 0
          
          for (let key of allContacts.keys()) {
            if (key.indexOf(' '+val) > -1 ) {
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
        return results
      }
      contacts(commands)
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
        //// console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.dictionary('hz'), this[0].hz)} than ${this[0].name}`));
        //// console.log(chalk.blue(`get max number using simple for statement is ${compare(fastest.dictionary('hz'), this[1].hz)} than ${this[1].name}`));
    })
    // run async
    .run({
        async: true
    })
