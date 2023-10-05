const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
console.log(list);

function renderList() {
  const listItems = ingredients.map((ingridient) => {
    const item = document.createElement("li");
    item.textContent = ingridient;
    return item;
  });
  console.log(...listItems);
  list.append(...listItems);
}
renderList();
