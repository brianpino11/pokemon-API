// Buscar datos del Pokémon dependiendo de su número o nombre
function buscarPokemon(contenedorNumero) {
    let inputId = `pokemonInput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase();
    let urlApi = ` https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    fetch(urlApi)
        .then(Response => Response.json())
        .then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNumero))
        .catch(() => mostrarError())

}

// Mostrar Información del pokemon
function mostrarPokemon(datosPokemon, contenedorNumero) {
    let infoDivId = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId)

    infoDiv.innerHTML = `
    <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}">
    <p>Número:${datosPokemon.id}</p>
    <p>Weight:${datosPokemon.weight / 10}Kg</p>
    <p>Height:${datosPokemon.height / 10}m</p>
    `
}

//Error en busquedad de pokemon 
function mostrarError(contenedorNumero) {
    let infoDivId = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId)

    infoDiv.innerHTML = `
    <p class="pk-ms">Pokémon no encontrado. <br>Intenta con otro nombre o Número</p>
    `
}

//Mostrar pokemon inicial
window.onload = function () {
    document.getElementById("pokemonInput1").value = "25";
    buscarPokemon(1);
    document.getElementById("pokemonInput2").value = "5";
    buscarPokemon(2);
}
