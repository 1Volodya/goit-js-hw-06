const inputNumber = document.querySelector('input[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

console.log(inputNumber);
console.log(createButton);
console.log(destroyButton);
console.log(boxesContainer);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();

  let boxesHTML = "";
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
  }

  boxesContainer.insertAdjacentHTML("beforeend", boxesHTML);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const numberOfBoxes = inputNumber.value;
  createBoxes(numberOfBoxes);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
