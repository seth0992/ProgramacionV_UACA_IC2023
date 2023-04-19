document.getElementById('Registrar').addEventListener('click', RegistarData);
document.getElementById('Mostrar').addEventListener('click', MostrarInfo);
document.getElementById('Modificar').addEventListener('click', ModificarData);
document.getElementById('Eliminar').addEventListener('click', EliminarData);


function RegistarData(){ 
  createCookie('nombre','Braseth',15);
  createCookie('edad',30,15);
  createCookie('genero','Masculino',15);
 }
 
 function MostrarInfo(){
   getCookie('genero');
  //alert(document.cookie);
 }
 
 function ModificarData(){
 }
 
 function EliminarData(){
 }

 function createCookie(nombre,valor, exDias){
    const d = new Date();
    d.setTime(d.getTime()+(exDias*24*60*60*1000));
    let expires = `expires ${d.toUTCString()}`;
    document.cookie = `${nombre} = ${valor}; ${expires} path=/;`;
 }

 function getCookie(nombreCookie){

  let name = nombreCookie + "=";

  let decodedCookie = decodeURIComponent(document.cookie);
  let cookies = decodedCookie.split(';')
  

  for(let i=0; i<cookies.length; i++){
 
    let cookie = cookies[i];
    let valor = '';

    if(cookie.trim().indexOf(nombreCookie) == 0){      
      valor = cookie.replace(name,'');
      console.log(valor);
      return valor;
    }

  }

  return '';

 }