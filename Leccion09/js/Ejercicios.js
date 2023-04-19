/*
  1. Escriba una función que reciba dos números y devuelva el mayor.
  2. Escriba una función que dados 3 números devuelva el signo de multiplicación de los 3. (Positivo o negativo) = 2*5*-6 = -
*/

function mayor(n1,n2){

  if(n1>n2){
    console.log(n1);   
  }else if(n2>n1){
    console.log(n2);
  }else{
    console.log("Son iguales!");
  }

}

//Llamado de la función
mayor(5,10);
// mayor(25,30);


function mayorVec(arreglo){

  let mayor=arreglo[0];
  for(let i=0; i< arreglo.length; i++){
      if(mayor< arreglo[i]){
        mayor = arreglo[i];
      }
  }

  return mayor;
}

var vectorNumero = [-25,-10,-65,-35,-150];
console.log("Vector Mayor: " +mayorVec(vectorNumero));


//  2. Escriba una función que dados 3 números devuelva el signo de multiplicación de los 3. (Positivo o negativo) = 2*5*-6 = -

function signo(n1,n2,n3){

  const resultado = n1*n2*n3;
  if(resultado > 0){
    console.log(`El resultado de la multiplicación es: ${resultado} y su signo es positivo (+). `);
  }else if(resultado<0){
    console.log(`El resultado de la multiplicación es: ${resultado} y su signo es negativo (-). `);
  }else{
    console.log(`El resultado de la multiplicación es: ${resultado} y su signo es neutro. `);
  }

}

signo(3,0,-10);

/* 
  3. Escriba una función que ordene 3 números de mayor a menor.
  4. Escriba una función que reciba un idioma ('es', 'en') y devuelva <hola mundo!> en el idioma correspondiente.
  5. Escriba una función que reciba un número y una palabra, y devuelva un string con la forma correcta, singular o plural. 1 perro 2 perros
*/

//   3. Escriba una función que ordene 3 números de mayor a menor.
//   INPUT -> 5 10 3 / OUTPUT -> 10 5 3
