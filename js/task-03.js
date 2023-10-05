const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
// console.log(list);

function renderList() {
  const murkup = images
    .map((image) => {
      return `<li><img src='${image.url}' alt='${image.alt}'></li>`;
    })
    .join("");
  // console.log(murkup);
  list.insertAdjacentHTML("afterbegin", murkup);
}
renderList();

list.style.display = "flex";
list.style.flexDirection = "column";
list.style.alignItems = "center";

const imagesInList = document.querySelectorAll(".gallery img");

imagesInList.forEach((image) => {
  image.style.maxWidth = "calc(100% - 100px)";
  image.style.margin = "0 50px";
});
