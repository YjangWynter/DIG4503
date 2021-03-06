

const axios = require('axios');
//URL for pokemon API's list of all pokemon from the Unova region
const pokedex = 'https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156/';
//selects a random url to read the pokemon's data from the promise
const url = getPokemon().then((res) => randomPokemon(res));


//async functions
// retrieves a list of objects containing all the urls for the Unova Pokedex
async function getPokemon() {
    //console.log("Entered 1st function");
    return axios(pokedex).then(response => response.data.results).catch((error) => console.log(`Error #1: ${error}`));
};

//fetches url then uses takes the response 
async function printPokemon(url) {
    let data = await url;
    Pokemon.data =  axios(data).then((pokemon) => format(pokemon.data)).catch((error) => console.log(`Error #2: ${error}`));
}

//called by url promise to select a random pokemon
function randomPokemon(pokedex) {
    let num = Math.floor((Math.random() * 156) + 1);
    let pokemon = pokedex[num].url;
    return pokemon
}
// outputs a formatted response after randomizing the pokemon and its move.
function format(pokemon) {
    //formatting the name of the pokemon to capitalize the first letter
    let result = {
        'name': capitalize(pokemon.name),
        'abilities': getAbilities(pokemon),
        'height': getHeight(pokemon),
        'weight': getWeight(pokemon),
        'types': getType(pokemon),
        'picture': getPicture(pokemon),
        'randomMove': getRandomMove(pokemon),
    }
    //print to the console the random pokemon's data
    console.log(result)
    return result
}

function capitalize(name) {
    let cap_name = name.charAt(0).toUpperCase() + name.slice(1);
    return cap_name;
}

function getRandomMove(pokemon) {
    //generate a random number
    let move_num = Math.floor((Math.random() * pokemon.moves.length) + 1);
    //select the move with move number
    let move_name = pokemon.moves[move_num].move.name;
    //capitalize the move name
    let move = capitalize(move_name);
    //return move
    return move;
}

function getAbilities(pokemon) {
    let abilities = {
        'common': [],
        'hidden': []
    }

    for (let i = 0; i < pokemon.abilities.length; i++) {
        if (pokemon.abilities[i].is_hidden === false) {
            abilities['common'].push(capitalize(pokemon.abilities[i].ability.name))
        } else {
            abilities['hidden'].push(capitalize(pokemon.abilities[i].ability.name))
        }

    }
    return abilities
}

function getType(pokemon) {
    let types = []

    for (let i = 0; i < pokemon.types.length; i++) {
        types.push(capitalize(pokemon.types[i].type.name))
    }
    //  let type = types.join('-')
    //  return type
    return types
}

function getWeight(pokemon) {// converts to lbs
    let weight = (0.22046226218488 * pokemon.weight).toFixed(2)
    return weight
}

function getHeight(pokemon) {//converts to ft
    return ((pokemon.height / 10) * 3.28084).toFixed(2)
}

function getPicture(pokemon) {//gets the picture
    return pokemon.sprites.other['official-artwork'].front_default;
}

export default printPokemon(url)