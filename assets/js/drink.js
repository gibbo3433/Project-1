// Add your code for drink.html and drink.css

// Linking the id's of these div's to the chosen variables
var cocktailButton = document.getElementById("cocktail-button");
var beerButton = document.getElementById("beer-button");

var cocktailSearchHistory = [];
var beerSearchHistory = [];

function getRandomCocktail () {
   

}

function getRandomBeer () {

}





// Starts up creating the cocktail and beer random history to be displayed
startCocktailRandomHistory ();
startBeerRandomHistory ();

// Adding an event listener so that when the id'd button is pressed, the specific function starts:
cocktailButton.addEventListener("click", getRandomCocktail) 
beerButton.addEventListener("click", getRandomBeer) 


// console.log what button they have pressed

// console log later the title of the beer from the api and add it into the beer/cock search history array

// need the entire gets search history and present functions once the main part is done
