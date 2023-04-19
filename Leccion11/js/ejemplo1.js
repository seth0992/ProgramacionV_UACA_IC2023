/* Seleccionar todos los elementos h1 */
document.getElementsByTagName("h1")
// console.log(document.getElementsByTagName("h1"));
document.querySelectorAll("img");

// Seleccionar solo un elemento
var elementoPrincipal = document.getElementById("principal");
// console.log(elementoPrincipal);

elementoPrincipal =  document.querySelector("#principal");
// console.log(elementoPrincipal);

elementoPrincipal = document.querySelector("div p");
// console.log(elementoPrincipal);

elementoPrincipal = document.querySelectorAll(".imagen");
// console.log(elementoPrincipal);
document.write("<br/>");
document.write("Hola!");
document.write("<h1>Hola Mundo!</h1>");

function escribir(texto){
  document.write(texto);
}


// Cambiar propiedades
let parrafo = document.querySelector("p");
parrafo.innerHTML += "<b>Saludos desde JS</b>";

let img = document.getElementById("img1");
img.src = "recursos/img/ahmed-Kn4j3RVnkVQ-unsplash.jpg"
img.width = "200";
img.alt = "Imagen de comida, agregada desde JS";


function cambiarImagen(){
  let img = document.getElementById("img1");
  if(img.className == "imagen"){
    img.className = "imagenClick";    
  }else{
    img.className = "imagen";
  }
}


// Modificar estilos JS
let h1texto = document.getElementById("principal");
h1texto.style.fontSize = "5rem";
h1texto.style.color = "#bb55ff";
h1texto.style.textDecoration = "underline";



