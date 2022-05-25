// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

//RESOLUÇAO UTILIZANDO O THIS
const maça = {
  value: 2,
}

const laranja = {
  value: 3,
};

function mapComThis(arr, thisArg) {
  return arr.map(function(item) {
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2];

console.log('this -> maça', mapComThis(nums, maça));

console.log('this -> laranja', mapComThis(nums, laranja));

//-----------------+++++------------++++++++++-----------------

//RESOLUÇAO SEM O THIS
const array = [1,2,3,4,5];

function mapSemThis(arr) {
  return arr.map((item) => item * 2);
}
console.log(mapSemThis(array));
