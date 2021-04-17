// https://www.hackerrank.com/challenges/new-year-chaos/problem

function minimumBribes(q) {
  // console.log('--->', q)
  let subornos = []
  for (let position = 0; position < q.length; position++) {
    let bribs = 0
    const pnumber = q[position]
    console.log(pnumber, q[position + 1])
    const actualPosition = position + 1
    for (let y = actualPosition; y < q.length; y++) {
      const nnumber = q[y]
      if (pnumber > nnumber) {
        bribs = bribs + 1
      } else {
        break
      }
    }
    if (bribs > 0) {
      subornos.push(bribs)
    }
    // console.log(pnumber, bribs)
  }
  let bribs = 0
  let isChaotic = false
  for (let x = 0; x < subornos.length; x++) {
    bribs = bribs + subornos[x]
    console.log(subornos[x])
    if (subornos[x] >= 2) {
      isChaotic
    }
  }
  console.log(bribs)
  if (isChaotic) console.log('Too chaotic')
}

minimumBribes([2, 5, 1, 3, 4])
