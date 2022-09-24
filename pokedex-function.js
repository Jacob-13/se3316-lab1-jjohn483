const numSearch = document.getElementById('numSearch'); //number search bar reference
const nameSearch = document.getElementById('nameSearch'); //name search bar reference
let result = []; //an array for storing the filtered results used in the name search function

//Pokemon objects
 let pokemonArr = [
    bulbasaur = {
        name: "Bulbasaur",
        num: 1,
        description: 'Type: Grass/Poison\n\tHeight: 2 04"\n\tWeight: 15.2 lbs\n\tCategory: Seed'
    },

    ivysaur = {
        name: "Ivysaur",
        num: 2,
        description: 'Type: Grass/Poison\n\tHeight: 3 03"\n\tWeight: 28.7 lbs\n\tCategory: Seed'
    },

    venusaur = {
        name: "Venusaur",
        num: 3,
        description: 'Type: Grass/Poison\n\tHeight: 6 07"\n\tWeight: 220.5 lbs\n\tCategory: Seed'
    },

    charmander = {
        name: "Charmander",
        num: 4,
        description: 'Type: Fire\n\tHeight: 2 00"\n\tWeight: 18.7 lbs\n\tCategory: Lizard'
    },

    charmeleon = {
        name: "Charmeleon",
        num: 5,
        description: 'Type: Fire\n\tHeight: 3 07"\n\tWeight: 41.9 lbs\n\tCategory: Flame'
    },

    charizard = {
        name: "Charizard",
        num: 6,
        description: 'Type: Fire/Flying\n\tHeight: 5 07"\n\tWeight: 199.5 lbs\n\tCategory: Flame'
    },

    squirtle = {
        name: "Squirtle",
        num: 7,
        description: 'Type: Water\n\tHeight: 1 08"\n\tWeight: 19.8 lbs\n\tCategory: Tiny Turtle'
    },

    wartortole = {
        name: "Wartortle",
        num: 8,
        description: 'Type: Water\n\tHeight: 3 03"\n\tWeight: 49.6 lbs\n\tCategory: Turtle'
    },

    blastoise = {
        name: "Blastoise",
        num: 9,
        description: 'Type: Water\n\tHeight: 5 03"\n\tWeight: 188.5 lbs\n\tCategory: Shellfish'
    },

    caterpie = {
        name: "Caterpie",
        num: 10,
        description: 'Type: Bug\n\tHeight: 1 00"\n\tWeight: 6.4 lbs\n\tCategory: Worm'
    },

    metapod = {
        name: "Metapod",
        num: 11,
        description: 'Type: Bug\n\tHeight: 2 04"\n\tWeight: 21.8 lbs\n\tCategory: Cocoon'
    },

    butterfree = {
        name: "Butterfree",
        num: 12,
        description: 'Type: Bug/Flying\n\tHeight: 3 07"\n\tWeight: 70.5 lbs\n\tCategory: Butterfly'
    },

    weedle = {
        name: "Weedle",
        num: 13,
        description: 'Type: Bug/Poison\n\tHeight: 1 00"\n\tWeight: 7.1 lbs\n\tCategory: Hairy Bug'
    },

    kakuna = {
        name: "Kakuna",
        num: 14,
        description: 'Type: Bug/Poison\n\tHeight: 2 00"\n\tWeight: 22.0 lbs\n\tCategory: Cocoon'
    },

    beedrill = {
        name: "Beedrill",
        num: 15,
        description: 'Type: Bug/Poison\n\tHeight: 3 03"\n\tWeight: 65.0 lbs\n\tCategory: Poison Bee'
    },

    pidgey = {
        name: "Pidgey",
        num: 16,
        description: 'Type: Normal/Flying\n\tHeight: 1 00"\n\tWeight: 4.0 lbs\n\tCategory: Tiny Bird'
    },

    pidgeotto = {
        name: "Pidgeotto",
        num: 17,
        description: 'Type: Normal/Flying\n\tHeight: 3 07"\n\tWeight: 66.1 lbs\n\tCategory: Bird'
    },

    pidgeot = {
        name: "Pidgeot",
        num: 18,
        description: 'Type: Normal/Flying\n\tHeight: 4 11"\n\tWeight: 87.1 lbs\n\tCategory: Bird'
    },

    rattata = {
        name: "Rattata",
        num: 19,
        description: 'Type: Normal\n\tHeight: 1 00"\n\tWeight: 7.7 lbs\n\tCategory: Mouse'
    },

    raticate = {
        name: "Raticate",
        num: 20,
        description: 'Type: Normal\n\tHeight: 2 04"\n\tWeight: 40.8 lbs\n\tCategory: Mouse'
    }
 ]


//Funtion handles a search from the name search bar
let namEntered = function () {

    pokeName = nameSearch.value;

    //an alert to keep the number of characters at 20
    if(pokeName.length > 20){
        alert("Search must only be 20 Characters");
        nameSearch.value = pokeName.slice(0,pokeName.length - 1);
    }

    //stores the filtered search result array in the variable 'result'
    result = pokemonArr.filter(pokemon => pokemon.name.toLowerCase().includes(pokeName.toLowerCase()));
}

let numEntered = function(e){
    console.log(e.keyCode)

    if((e.keyCode < 47 || e.keyCode > 58) && e.keyCode != 13){ //if a non-number key is pressed, nothing will happen
        e.preventDefault();

    } else if (e.keyCode === 13){ //enter key will display results
        result = pokemonArr.filter(character => character.num.toString().includes(e.target.value));

        if(result.length > 19){ //if nothing in search, displays "no results found"
            result.length = 0;
            displayResult();
        } else {
            displayResult();
        }

    } else if (e.target.value < 1 || e.target.value > 20){ //if the number entered is out of bounds, alert user
        alert("Number is out of bounds. Please enter a number between 1 and 20")
        numSearch.value = null;
    }
}

//Called on num search bar btn click
let searchBtn = function() {
    result = pokemonArr.filter(character => character.num.toString().includes(numSearch.value));
    displayResult();
}

//called on btn press, displays the appropriate alert based on number of pokemon that fit the search
let displayResult = function() {
    resultAmount = result.length;

    switch(resultAmount) {
        case 0:
            alert("No results found");
            break;
        case 1: 
            alert(result[0].name + "\n\tNumber: "
            + result[0].num + "\n\t" + result[0].description);
            nameSearch.value = null;
            break;
        case 2:
            alert(result[0].name + "\n\tNumber: " + result[0].num + "\n\t" + result[0].description + "\n"
            + result[1].name + "\n\tNumber: " + result[1].num + "\n\t" + result[1].description)
            break;
        case 3:
            alert(result[0].name + "\n\tNumber: " + result[0].num + "\n\t" + result[0].description + "\n"
            + result[1].name + "\n\tNumber: " + result[1].num + "\n\t" + result[1].description + "\n" 
            + result[2].name + "\n\tNumber: " + result[2].num + "\n\t" + result[2].description)
            break;
        case 4:
            alert(result[0].name + "\n\tNumber: " + result[0].num + "\n\t" + result[0].description + "\n"
            + result[1].name + "\n\tNumber: " + result[1].num + "\n\t" + result[1].description + "\n"
            + result[2].name + "\n\tNumber: " + result[2].num + "\n\t" + result[2].description + "\n"
            + result[3].name + "\n\tNumber: " + result[3].num + "\n\t" + result[3].description)
            break;
        default:
            alert(result[0].name + "\n\tNumber: " + result[0].num + "\n\t" + result[0].description + "\n"
            + result[1].name + "\n\tNumber: " + result[1].num + "\n\t" + result[1].description + "\n"
            + result[2].name + "\n\tNumber: " + result[2].num + "\n\t" + result[2].description + "\n"
            + result[3].name + "\n\tNumber: " + result[3].num + "\n\t" + result[3].description + "\n"
            + result [4].name + "\n\tNumber: " + result[4].num + "\n\t" + result[4].description);
    }
    nameSearch.value = null; //clears the search bar
}
