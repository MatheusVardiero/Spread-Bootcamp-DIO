// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function noRepeat(arr) {
  const mySet = new Set(arr);

  //Técnica spread -> cria outro array(clona), ao inves de sobrescrever.
  return [...mySet];
}

console.log(noRepeat(meuArray));