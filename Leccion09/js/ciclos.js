/*
  1 While.
  2. Do while.
  3. for
*/

const arreglo = ["Gregory","Mariana","Michelle", "Axel", "Gloidy", "Sebastian","Verónica", "César"];

//Ciclo While
let contador = 0;
// array.length -> Devolver la cantidad de elementos del vector.

// arreglo[index]
//  console.log(arreglo[0]);
//  console.log(arreglo[1]);
//  console.log(arreglo[2]);
//  console.log(arreglo[3]);

while(contador<arreglo.length){
  console.log(arreglo[contador]);
  contador++;
}

// while(contador<=arreglo.length-1){
//   console.log(arreglo[contador]);
//   contador++;
// }

// for
console.log("For");
for(let i = 0; i<arreglo.length; i++){
  console.log(arreglo[i]);
}

//DO ... while
let contadorDoWhile = 0;
do{
    console.log("Do while: ", arreglo[contadorDoWhile]);
    contadorDoWhile++;
}while(false);

