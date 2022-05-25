// Filtre e retorne todos os números pares de um array.

const nums = [1,2,3,4,5,6,7,8,9];

function retornaPar(array) {
  return array.filter((num) => (num % 2) === 0);
}

console.log(retornaPar(nums));