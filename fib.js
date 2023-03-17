/* The example sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, etc.

It can be represented by the following formula: F(n) = F(n-1) + F(n-2), where F(0) = 0, F(1) = 1.

Today we will learn a few ways to implement a function that:

finds the Fibonacci number under the given index in the sequence:

fibonacci(10) -> 55

finds the index of a given Fibonacci number in the sequence:

fibonacci(55) -> 10

Find Fibonacci Number Of A Given Index

The time complexity for this solution is linear - O(n), because we run the loop from 2 to n.

The space complexity is O(1) because it does not matter if we run fibonacci(10) or fibonacci(100), the space required remains the same.
*/
{
  const fibonacci = n => {
    let a = 0, b = 1, c = n;
  
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
  
    return c;
  };

  console.log(fibonacci(3))
  console.log(fibonacci(0))
}
/*
The time complexity for this solution is linear - O(n), since we ensure that the function is executed only once per given index and the result is later returned from the cache.

The space complexity is equal to O(n).
*/
{
  let cache = {};

  const fibonacci = n => {
    if (n <= 1) {
      return n;
    }
    
    if(cache[n]) {
      return cache[n];
    }
    
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    
    cache[n] = result;
    
    return result;
  };

  console.log(fibonacci(3))
  console.log(fibonacci(0))
}
