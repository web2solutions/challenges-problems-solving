// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

var sortedSquares = function (nums) {
    let direita = nums.length - 1;
    let esquerda = 0;
    const resultados = new Array(nums.length);
    for (let index = nums.length - 1; index >= 0; index--) {
        const esquerdaVal = nums[esquerda]; // pega valor absoluto
        const direitaVal = nums[direita]; // pega valor absoluto

        if(esquerdaVal > direitaVal) {
            resultados[index] = esquerdaVal ** 2;
            esquerda++; // vai uma casa pra direita
        } else {
            resultados[index] = direitaVal ** 2;
            direita--; // vai uma casa pra esquerda
        }
    }
    return resultados;
};


var sorted = function (nums) {
  let direita = nums.length - 1;
  let esquerda = 0;
  const resultados = new Array(nums.length);
  for (let index = nums.length - 1; index >= 0; index--) {
      const esquerdaVal = nums[esquerda]; // pega valor absoluto
      const direitaVal = nums[direita]; // pega valor absoluto

      if(esquerdaVal > direitaVal) {
          resultados[index] = esquerdaVal;
          esquerda++; // vai uma casa pra direita
      } else {
          resultados[index] = direitaVal;
          direita--; // vai uma casa pra esquerda
      }
  }
  return resultados;
};

console.log(sorted([5, 4, 3, 2, 1,  -3, -4, -10, 49, 50, 51]))
