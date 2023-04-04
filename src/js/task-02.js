const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("ul");

const items = ingredients.map((element) => {
  const liRef = document.createElement("li");
  liRef.textContent = element;
  liRef.classList.add('item');
 return liRef;
});

  
  ulRef.append(...items);