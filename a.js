

const { performance, PerformanceObserver } = require('perf_hooks')

function someFunction1 () {
  let counter = 0

  while (counter <= 10) {
    // console.log(counter)
    counter += 1
  }
}

function someFunction2 () {
  let counter = 0
  while (counter <= 11) {
    // console.log(counter)
    counter += 1
  }
}


let wrapped1 = performance.timerify(someFunction1)
let wrapped2 = performance.timerify(someFunction2)
let obs = new PerformanceObserver(list => {
  console.log(list.getEntries()[0].duration)
  // obs.disconnect()
})
obs.observe({ entryTypes: ['function'] })

// A performance timeline entry will be created
wrapped1()
wrapped2()


