const numSearch = document.getElementById('numSearch');
const nameSearch = document.getElementById('nameSearch');
let result = [];

//Function handles a search from the number search bar
let numResults = function() {
    num = numSearch.value;
    if (num < 1 || num > 20){
        numSearch.value = null;
        alert("Number out of bounds, please try again.");
    } else {
        alert("Chosen Pokemon...\n\t" + "Name: " + pokemonArr[0][num - 1].name + "\n\tNumber: "
        + pokemonArr[0][num - 1].num + "\n\tDescription: " + pokemonArr[0][num - 1].description);
        numSearch.value = null;
    }
}


//Pokemon objects

 let pokemon = {
    bulbasaur: {
        name: "Bulbasaur",
        num: 1,
        description: "Grass/Poison"
    },

    ivysaur: {
        name: "Ivysaur",
        num: 2,
        description: "Grass/Poison"
    },

    venusaur: {
        name: "Venusaur",
        num: 3,
        description: "Grass/Poison"
    },

    charmander: {
        name: "Charmander",
        num: 4,
        description: "Fire"
    },

    charmeleon: {
        name: "Charmeleon",
        num: 5,
        description: "Fire"
    },

    charizard: {
        name: "Charizard",
        num: 6,
        description: "Fire/Flying"
    },

    squirtle: {
        name: "Squirtle",
        num: 7,
        description: "Water"
    },

    wartortole: {
        name: "Wartortle",
        num: 8,
        description: "Water"
    },

    blastoise: {
        name: "Blastoise",
        num: 9,
        description: "Water"
    },

    caterpie: {
        name: "Caterpie",
        num: 10,
        description: "Bug"
    },

    metapod: {
        name: "Metapod",
        num: 11,
        description: "Bug"
    },

    butterfree: {
        name: "Butterfree",
        num: 12,
        description: "Bug/Flying"
    },

    weedle: {
        name: "Weedle",
        num: 13,
        description: "Bug/Poison"
    },

    kakuna: {
        name: "Kakuna",
        num: 14,
        description: "Bug/Poison"
    },

    beedrill: {
        name: "Beedrill",
        num: 15,
        description: "Bug/Poison"
    },

    pidgey: {
        name: "Pidgey",
        num: 16,
        description: "Normal/Flying"
    },

    pidgeotto: {
        name: "Pidgeotto",
        num: 17,
        description: "Normal/Flying"
    },

    pidgeot: {
        name: "Pidgeot",
        num: 18,
        description: "Normal/Flying"
    },

    rattata: {
        name: "Rattata",
        num: 19,
        description: "Normal"
    },

    raticate: {
        name: "Raticate",
        num: 20,
        description: "Normal"
    }
}

//An array of pokemon
// let pokemonArr = [ bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, 
//     squirtle, wartortole, blastoise, caterpie, metapod, butterfree, weedle, kakuna, 
//     beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate];

let pokemonArr = [];
pokemonArr.push(Object.values(pokemon));


console.log(pokemonArr[0]);


//Funtion handles a search from the name search bar
let namReults = function () {
    pokeName = nameSearch.value;

    if(pokeName.length > 20){
        alert("Search must only be 20 Characters");
        nameSearch.value = pokeName.slice(0,pokeName.length - 1);
    }

    result = pokemonArr[0].filter(pokemon => pokemon.name.includes(pokeName));
    console.log(result);
}

//called on btn press, displays the appropriate alert
let displayResult = function() {
    resultAmount = result.length;
    switch(resultAmount) {
        case 0:
            alert("No results found");
            break;
        case 1: 
            alert("Chosen Pokemon...\n\t" + "Name: " + result[0].name + "\n\tNumber: "
            + result[0].num + "\n\tDescription: " + result[0].description);
            nameSearch.value = null;
            break;
        case 2:
            alert("Possible pokemon:\n\t" + result[0].name + "\n\t"
    + result[1].name)
            break;
        case 3:
            alert("Possible pokemon:\n\t" + result[0].name + "\n\t"
            + result[1].name + "\n\t" + result[2].name)
            break;
        case 4:
            alert("Possible pokemon:\n\t" + result[0].name + "\n\t"
            + result[1].name + "\n\t" + result[2].name + "\n\t"
            + result[3].name)
            break;
        case 5:
            alert("Possible pokemon:\n\t" + result[0].name + "\n\t"
            + result[1].name + "\n\t" + result[2].name + "\n\t"
            + result[3].name + "\n\t" + result [4].name);
    }
    nameSearch.value = null;
}

