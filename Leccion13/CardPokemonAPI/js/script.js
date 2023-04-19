
//https://pokeapi.co/api/v2/pokemon?limit=151

function cargarPokemon(){
    let limite = 151;
    let html = '';
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limite}`)
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((datos)=>{
      console.log(datos);
      datos.results.forEach(elemento => {
        console.log(elemento.name);
        console.log(elemento.url);

        fetch(elemento.url)
          .then((dataPokemon)=>{
            return dataPokemon.json();
          }).then((pokemon)=>{
            console.log(pokemon);
            console.log(pokemon.name);
            console.log(pokemon.types[0].type.name);
            console.log(pokemon.stats[0].base_stat);
            console.log(pokemon.sprites.other.dream_world.front_default);

            html += `
              <article class="card">
              <div class="imgCard">
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt=""/>
              </div>
              <div class="contentCard">
                <h2>${pokemon.name}</h2>
                <div class="info">
                  <h3>HP:</h3>
                  <span>${pokemon.stats[0].base_stat}</span>
                </div>
                <div class="info">
                  <h3>Type:</h3>
                  <span>${pokemon.types[0].type.name}</span>
                </div>
                <a href="#">Seleccionar</a>
              </div>
            </article>
           `       
           const listadoPokemon = document.getElementById("listadoPokemon").innerHTML = html;
          });
       

      });
   
    })

   
}

cargarPokemon();