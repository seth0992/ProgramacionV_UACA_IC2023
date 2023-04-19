
function cargarDatosPortafolio(){

    fetch('./recursos/datos/datos.json')
        .then(function(respuesta){          
            return respuesta.json();
        }).then(function(datos){  

          let html= '';          
          console.log(datos);
          datos.portafolio.forEach(element => {
            html += `
            <div class="elemento">            
            <img src="recursos/img/${element.id}.jpg" alt="">
            <div class="contenido">
              <h3>${element.nombre}</h3>
              <p>${element.desc}</p>
            </div>
          </div>
            `
          });

          //Cargo los trabajos en el listados
          document.getElementById("listado").innerHTML = html;
          
        }).catch(function(error){
          document.getElementById("listado").innerHTML = '<p>De momento no hay trabajos</p>';
        })

}


document.addEventListener('DOMContentLoaded',function(){
  cargarDatosPortafolio();  
})