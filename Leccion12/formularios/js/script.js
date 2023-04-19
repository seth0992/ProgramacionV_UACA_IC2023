let formulario = document.getElementById("formulario");
let nombre = formulario.nombre;
let correo = formulario.correo,
genero = formulario.genero,
terminos = formulario.terminos,
error = document.getElementById("error");

function validarNombre(e){
  if(nombre.value == '' || nombre.value == null){
    console.log('Ingrese el nombre');
    error.classList = 'errorShow error';
    error.innerHTML += `<li>Por favor ingrese su nombre</li>`;

    e.preventDefault();
  }else{
    error.style.display = 'none';
  }
}

function validarEmail(e){
  if(correo.value == '' || correo.value == null){
    console.log('Ingrese el correo electrónico');
    error.classList = 'errorShow error';
    error.innerHTML += `<li>Ingrese el correo electrónico</li>`;

    e.preventDefault();
  }else{
    error.style.display = 'none';
  }
}

function validarGenero(e){
  if(genero.value == '' || genero.value == null){
    console.log('Seleccione el genero adecuado');
    error.classList = 'errorShow error';
    error.innerHTML += `<li>Seleccione el genero adecuado</li>`;

    e.preventDefault();
  }else{
    error.style.display = 'none';
  }
}

function validarTerminos(e){
  if(terminos.checked == false){
    console.log('Por favor acepte los términos, para continuar!');
    error.classList = 'errorShow error';
    error.innerHTML += `<li>Por favor acepte los términos, para continuar!</li>`;

    e.preventDefault();
  }else{
    error.style.display = 'none';
  }
}


function validarFomulario(e){
  error.innerHTML = '';
  validarNombre(e);
  validarEmail(e);
  validarGenero(e);
  validarTerminos(e);
}

formulario.addEventListener('submit', validarFomulario);