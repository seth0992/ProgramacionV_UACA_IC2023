/* 
  3. Escriba una función que ordene 3 números de mayor a menor.
  4. Escriba una función que reciba un idioma ('es', 'en') y devuelva <hola mundo!> en el idioma correspondiente.
  5. Escriba una función que reciba un número y una palabra, y devuelva un string con la forma correcta, singular o plural. 1 perro 2 perros
*/

//   3. Escriba una función que ordene 3 números de mayor a menor.
//   INPUT -> 5 10 3 / OUTPUT -> 10 5 3
function ordenarNum(num1,num2,num3)
{
  let resultado;

  if(num1>num2 && num1> num3){
    if(num2>num3){
      resultado = `Primer numero: ${num1}, el segundo es: ${num2} y el tercero es:${num3}`;
    }else{
      resultado = `Primer numero: ${num1}, el segundo es: ${num3} y el tercero es:${num2}`;
    }
  }else if(num2>num1 && num2>num3) {
    if(num1>num3){
      resultado = `Primer numero: ${num2}, el segundo es: ${num1} y el tercero es:${num3}`;
    }else{
      resultado = `Primer numero: ${num2}, el segundo es: ${num3} y el tercero es:${num1}`;
    }
  }else if(num3>num1 && num3>num2){
    if(num1>num2){
      resultado = `Primer numero: ${num3}, el segundo es: ${num1} y el tercero es:${num2}`;
    }else{
      resultado = `Primer numero: ${num3}, el segundo es: ${num2} y el tercero es:${num1}`;
    }
  }
  return resultado;
}

// Llamada a la función
console.log(ordenarNum(5,10,3));
console.log(ordenarNum(10,3,5));
console.log(ordenarNum(3,10,5));

// 4. Escriba una función que reciba un idioma ('es', 'en') y devuelva <hola mundo!> en el idioma correspondiente. switch

function selectorIdioma(idioma){
  let resultado;
  switch(idioma){
    case "es":
      resultado = "Hola Mundo!";
      break;
    case "es":
      resultado = "Hello World!";
      break;
    default:
      resultado = "Idioma incorrecto";
      break;
  }
  return resultado;
}

// Llamada a la función
console.log(selectorIdioma("es"));

//5. Escriba una función que reciba un número y una palabra, y devuelva un string con la forma correcta, singular o plural. 1 perro 2 perros

function singularOPlural(numero,palabra){
  if(numero>1){
    return `${numero} ${palabra}s`;
  }else{
    return `${numero} ${palabra}`;
  }
}

function singularOPluralTern(numero,palabra){    
  if(esVocal(palabra.charAt(palabra.length-1))){
    return `${numero} ${palabra}${numero>1?"s":""}`; 
  }else{
    return `${numero} ${palabra}${numero>1?"es":""}`;
  }
}

function esVocal(letra){  
  letra = letra.toLowerCase();
  if(letra == "a" ||letra == "e"||letra == "i"||letra == "o"||letra == "u"){
    return true;
  }else{
    return false;
  }
}

// 2 casa = 2 casas
console.log("avion".charAt(4));
console.log(singularOPluralTern(3,'avion'));
console.log(singularOPluralTern(1,'casa'));
console.log(singularOPluralTern(4,'casA'));
console.log(singularOPluralTern(4,'Monitor'));

// Funciones de texto
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.length)
console.log(p.replace('dog', 'monkey'));

let nombre = "Jeremy Elizondo Castro";
let apellido = nombre.substring(7, 15);
console.log(apellido);

let posicion = nombre.indexOf(' ');
console.log(posicion);
apellido = nombre.substring(nombre.indexOf(' ')+1, nombre.length);
console.log(apellido);

posicion = nombre.lastIndexOf('o');
console.log(posicion);