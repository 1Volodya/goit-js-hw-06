const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontSizeControl.addEventListener("input", function (event) {
  const fontSize = event.target.value + "px";
  textElement.style.fontSize = fontSize;
});
