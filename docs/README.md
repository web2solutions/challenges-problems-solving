# Solucionando desafios e problemas com algorítimos.

**Guia básico de `Estrutura de Dados` para desenvolvedores Javascript de lingua portuguesa.**

O mercado nunca esteve tão bom para desenvolvedores front end, back end, full stack e engenheiros de sofwares.

A maioria dos testes técnicos aplicados em plataformas como `Hacker Rank` e `Code Signal`, são `gamificados`. Eles simulam problemas hipotéticos do dia á dia para serem solucionados através de algorítimos.

Em alguns casos, o próprio enumerado do problema já esconde algum tipo de `pegadinha` para te fazer perder o foco no que mais importa nesse `jogo`:

1. `Entender do que se trata o problema.`
2. `Entender qual tipo de Estrutura de Dados o problema está lidando.`
3. `Entender como os dados estão organizados.`
4. `Entender qual o volume de dados em que o problema está lidando.`

Em alguns outros casos, o próprio fato de estar usando a linguagem Javascript nos testes, já te deixa em desvantagem com relação á desenvolvedores usando linguagens como `C`, `C++`, `Java` e outras.


## Estrutura de dados

1. String
2. Array
3. Linked List
4. tries
5. hashmap / hashtable
6. binary tree


  - starts on 1 ends in m
  - the root is the indice 1
  - the parent of any indice is Math.floor(indice / 2). The indice one does not have parent
  - the left child of a p indice is 2p (only if 2p <= m)
  - the right child of a p indice is 2p+1 (only if 2p + 1 <= m)
  - the number of levels of a vector is 1 + lg(m), where lg(m)  -> floor(log m) -> Math.floor(Math.log(m))



## Arrays


### Search Strategies

Searching on arrays have multiple scenarios and you should ask yourself some questions like:

1. Is the given array a sorted array?
2. Do you know, `more or less`, where the item which you are searching for is located at? In the beginning or in the end of the given array?
2. What is the lenght of given array?

***`Scenario 1:`***

***Sorted*** array with desired number at the begining of the array

***`Scenario 2:`***

***Sorted*** array with desired number at the end of the array

***`Scenario 3: `***

***unknow order*** array

### Sorted arrays

**Problem**

`Given an SORTED` *arr* `array of numbers, find the index of the `**x** `number`


#### Linear search 

`Best case` -> **desired number in the beginning of array**

**Solution**

Description: `Start on 0 index and make a comparison on each index until n.`

Time: `O(n)`

<p class="codepen" data-height="537" data-theme-id="dark" data-default-tab="js" data-user="web2solutions" data-slug-hash="wvobaVo" style="height: 537px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Busca linear - melhor cenário">
  <span>See the Pen <a href="https://codepen.io/web2solutions/pen/wvobaVo">
  Busca linear - melhor cenário</a> by Eduardo Almeida (<a href="https://codepen.io/web2solutions">@web2solutions</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br><br>



`Worst case` ->  **desired number in the end of array**

Used When desired number is in the enf of the given array

if element Found at last O(n) to O(1)

if element Not found O(n) to O(n/2)

**Solution**

Use 2 index pointers: left and right

Start on 0 index (left) AND n-1 index (right)

Make a comparison with both

Go to next left and right numbers until you find `x` OR ( left <= right === true)

0 <= left <= right (n-1)

<p class="codepen" data-height="633" data-theme-id="dark" data-default-tab="js" data-user="web2solutions" data-slug-hash="dyOEYXb" style="height: 633px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="dyOEYXb">
  <span>See the Pen <a href="https://codepen.io/web2solutions/pen/dyOEYXb">
  dyOEYXb</a> by Eduardo Almeida (<a href="https://codepen.io/web2solutions">@web2solutions</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br><br>

#### Binary Search

Description: `Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.`

Time: O(Log n)



### Sorting Strategies

- Almost sorted array


- Not known order of array

Merge sort: O(n log n)

- Sorted array

insertion sort: O(n)
bubble sorte: O(n)
quick sort: O(n^2)

### algorithm types

#### selection sort

In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

The time efficiency of selection sort is quadratic, so there are a number of sorting techniques which have better time complexity than selection sort. One thing which distinguishes selection sort from other sorting algorithms is that it makes the minimum possible number of swaps, n − 1 in the worst case.


- Slow for big data
- good for small data
- small memory consume
- (n^{2}-n)/2 comparisons
- time O(n2)

```javascript
function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let index = 0; index < n; index++) {
        // Finding the smallest number in the subarray
        let min = index;
        for(let j = index+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != index) {
             // Swapping the elements
             let tmp = inputArr[index]; 
             inputArr[index] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}
let inputArr = [5, 2, 4, 6, 1, 3];
selectionSort(inputArr);
console.log(inputArr);
// [1, 2, 3, 4, 5, 6]
```

 #### Insertion sort 

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

Simple implementation: Jon Bentley shows a three-line C version, and a five-line optimized version[1]
Efficient for (quite) small data sets, much like other quadratic sorting algorithms
More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(kn) when each element in the input is no more than k places away from its sorted position
Stable; i.e., does not change the relative order of elements with equal keys
In-place; i.e., only requires a constant amount O(1) of additional memory space
Online; i.e., can sort a list as it receives it
When people manually sort cards in a bridge hand, most use a method that is similar to insertion sort.



- good for small inputs
- more swap, less comparison
- Best case: O(n), when array is ordered
- Middle case: O(n²/4), when the array has random vaues with no ordering.
- Worst case: O(n²), when the array is in a reverse order than that which you want to order. 


```javascript
function insertionSort(inputArr) {
  let n = inputArr.length;
  for (let index = 1; index < n; index++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[index];
    // The last element of our sorted subarray
    let j = index-1; 
    while ((j > -1) && (current < inputArr[j])) {
      inputArr[j+1] = inputArr[j];
      j--;
    }
    inputArr[j+1] = current;
  }
  return inputArr;
}
let inputArr = [5, 2, 4, 6, 1, 3];
insertionSort(inputArr);
console.log(inputArr);
// [1, 2, 3, 4, 5, 6]
```



#### Quick sort



#### Merge sort


#### Heapsort

Heap Sort is a comparison-based sorting technique that sorts elements using Almost Complete Binary Tree.
Heap Sort is considered better than quicksort in worst case as its time complexity is O(nlogn) which is better than O(n²) of quicksort.

Max heap for increasing order

Min heap for decreasing order
