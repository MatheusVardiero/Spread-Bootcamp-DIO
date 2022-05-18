// Resoluçao 1
// function substituiPares() {
//   let array = [0,1,2,3,4,5,6,7,8,9]

//  if (!array.length) return -1;

//   for (i = 0; i < array.length - 1; i++) {
//     if (array[i] % 2 === 0) {
//       array[i] = 0;
//     }
//   }
//   console.log(array);
// }

// substituiPares();


//Resoluçao 2
function substituiPares(array) {
  if (!array.length) return -1;

  for (i = 0; i <= array.length -1; i++) {
    if (array[i] % 2 === 0) {
      array[i] = 0;
    }
  }
  return array;
}

let arr = [1,2,3,4,5,6,7];
console.log(substituiPares(arr));

