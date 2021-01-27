const axios = require('axios');
//URL for pokemon API
const url = 'https://pokeapi.co/api/v2/pokemon/golurk'
//fetches url then uses takes the response 
axios(url).then((response)=>{
    //save the data of the response to a pokemon object
    const pokemon = response.data;
    //formatting the name of the pokemon to capitalize the first letter
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    //print to the console the pokemon's name and id
    console.log(`This is a ${pokemon.name} and its ID is #${pokemon.id}!`);
    //if there is an error print to the console
}).catch((error)=> console.log(`Error ${error}`));