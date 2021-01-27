const axios = require('axios');
//URL for pokemon API
const url = 'https://pokeapi.co/api/v2/pokemon/golurk'
//fetches url then uses takes the response 
axios(url).then((response)=>{
   format(response.data);
    //if there is an error print to the console
}).catch((error)=> console.log(`Error ${error}`));


function format(pokemon){
    //formatting the name of the pokemon to capitalize the first letter
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    //set a random move
    let move = randomMove(pokemon);
    //print to the console the pokemon's name and id and its random move
    console.log(`Pokemon #${pokemon.id}, ${pokemon.name}, used ${move}!`);
}
function randomMove(pokemon){
    //generate a random number
    let move_num = Math.floor((Math.random() * pokemon.moves.length) + 1);
    //select the move with move number
    let move_name= pokemon.moves[move_num].move.name;
    //capitalize the move name
    move_name = move_name.charAt(0).toUpperCase() + move_name.slice(1);
    //return move
    return move_name;
}