'use strict';


function addIngredient(object, ingredient, amount) {
  object[ingredient] = amount;
  return object;
}

function removeIngredient(object, ingredient, amount) {
  delete object[ingredient];
  return object;
}

function updateIngredient (object, ingredient, amount) {
  object[ingredient] = amount;
  return object;
}

function readRecipe (object) {
  for (var key in object) {
    console.log("this recipe calls for " + object[key] + " of " + key);
  }
}
