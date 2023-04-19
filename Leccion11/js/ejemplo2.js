let btn = document.getElementById("btnGuardar");
//Se agrega el evento clic al boton
btn.onclick = () =>{
  // alert("Onclick desde JS");
  //Crear html de JS
  let li = document.createElement("li");
  let input = document.getElementById("Animal")
  //le doy el valor al elemento creado
  li.innerHTML = input.value;
  // li.style.fontSize = "1.5rem";
  //Agregar el elemento a la lista
  document.getElementById("lsAnimales").appendChild(li);
  //Limpiar el valor del texto
  input.value = "";
}

function crearNodoTexto(tipo,contenido,padre,classNombre){
  let nodo = document.createElement(tipo);
  nodo.className = classNombre;
  nodo.innerHTML = contenido;
  padre.appendChild(nodo);
}

function crearNodoImage(tipo,img,padre){
  let nodo = document.createElement(tipo);
  nodo.setAttribute("src", `recursos/img/${img}`);
  padre.appendChild(nodo);
}

document.getElementById("agregarComp").onclick = () =>{
  let titulo = document.getElementById("nombreComp").value;
  let descr = document.getElementById("descripcionComp").value;
  let precio = document.getElementById("precioComp").value;
  let img = document.getElementById("rutaImgComp").value;

  //Crear es la carta
  let ncard = document.createElement("div");
  ncard.className = "card";

  let ntitulo = crearNodoTexto("h2",titulo,ncard,'titulo');
  let nprecio = crearNodoTexto("h3",precio, ncard,'precio');
  let nimage = crearNodoImage("img",img,ncard);
  let ndescrip = crearNodoTexto("p",descr,ncard,'descrip');

  document.querySelector(".cards").appendChild(ncard);

  
}
