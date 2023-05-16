function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputCountEl = document.querySelector('[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy");
const divBox = document.getElementById("boxes");

createBtn.addEventListener("click", onCreate);
function onCreate() {
  if (
    Number(inputCountEl.value) > Number(inputCountEl.max) ||
    Number(inputCountEl.value) < Number(inputCountEl.min)
  ) {
    alert("Потрібно ввести значення від 1 до 100");
  } else {
    createBoxes(inputCountEl.value);
  }
}

destroyBtn.addEventListener("click", onDestroy);
function onDestroy() {
  inputCountEl.value = "";
  divBox.innerHTML = "";
}

function createBoxes(amount) {
  let size = 30;
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    size += 10;
    const div = `<div class="item" style="display: block; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxes.push(div);
  }
  divBox.insertAdjacentHTML("beforeend", boxes.join(""));
}
