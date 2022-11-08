// Add your code for ingredient.html and ingredient.css
var userFormEl = document.querySelector('#user-form');
var meatEl = document.querySelector('#meat');
var vegEl = document.querySelector('#veg');
var fruitEl = document.querySelector('#fruit');

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var meatname = meatEl.value.trim();
    var vegname = vegEl.value.trim();
    var fruitname = fruitEl.value.trim();
  
    console.log("meatname ", meatname);
    console.log("vegname ", vegname);
    console.log("fruitname ", fruitname);

    meatEl.value = "";
    vegEl.value = "";
    fruitEl.value = "";
};

userFormEl.addEventListener('submit', formSubmitHandler);