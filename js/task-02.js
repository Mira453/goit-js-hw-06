const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const elements = ingredients.map(vegetable => {
  const listElement = document.createElement("li");
  listElement.textContent = `${vegetable}`;
  return listElement
});
list.append(...elements);



