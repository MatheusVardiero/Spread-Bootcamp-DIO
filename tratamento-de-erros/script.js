// O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

// Crie uma função que recebe um array e um número
// Realize as seguintes validações
// Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
// Se o array não for do tipo 'object', lance um erro do tipo TypeError
// Se o número não for do tipo 'number', lance um erro do tipo TypeError
// Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
// Utilize a declaração try...catch
// Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Envie os parametros");

    if (typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");

    if (typeof num !== 'number') throw new TypeError("O num precisa ser do tipo number");

    if (arr.length !== num) throw new RangeError("Tamanho Inválido");

    return arr;

  } catch(e) {
    if (e instanceof ReferenceError) {
      console.log("Esse erro é um ReferenceError!");
      console.log(e.message);
    };

    if (e instanceof TypeError) {
      console.log("Esse erro é um TypeError!");
      console.log(e.message);
    };

    if (e instanceof RangeError) {
      console.log("Esse erro é um RangeError!");
      console.log(e.message);
    };
  }
}

console.log(validaArray([1,2,3,4,5],5));