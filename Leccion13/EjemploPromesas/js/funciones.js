const datosVideoJuegos = [
   {
    titulo: "The Legend of Zelda: Breath of the Wild",
    año: 2017,
    genero: "Acción y aventuras",
    creador: "Nintendo"
  },
  {
    titulo: "Minecraft",
    año: 2011,
    genero: "Sandbox",
    creador: "Mojang"
  },
  {
    titulo: "Grand Theft Auto V",
    año: 2013,
    genero: "Acción y aventuras",
    creador: "Rockstar Games"
  },
  {
    titulo: "The Witcher 3: Wild Hunt",
    año: 2015,
    genero: "RPG",
    creador: "CD Projekt Red"
  },
  {
    titulo: "Super Mario Odyssey",
    año: 2017,
    genero: "Plataformas",
    creador: "Nintendo"
  }
];

//Sincronica
function getData(){
  return datosVideoJuegos;
}
// console.log(getData());

function getDataEspera(){
  setTimeout(()=>{
      return datosVideoJuegos; 
  },2000);
}

//console.log(getDataEspera());

//Promesas
function getDataPromesa(){

  return new Promise((resolve,reject)=>{

    //Error
    if(datosVideoJuegos.length ==0){
      setTimeout(()=>{
        reject(new Error('Sin datos!!'));
     },3000);  
     
    }

    //resolve
    setTimeout(()=>{
      resolve(datosVideoJuegos);
   },3000);  
    
  });

}

getDataPromesa()
            .then((response)=>{console.log(response)})
            .catch((error)=>{console.log(error.message)})