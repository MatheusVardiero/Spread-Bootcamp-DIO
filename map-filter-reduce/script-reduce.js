// Some todos os números de um array

function soma(array) {
  return array.reduce(function(prev, current){
    return prev + current;
  });
}

const myArray = [10,20,30,40,50];

console.log(`A soma dos valores do array é ${soma(myArray)}`);

//----------------+++++++--------------------+++++++----------------------------


// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

//SOLUÇAO 1
function calculaLista(lista, saldo) {
  let somaLista = lista.reduce((prev, current) => prev + current);
  return saldo - somaLista;
}

const lista = [10, 10, 10, 10];
const saldo = 100;

console.log("O saldo menos a soma dos itens da lista é: " + calculaLista(lista, saldo));



//----------------------++++++----------------+++++------------------------------------
//SOLUÇAO 2
const list = [
  {
    produto: 'Arroz',
    preco: 10
  },

  {
    produto: 'Feijao',
    preco: 7
  },

  {
    produto: 'Açucar',
    preco: 8
  },
];

const saldoDisp = 100;

function calculaSaldo(saldoDisp, list) {
  return list.reduce(function(prev, current) {
    return prev - current.preco;
  }, saldoDisp);//Valor que a variavel prev, irá inicializar....se nao colocar valor, ela iniciará com 0;
}

console.log("O saldo menos a soma dos itens da lista é: " + calculaSaldo(saldoDisp, list));