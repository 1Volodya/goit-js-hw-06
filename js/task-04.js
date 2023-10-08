const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById("value");

let counterValue = 0;

decrementBtn.addEventListener("click", function () {
  counterValue -= 1;
  counterValueSpan.textContent = counterValue;
});

incrementBtn.addEventListener("click", function () {
  counterValue += 1;
  counterValueSpan.textContent = counterValue;
});
