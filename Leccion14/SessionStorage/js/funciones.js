document.getElementById('Registrar').addEventListener('click', RegistarData);
document.getElementById('Mostrar').addEventListener('click', MostrarInfo);
document.getElementById('Modificar').addEventListener('click', ModificarData);
document.getElementById('Eliminar').addEventListener('click', EliminarData);



function RegistarData(){
 sessionStorage.setItem('nombreUsuario','Jeremy');
 sessionStorage.setItem('edad','30');
}

function MostrarInfo(){
  alert(sessionStorage.getItem('nombreUsuario'));

}

function ModificarData(){
  sessionStorage.setItem('nombreUsuario','Braseth');
  sessionStorage.setItem('edad','29');
}

function EliminarData(){
  sessionStorage.removeItem('edad');
  sessionStorage.removeItem('nombreUsuario');
}