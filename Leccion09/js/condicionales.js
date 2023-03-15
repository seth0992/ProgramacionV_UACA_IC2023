let edad = 25;
let precio = 35000;
let descuento = 0;

// IF
if(edad >= 18){
  console.log("Es mayor de edad");
}
// If doble
if(precio > 10000){
  console.log("Es muy caro");
}else{
  console.log("Es barato");
}

if(precio > 50000 && precio < 100000){
  descuento = precio - (precio *0.20);
  if(precio == 55000){

  }
}else if(precio >= 25000 && precio<=50000){
  descuento = precio - (precio*0.15);
}else{
  descuento = precio - (precio*0.10);
}

console.log(descuento);

// Operador terneario ( condicion? verdadero : falso)
let resultado = precio>1500?"Es Caro":"Es barato";

console.log(resultado);

//Crear una funcion 
function mostrarTexto(texto){
  console.log(texto);
}

mostrarTexto("Esto es un saludos!!!");

function ejemploSwitch(valor){

  switch(valor){
    case 0:
      mostrarTexto("El valor es un cero");
      return "Estoy en caso 0";
    case 1:
      return "Estoy en el caso 1";
    case 2: 
      return "Estoy en el caso 2";
    default:
      return "estoy en el default";
  }
  
}

let res = ejemploSwitch(6);
console.log(res);


