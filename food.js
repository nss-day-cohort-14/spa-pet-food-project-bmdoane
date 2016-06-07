// Your first task is to build a product page that displays all brands of dog food, the different types, with the price and size for each container volume.

// Create an XHR object
var dogFoodRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
dogFoodRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
dogFoodRequest.addEventListener("error", executeThisIfXHRFails);

// Then tell the XHR object exactly what to do
dogFoodRequest.open("GET", "json/food.json");  // "GET", JSON file path

// Tell the XHR object to start
dogFoodRequest.send();

console.log("First line in JS file");
console.log(Date.now()); // Time stamp when page loads


function executeThisIfXHRFails(xhrEvent) {
  console.log("An error occurred while transferring the data");
}

// All info to the DOM
// Should be a parse data function and a build to the dom
function executeThisCodeAfterFileIsLoaded() {
  // parse the response text as JSON.  Turns string of characters into a JS object
  // (observe that JSON keys are strings, which is not how a JS object is formatted
  // console.log("event", event);
  // console.log("event.target", event.target);
  console.log("food.json successfully loaded!");
  var data = JSON.parse(this.responseText); // = (event.target.responseText)
  // console.log("data", data);

  var dogFood = document.getElementById('dogFood-container');
  var dogFoodHTML = "";

  // Used nested for loops to loop through layers of the JSON data

  for (var i = 0; i < data.dog_brands.length; i++) {
    //console.log("brands", data.dog_brands[i]);
    dogFoodHTML += `<div>Brand: ${data.dog_brands[i].name}</div>`;
    for (var j = 0; j < data.dog_brands[i].types.length; j++) {
      //console.log("types", data.dog_brands[i].types);
      dogFoodHTML += `<div>Types: ${data.dog_brands[i].types[j].type}</div>`;
      for (var k = 0; k < data.dog_brands[i].types[j].volumes.length; k++) {
        //console.log("volumes", data.dog_brands[i].types[j].volumes[k]);
        dogFoodHTML += `<div>Volumes: ${data.dog_brands[i].types[j].volumes[k].name}</div>`;
        dogFoodHTML += `<div>Price: ${data.dog_brands[i].types[j].volumes[k].price}</div>`;
        // Need to build out dom with bootstrap structure 

        dogFood.innerHTML = dogFoodHTML;
      };
    };
  };
}

// Create an XHR object
var catFoodRequest = new XMLHttpRequest();

catFoodRequest.addEventListener("load", executeThisCodeAfterCatFileIsLoaded);
catFoodRequest.addEventListener("error", executeThisIfCatXHRFails);

catFoodRequest.open("GET", "json/cat-food.json");

catFoodRequest.send();

console.log("First line in JS file for cats");
console.log(Date.now()); // Time stamp when page loads

function executeThisIfCatXHRFails(xhrEvent) {
  console.log("An error occurred while transferring the data");
}

function executeThisCodeAfterCatFileIsLoaded() {
  console.log("food.json for cats successfully loaded!");
  var data = JSON.parse(this.responseText);

  var catFood = document.getElementById('catFood-container');
  var catFoodHTML = "";

  for (var i = 0; i < data.cat_brands.length; i++) {
    console.log("brands", data.cat_brands[i]);
    catFoodHTML += `<div>Brand: ${data.cat_brands[i].name}</div>`;
    for (var j = 0; j < data.cat_brands[i].types.length; j++) {
      console.log("types", data.cat_brands[i].types);
      catFoodHTML += `<div>Types: ${data.cat_brands[i].types[j].type}</div>`;
      for (var k = 0; k < data.cat_brands[i].types[j].volumes.length; k++) {
        console.log("volumes", data.cat_brands[i].types[j].volumes[k]);
        catFoodHTML += `<div>Volumes: ${data.cat_brands[i].types[j].volumes[k].name}</div>`;
        catFoodHTML += `<div>Price: ${data.cat_brands[i].types[j].volumes[k].price}</div>`;
        // Need to build out dom with bootstrap structure
        // Add breeds?  Added to JSON.  Need to build into DOM.


        catFood.innerHTML = catFoodHTML;
      };
    };
  };
}


