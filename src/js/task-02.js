const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const ingredientCreateLi = arrayElem => {
  const ingredient = document.createElement("li");
  ingredient.textContent = arrayElem; 
  ingredient.classList.add("item");
  

  return ingredient;
}

const igredientsGet = ingredients.map(ingredientCreateLi);

listEl.prepend(...igredientsGet);




