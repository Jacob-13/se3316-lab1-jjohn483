const numSearch = document.getElementById('numSearch'); //number search bar reference
const nameSearch = document.getElementById('nameSearch'); //name search bar reference

let result = []; //an array for storing the filtered results used in the name search function

//dynamic results global variables
const searchBlock = document.getElementById("searching");
const divE = document.createElement("div");
const listE = document.createElement("ul");

searchBlock.appendChild(divE);
divE.appendChild(listE);
divE.style.display = "none";


//Pokemon objects
 let pokemonArr = [
    bulbasaur = {
        name: "Bulbasaur",
        num: 1,
        description: 'Type 1: Grass  |  Type 2: Poison  |  Gen: 1  |  Rarity: 4',
        img: "pokemon\\1.png"
    },

    ivysaur = {
        name: "Ivysaur",
        num: 2,
        description: 'Type 1: Grass  |  Type 2: Poison  |  Gen: 1  |  Rarity: 5',
        img: "pokemon\\2.png"
    },

    venusaur = {
        name: "Venusaur",
        num: 3,
        description: 'Type 1: Grass  |  Type 2: Poison  |  Gen: 1  |  Rarity: 6',
        img: "pokemon\\3.png"
    },

    charmander = {
        name: "Charmander",
        num: 4,
        description: 'Type 1: Fire  |  Type 2: N/A  |  Gen: 1  |  Rarity: 4',
        img: "pokemon\\4.png"
    },

    charmeleon = {
        name: "Charmeleon",
        num: 5,
        description: 'Type 1: Fire  |  Type 2: N/A  |  Gen: 1  |  Rarity: 5',
        img: "pokemon\\5.png"
    },

    charizard = {
        name: "Charizard",
        num: 6,
        description: 'Type 1: Fire  |  Type 2: Flying  |  Gen: 1  |  Rarity: 6',
        img: "pokemon\\6.png"
    },

    squirtle = {
        name: "Squirtle",
        num: 7,
        description: 'Type 1: Water  |  Type 2: N/A  |  Gen: 1  |  Rarity: 4',
        img: "pokemon\\7.png"
    },

    wartortole = {
        name: "Wartortle",
        num: 8,
        description: 'Type 1: Water  |  Type 2: N/A  |  Gen: 1  |  Rarity: 5',
        img: "pokemon\\8.png"
    },

    blastoise = {
        name: "Blastoise",
        num: 9,
        description: 'Type 1: Water  |  Type 2: N/A  |  Gen: 1  |  Rarity: 6',
        img: "pokemon\\9.png"
    },

    caterpie = {
        name: "Caterpie",
        num: 10,
        description: 'Type 1: Bug  |  Type 2: N/A  |  Gen: 1  |  Rarity: 1',
        img: "pokemon\\10.png"
    },

    metapod = {
        name: "Metapod",
        num: 11,
        description: 'Type 1: Bug  |  Type 2: N/A  |  Gen: 1  |  Rarity: 3',
        img: "pokemon\\11.png"
    },

    butterfree = {
        name: "Butterfree",
        num: 12,
        description: 'Type 1: Bug  |  Type 2: Flying  |  Gen: 1  |  Rarity: 4',
        img: "pokemon\\12.png"
    },

    weedle = {
        name: "Weedle",
        num: 13,
        description: 'Type 1: Bug  |  Type 2: Poison  |  Gen: 1  |  Rarity: 1',
        img: "pokemon\\13.png"
    },

    kakuna = {
        name: "Kakuna",
        num: 14,
        description: 'Type 1: Bug  |  Type 2: Poison  |  Gen: 1  |  Rarity: 3',
        img: "pokemon\\14.png"
    },

    beedrill = {
        name: "Beedrill",
        num: 15,
        description: 'Type 1: Bug  |  Type 2: Poison  |  Gen: 1  |  Rarity: 4',
        img: "pokemon\\15.png"
    },

    pidgey = {
        name: "Pidgey",
        num: 16,
        description: 'Type 1: Normal  |  Type 2: Flying  |  Gen: 1  |  Rarity: 1',
        img: "pokemon\\16.png"
    },

    pidgeotto = {
        name: "Pidgeotto",
        num: 17,
        description: 'Type 1: Normal  |  Type 2: Flying  |  Gen: 1  |  Rarity: 3',
        img: "pokemon\\17.png"
    },

    pidgeot = {
        name: "Pidgeot",
        num: 18,
        description: 'Type 1: Normal  |  Type 2: Flying  |  Gen: 1  |  Rarity: 4',
        img: "pokemon\\18.png"
    },

    rattata = {
        name: "Rattata",
        num: 19,
        description: 'Type 1: Normal  |  Type 2: N/A  |  Gen: 1  |  Rarity: 1',
        img: "pokemon\\19.png"
    },

    raticate = {
        name: "Raticate",
        num: 20,
        description: 'Type 1: Normal  |  Type 2: N/A  |  Gen: 1  |  Rarity: 4',
        img: "pokemon\\20.png"
    }
 ]



// NAME SEARCH BAR FUNCTIONs

// onKeyDown
// Name search bar validation
let namEntered = function (e) {

    //validates key entry
    if((e.keyCode < 65 || e.keyCode > 90) && e.keyCode != 13 && e.keyCode != 8){
        e.preventDefault();

    //validates 20 char limit
    } else if ((e.target.value.length >= 20) && e.keyCode != 13 && e.keyCode != 8){
        e.preventDefault();
    }
}

// onKeyUp from name search
// updates results based on name search
let namInput = function(e) {
    
    //filter results array
    namVal = e.target.value.toLowerCase();
    result = pokemonArr.filter(pokemon => pokemon.name.toLowerCase().includes(namVal));

    //update dynamic listen
    updateSearch();

    //display result on enter key
    if(e.keyCode == 13 && result.length > 19){
        result.length = 0;
        displayResult();
    } else if (e.keyCode == 13){
        displayResult();
    }
}


// NUMBER SEARCH FUNCTION

//#numSearch onKeyUp
let numEntered = function(e){
    
    //filter results
    result = pokemonArr.filter(character => character.num.toString().includes(e.target.value));
    updateSearch();

    //prevents a non-number key from being entered
    if((e.keyCode < 47 || e.keyCode > 58) && e.keyCode != 13){
        e.preventDefault();

    //enter key functionality
    } else if (e.keyCode === 13){

        result = pokemonArr.filter(character => character.num.toString().includes(e.target.value));

        if(result.length > 19){
            result.length = 0;
            displayResult();
        } else {
            displayResult();
        }

    // Validates number range
    } else if (e.target.value < 1 || e.target.value > 20){
        alert("Number is out of bounds. Please enter a number between 1 and 20")
        numSearch.value = null;
    }
}

//onClick for both search buttons
let searchBtn = function() {

    result = pokemonArr.filter(character => character.num.toString().includes(numSearch.value));

    if(result.length > 19){
        result.length = 0;
        displayResult();
    } else {
        displayResult();
    }
}

//displays the appropriate alert based on search results
let displayResult = function() {
    resultAmount = result.length;

    switch(resultAmount) {
        case 0:
            alert("No results found");
            break;
        case 1: 
            alert(result[0].name + " | 0"
            + result[0].num + "\n\t" + result[0].description);
            break;
        case 2:
            alert(result[0].name + " | 0" + result[0].num + "\n\t" + result[0].description + "\n"
            + result[1].name + " | 0" + result[1].num + "\n\t" + result[1].description)
            break;
        case 3:
            alert(result[0].name + " | 0" + result[0].num + "\n\t" + result[0].description + "\n"
            + result[1].name + " | 0" + result[1].num + "\n\t" + result[1].description + "\n" 
            + result[2].name + " | 0" + result[2].num + "\n\t" + result[2].description)
            break;
        case 4:
            alert(result[0].name + " | 0" + result[0].num + "\n\t" + result[0].description + "\n"
            + result[1].name + " | 0" + result[1].num + "\n\t" + result[1].description + "\n"
            + result[2].name + " | 0" + result[2].num + "\n\t" + result[2].description + "\n"
            + result[3].name + " | 0" + result[3].num + "\n\t" + result[3].description)
            break;
        default:
            alert(result[0].name + " | 0" + result[0].num + "\n\t" + result[0].description + "\n"
            + result[1].name + " | 0" + result[1].num + "\n\t" + result[1].description + "\n"
            + result[2].name + " | 0" + result[2].num + "\n\t" + result[2].description + "\n"
            + result[3].name + " | 0" + result[3].num + "\n\t" + result[3].description + "\n"
            + result [4].name + " | 0" + result[4].num + "\n\t" + result[4].description);
    }
    nameSearch.value = null; //clears the name search bar
    numSearch.value = null; //clears the num search bar

    //clears dynamic search list
    while(listE.firstChild){
        listE.firstChild.remove();
    };
}


let updateSearch = function() {

    if(result.length > 0 && result.length < 20) {
        
        //Removes all children from list
        while(listE.firstChild){
            listE.firstChild.remove();
        };

        //Imports all pokemon included in search
        for(let i = 0 ; i < result.length ; i++)
        {

            //creates new list item and appends it to list
            let newItem = document.createElement("li");
            listE.appendChild(newItem);

            //creates new div for the image, number, and name
            let imgBlock = document.createElement("div")
            newItem.appendChild(imgBlock)

            //creates new image incorporating attributes, appends to the img block
            let newImg = document.createElement("img");
            newImg.src = result[i].img;
            newImg.alt = result[i].name;
            newImg.width = 70;
            newImg.height = 70;
            imgBlock.appendChild(newImg);

            //creates the text and adds it to the list item
            let titleText = document.createTextNode(result[i].num + " - " + result[i].name);
            newItem.appendChild(titleText);

            //Create new div for description text
            let descriptionBlock = document.createElement("div");
            descriptionBlock.style.fontSize = "15px";
            newItem.appendChild(descriptionBlock);

            //Description text appended to descriptionBlock
            let descriptionText = document.createTextNode(result[i].description);
            descriptionBlock.appendChild(descriptionText);
        }

        divE.style.display = "inline-block";
    } else {
        divE.style.display = "none";
    }
}