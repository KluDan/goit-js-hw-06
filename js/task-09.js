function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

button.addEventListener("click", onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = colorValue.textContent =
    getRandomHexColor();
}
