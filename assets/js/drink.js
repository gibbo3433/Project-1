// Add your code for drink.html and drink.css

// Linking the id's of these div's to the chosen variables
var cocktailButton = document.getElementById("cocktail-button");
var beerButton = document.getElementById("beer-button");

var cocktailSearchHistory = [];
var beerSearchHistory = [];
 
// Find a random cocktail
function getRandomCocktail () {

    var findRandomCocktail = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

    fetch(findRandomCocktail)
     .then(function (response) {
        return response.json();
     })
     .then (function (randomCocktailData) {
        // check that it has found a random cocktail
        console.log(randomCocktailData)

        // Start the function to show our random cocktail on the page
        displayRandomCocktail(randomCocktailData);
     })}


function getRandomBeer () {}

// Finds the random cocktail name and img
function displayRandomCocktail (randomCocktailData) {
    
    // Grabs the name and sets its var
    var cocktailName = `${randomCocktailData.drinks[0].strDrink}`
    console.log(cocktailName)

    // Grabs the picture and sets its var
    var cocktailPic = `${randomCocktailData.drinks[0].strDrinkThumb}`
    console.log(cocktailPic)
}









// Starts up creating the cocktail and beer random history to be displayed
//startCocktailRandomHistory ();
//startBeerRandomHistory ();

// Adding an event listener so that when the id'd button is pressed, the specific function starts:
cocktailButton.addEventListener("click", getRandomCocktail) 
beerButton.addEventListener("click", getRandomBeer) 


// console.log what button they have pressed

// console log later the title of the beer from the api and add it into the beer/cock search history array

// need the entire gets search history and present functions once the main part is done
