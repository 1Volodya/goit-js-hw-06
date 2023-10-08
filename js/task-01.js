const categories = document.querySelector("#categories");
const itemsAll = categories.children;
console.log("Number of categories:", itemsAll.length);

[...itemsAll].forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  const categoriesList = item.lastElementChild;
  const categoriesItems = categoriesList.children;
  console.log("Elements:", categoriesItems.length);
});
