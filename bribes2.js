const allBribs = []
const allChaos = []
const printedBibs = {}
function minimumBribes(q) {
  const n = q.length
  let subornos = {}
  for (let position = 0; position < n; position++) {
    
    let bribs = 0
    
    const pnumber = q[position]
    const actualPosition = position + 1

    for (let y = actualPosition; y < n; y++) {
      const nnumber = q[y]
      if (pnumber > nnumber) {
        bribs = bribs + 1
      }
    }
    if(bribs > 0) subornos['n_'+pnumber] = bribs
    // console.log(pnumber, bribs)
  }
  // console.log(subornos)
  let isChaotic = false
  let minbribs = 0
  for (let key in subornos) {
    if (subornos[key] >= 2) {
      isChaotic = true;
    }
    minbribs = minbribs + subornos[key]
    
  }
  allChaos.push(isChaotic)
  allBribs.push(minbribs)
  //console.log(minbribs)
  //if(isChaotic) console.log('Too chaotic')
  
  //console.log(allBribs)
  //console.log(allChaos)
}

minimumBribes([ 2, 1, 5, 3, 4 ])
minimumBribes([2, 5, 1, 3, 4])

let minbrib = 0
  let fchaos = false
for (let x = 0; x < allBribs.length; x++) {
  const brib = allBribs[x]
  if (x === 0) {
    minbrib = brib
    if (allChaos[x]) {
      fchaos = true
    }
  }
  
  if (brib < minbrib) {
    minbrib = brib
    if (allChaos[x]) {
      fchaos = true
    }
    // console.log(allChaos[x])
  }
}
console.log(minbrib)
if(fchaos) console.log('Too chaotic')
