//Cargar datos 
cargarContactos();

document.getElementById("btnRegistrar").onclick = ()=>{
  let nombre = document.forms[0].Nombre.value;
  let telefono = document.forms[0].Telefono.value;
  let tipo = document.forms[0].Tipo.value;

  //Crear un arreglo vacio para almacenar los contactos 
  let contactos = [];
  //Almacenar en el localStorage
  //Verifica si el local storage contiene elementos
  console.log(localStorage.length);
  if(localStorage.length>0){
    contactos = JSON.parse(localStorage.getItem('contactos'));
  }

  //agrego el contacto nuevo
  contactos.push({
    "nombre":nombre,
    "telefono":telefono,
    "tipo":tipo
  });

  //Guardarlo en el localstorage
  localStorage.setItem('contactos',JSON.stringify(contactos));

  //Alerta que se guardado la info
  Swal.fire(
     'Contacto Guardado Correctamente' ,
     '',
     'success'
  );

  cargarContactos();
}


function cargarContactos(){
  let contactos = [];
  if(localStorage.length>0){
    contactos = JSON.parse(localStorage.getItem('contactos'));
  }
  CrearLstContactos(contactos);
}


function CrearLstContactos(contactos){
  
  let fila = "";
  document.querySelector("#lstContactos tbody").innerHTML = "";

  contactos.forEach(element => {
    fila = crearNodoPadre('tr', document.querySelector("#lstContactos tbody"));
    crearNodoHijo('td',element.nombre, fila);
    crearNodoHijo('td',element.telefono, fila);
    crearNodoHijo('td',element.tipo, fila);
    let celdaBtn = document.createElement('td');
    fila.appendChild(celdaBtn);
    crearNodoBotonDel('button', "Eliminar",celdaBtn, element.nombre);
  });
}

function crearNodoHijo(tipo, contenido, padre) {
  var nodo = document.createElement(tipo);
  nodo.innerHTML = contenido;
  padre.appendChild(nodo);
}
  
function crearNodoBotonDel(tipo, contenido, padre, txtEliminar) {
  var nodo = document.createElement(tipo);
  nodo.innerHTML = contenido;
  nodo.className = "btn btn-danger";
  nodo.type = "button";
  nodo.setAttribute("data-delNombre", txtEliminar);
  padre.appendChild(nodo);
}

function crearNodoPadre(tipo, padre) {
  var nodo = document.createElement(tipo);
  padre.appendChild(nodo);
  return nodo;
}

function filtrarNombre(datos,datoBuscar){
  let aux = [];
  aux = datos.filter(elemento=>{
      return elemento.nombre.toLowerCase().includes(datoBuscar.toLowerCase()); // Busca por contenido
  });
  return aux;
}


document.getElementById("btnBuscar").onclick = () =>{
  let contactos = [];
  console.log('Entrada');
  if(localStorage.length>0){
    contactos = JSON.parse(localStorage.getItem('contactos'));
  }

  let resBusqueda = filtrarNombre(contactos,document.forms[1].BuscarContacto.value);

  if(resBusqueda.length > 0){
    CrearLstContactos(resBusqueda);

  }else{
    Swal.fire(
      'No hay coincidencias con el nombre buscado' ,
      '',
      'info'
   );
  }
  
}


//eventos por delegación
document.querySelector("#lstContactos tbody").addEventListener("click", (e) => {

  console.log(e);
  //e.target captura el nodo que disparo el evento
  if (e.target.tagName.toLowerCase() == "button") {
      e.target.closest("tr").remove();
 
      delContacto(e.target.getAttribute("data-delNombre"));
  }

})

function delContacto(delNombre) {
  let contactos = [];
  if (localStorage.length > 0) {
      //extraer los contanctos guardados
      contactos = JSON.parse(localStorage.getItem("contactos"));
  }
  contactos = FiltrarContactosEliminar(contactos, delNombre);
  //guardo los contactos actualizados
  localStorage.setItem("contactos", JSON.stringify(contactos));

  //alera de mensaje guardado
  Swal.fire(
      'Contacto Eliminado Correctamente',
      '',
      'success'
  );
  cargarContactos();

}

function FiltrarContactosEliminar(datos, nombre) {
  let aux = [];
  aux = datos.filter(e => {
      return e.nombre.toLowerCase()!=nombre.toLowerCase(); //buqueda por contenido
  });
  return aux;
}