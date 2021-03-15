let swaps = 0
function heapSort(arr) {
  let m = arr.length;
  for(let index = Math.floor(m/2) - 1 ; index >= 0; index--){
      max_heapify(arr,index,m);            //Building max heap
  }
  for(let index = m-1;index>=0;index--){
      swap(arr,0,index);              //Deleting root element
      max_heapify(arr,0,index);           //Building max heap again
  }
  return arr;
}

function max_heapify(arr,index,m){
  let left = 2*index;              //Left child index
  let right = 2*index+1;           //Right child index
  let maximum;
  if (right < m) {                 //Checks if right child exist
    if (arr[left] >= arr[right]) {    //Compares children to find maximum
      maximum = left;
    }
    else {
      maximum = right;
    }
  }
  else if (left < m) {                //Checks if left child exists
    maximum = left;
  }
  else {
    return //In case of no children return
  }
  if(arr[index] < arr[maximum]){            //Checks if the largest child is greater than parent
      swap(arr, index, maximum);          //If it is then swap both
      max_heapify(arr, maximum, m);       //max-heapify again
  }
  return;
}
let last = null
function swap(arr, index, index2) {                 //Swap function
  let temp;
  //if (last !== arr[index2]) {
    
  //}
  last = arr[index2]
  temp = arr[index];
  arr[index] = arr[index2];
  arr[index2] = temp;
  
}

let arr = [7, 2, 3]
// 2, 7, 3, 3
// 2, 3, 7, 3
// 2, 3, 3, 7
ar = heapSort(arr);
console.log(ar, swaps);
