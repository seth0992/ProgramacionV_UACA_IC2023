/*
  Tipos de datos:
  1. Numbers
  2. Cadenas de Caracteres
  3. Boolenas
  4. undefined / null
*/ 

//Ejemplos de cadenas
var str = "a";
var str1 = "Hola esto es un ejemplo de cadena";
var strTemplate = `Hola esto es un ejemplo de cadena`; // String template. 

//Métodos de cadenas
var charAt = str.concat(" ", str1, strTemplate);
var concatSuma = str+" "+str1+" "+strTemplate;
var strTemplate2 = `${str} ${str1} ${strTemplate}`

var nombre = "Jeremy";
var apellidos = "Elizondo";
var ubicacion = "Paso Canoas";

var texto = `El nombre completo es: ${nombre} ${apellidos} y vive en la zona de: ${ubicacion}.`;

console.log(texto);

// Ejemplos números
var edad = 25;
var num1 = 10.6;
var numeroNegativo = -500;
var numeroPositivo = 1500;

var suma = edad + num1;
var resta = numeroPositivo - numeroNegativo;
var division = numeroPositivo / num1;
var multiplicacion = edad * 2.5;
var resiMod = num1 % 3;
var exponente = num1 ** 2;

exponente
console.log(exponente);

//Boolean
var verdadero = true;
var falso = false;
// console.log(verdadero);
// console.log(falso);


//Operacion booleanas
var conjuncion = verdadero && falso; //AND - Y
console.log(conjuncion);

var disyuncion = verdadero || falso; //OR - O
console.log(disyuncion);

var negacion = !verdadero;
console.log("Negacion " +negacion);

var resultado = "1" + 1;
console.log(resultado);

edad = "25";
var tipoVariable = typeof edad;
console.log(tipoVariable);