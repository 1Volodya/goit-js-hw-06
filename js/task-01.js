const itemsAll = document.querySelectorAll(".listCategories, .item");
console.log("Number of categories:", itemsAll.length);

itemsAll.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  const categories = item.querySelectorAll(".item, li");
  console.log("Elements:", categories.length);
});
