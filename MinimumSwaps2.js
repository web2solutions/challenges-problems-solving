const merge = (arr1, arr2) => {
  let sorted = [];
  let swaps = 0
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
    swaps++
  };
  // console.log(arr1.length, arr2.length)
  if (arr1.length) {
    // sorted.push(arr1[0])
    swaps++
  }
  if (arr2.length) {
    // sorted.push(arr2[0])
    swaps++
  }
  // console.log(sorted)
  return [...sorted, ...arr1, ...arr2]
};

// console.log(merge([2, 5, 10, 57], [9, 12, 13]));


/**
 * Find the minimum number of swaps
 * @param {Array} arr
 */
const minimumSwaps = (arr) => {
  // min swap counter
  let minSwapCount = 0;
  // Loop through array
  for (let i = 0; i < arr.length; i++) {
    // swapsCounter() returns 1 if there is a swap
    // add that to the minSwapCount
    minSwapCount += swapsCounter(arr, i);
  }
  // return the accumplated number of swaps
  return minSwapCount;
}

/**
 * This is a helper function that allows us to check and swap
 * elements around whilst inside the for..loop upstairs
 *
 * @param {Array} arr array
 * @param {number} i iterator
 */
const swapsCounter = (arr, i) => {
  // setup swap counter
  let swapsCount = 0,
    // current item in array
    currentElement = arr[i],
    // targetElement it for swap
    targetElement = arr[currentElement - 1];
  // keep doing this operation
  // untill current number is not equal to the targetElement
  while (currentElement !== targetElement) {
    // set the element at arr[i] to the targetElement number
    arr[i] = targetElement;
    // then set the element at the position of the
    // the position of current number - 1 in the original arr
    arr[currentElement - 1] = currentElement;
    // this is a swap so increment the counter by 1
    swapsCount++;
    // leave array manipulation and set variables
    // set the current number to the targetElement
    currentElement = targetElement;
    // set the targetElement to the current number
    targetElement = arr[currentElement - 1];
  }
  // return swap count
  return swapsCount
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))
