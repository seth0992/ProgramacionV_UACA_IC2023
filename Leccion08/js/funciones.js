var animales = ['Perro','Gatos','Loros'];

document.write(getAnimal(6));

function getAnimal(id){
  if(id<animales.length){
    return animales[id];
  }else{
    return 'No existe';
  }
}