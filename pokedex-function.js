const numSearch = document.getElementById('numSearch');
const nameSearch = document.getElementById('nameSearch');

//Function handles a search from the number search bar
let numResults = function() {
    num = numSearch.value;
    if (num < 1 || num > 20){
        numSearch.value = null;
        alert("Number out of bounds, please try again.");
    } else {
        alert("Chosen Pokemon...\n\t" + "Name: " + pokemonArr[num - 1].name + "\n\tNumber: "
        + pokemonArr[num - 1].num + "\n\tDescription: " + pokemonArr[num - 1].description);
    }
}

//Funtion handles a search from the name search bar
let namReults = function() {
    pokeName = nameSearch.value;
    if(pokeName.length > 20){
        alert("Search must only be 20 Characters");
        nameSearch.value = pokeName.slice(0,pokeName.length - 1);
    }
}


//Pokemon objects
let bulbasaur = {
    name: "Bulbasaur",
    num: 1,
    description: "Grass/Poison"
}

let ivysaur = {
    name: "Ivysaur",
    num: 2,
    description: "Grass/Poison"
}

let venusaur = {
    name: "Venusaur",
    num: 3,
    description: "Grass/Poison"
}

let charmander = {
    name: "Charmander",
    num: 4,
    description: "Fire"
}

let charmeleon = {
    name: "Charmeleon",
    num: 5,
    description: "Fire"
}

let charizard = {
    name: "Charizard",
    num: 6,
    description: "Fire/Flying"
}

let squirtle = {
    name: "Squirtle",
    num: 7,
    description: "Water"
}

let wartortole = {
    name: "Wartortle",
    num: 8,
    description: "Water"
}

let blastoise = {
    name: "Blastoise",
    num: 9,
    description: "Water"
}

let caterpie = {
    name: "Caterpie",
    num: 10,
    description: "Bug"
}

let metapod = {
    name: "Metapod",
    num: 11,
    description: "Bug"
}

let butterfree = {
    name: "Butterfree",
    num: 12,
    description: "Bug/Flying"
}

let weedle = {
    name: "Weedle",
    num: 13,
    description: "Bug/Poison"
}

let kakuna = {
    name: "Kakuna",
    num: 14,
    description: "Bug/Poison"
}

let beedrill = {
    name: "Beedrill",
    num: 15,
    description: "Bug/Poison"
}

let pidgey = {
    name: "Pidgey",
    num: 16,
    description: "Normal/Flying"
}

let pidgeotto = {
    name: "Pidgeotto",
    num: 17,
    description: "Normal/Flying"
}

let pidgeot = {
    name: "Pidgeot",
    num: 18,
    description: "Normal/Flying"
}

let rattata = {
    name: "Rattata",
    num: 19,
    description: "Normal"
}

let raticate = {
    name: "Raticate",
    num: 20,
    description: "Normal"
}

//An array of pokemon
let pokemonArr = [ bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, 
    squirtle, wartortole, blastoise, caterpie, metapod, butterfree, weedle, kakuna, 
    beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate];

