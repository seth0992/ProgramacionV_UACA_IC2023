//Crear un objeto ocn literales de objetos

const persona = {
    soyHumano: true,
    presentar: function(){
      console.log(`Hola ${this.nombre}, soy humano? ${this.soyHumano}` );
    }
}

//Crear un objeto = object.create 
const obj = Object.create(persona);
const obj1 = Object.create(persona);
console.log(obj);
console.log(obj1);

obj.nombre = "Jeremy";
obj.apellido = "Elizondo";
obj1.nombre = "Maria";
console.log(obj);
console.log(obj1);

delete obj.apellido;

console.log(obj);

obj.soyHumano = obj.soyHumano;
obj.presentar = obj.presentar;

console.log(obj);

//Acceder a un propiedad en notación dinámica
console.log(obj["nombre"]);

//Métodos son comunes 
const llaves = Object.keys(obj);
console.log("Llaves:" , llaves);

//hasOwnProperty -> revisar si un tiene un atributo
console.log("Tiene propiedad", obj.hasOwnProperty("soyHumanos"));

console.log("Entires: ", Object.entries(obj));

// 1. Crear un objeto que tenga el nombre, autor  y genero de 1 película.

const pelicula = {
    nombre: "Avatar",
    autor: "James Cameron",
    genero: "Ciencia ficción"
}

//pelicula.nombre = "Avatar 2";
console.log(pelicula["nombre"]);

// 2. Agregar un metodo dentro del objeto, para imprimir, el nombre de la pelicula y el genero.

pelicula.imprimir = function(){
  return `El nombre de la pelicula es: ${this.nombre} y el genero es: ${this.genero}`;
}


console.log(pelicula.imprimir());

// 3. agregar un propiedad que sea estreno y le vamos a poner false dentro del objeto

pelicula.estreno = false;
console.log(pelicula.estreno);

pelicula["estreno"] = true;
console.log(pelicula.estreno);

// una función que se llame en cartelera y que muestre un mensaje de si esta en cartelera o no con base a si estreno es true o false
pelicula.cartelera = function(){
  console.log(`${this.estreno?"Se encuentra en cartelera":"No se encuentra en cartelera"}`);
}

pelicula.cartelera();

console.log("-----------------------------------------")
// Mostar todas las llaves del objeto con ciclo
//console.log(Object.keys(pelicula))
for(var llave in pelicula){
  console.log(llave);
}

console.log("-----------------------------------------")
// Mostrar cada valor de las propiedades
for(let llave in pelicula){
  console.log(pelicula[llave]);
}


const nombreCompleto = "Jeremy Braseth Elizondo Castro";
console.log(nombreCompleto.split(" "));
function iniciales(texto){
  let vector = texto.split(" ");
  let resultado = "";
  for(let palabra of vector){
    resultado = resultado + palabra.charAt(0);
  }
return resultado;
}

console.log(iniciales(nombreCompleto));