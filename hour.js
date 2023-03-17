function lonelyinteger (a) {
  // Write your code here
  // console.log(a)
  const cache = new Map()
  for (let x = 0; x < a.length; x++) {
    const num = a[x].toString()
    // console.log('num', num)
    const mapNum = cache.get('' + num)
    // console.log('mapNum', mapNum)
    if (mapNum) {
      cache.set('' + num, parseInt(mapNum) + 1)
    } else {
      cache.set('' + num, 1)
    }
    // console.log('------------')
  }
  let found = null
  for (const [key, value] of cache) {
    // console.log(key + ' = ' + value)
    if (value === 1) {
      found = key
      break
    }
  }
  return found
}

// console.log(lonelyinteger([4, 9, 95, 93, 57, 4, 57, 93, 9]))

function diagonalDifference (arr) {
  let pd = 0
  let sd = 0
  for (let x = 0; x < arr.length; x++) {
    const ar = arr[x]
    const priDiagNum = ar[x]
    const secDiagNum = ar[ar.length - x - 1]
    pd += priDiagNum
    sd += secDiagNum
  }
  const dif = Math.abs(pd - sd)
  return dif
}
// console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]))

function countingSort (arr) {
  // Write your code here
  const range = 100
  console.log('range ', range)
  const result = []
  for (let i = 0; i < range; i++) {
    // result.push(0)
    result.push(0)
  }
  console.log('result.length', result.length)
  for (let i = 0; i < arr.length; i++) {
    // result.push(0)
    result[arr[i]] = result[arr[i]] + 1
  }
  return result
}

/**
 function countingSort (arr) {
  // Write your code here
  const range = Math.max(...arr)
  console.log('range ', range)
  const result = Array(range + 1).fill(0)
  console.log(result)
  for (let i = 0; i < arr.length; i++) {
    // result.push(0)
    result[arr[i]] = result[arr[i]] + 1
  }
  console.log(result)
  return result
}
 */
// [1, 1, 1, 2, 3]
// console.log(countingSort([1, 1, 3, 2, 1]))

// 63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75, 52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37, 97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84, 60, 35, 58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96, 7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6, 5, 24, 49, 82

function flippingMatrix (matrix) {
  // Write your code here
  return matrix
}

console.log(flippingMatrix([
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
]))
