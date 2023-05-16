/* Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен 
відображатися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

const refs = {
  inputValue: document.querySelector("#name-input"),
  outputValue: document.querySelector("#name-output"),
};

refs.inputValue.addEventListener("input", onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value !== "") {
    refs.outputValue.textContent = event.currentTarget.value;
  } else {
    refs.outputValue.textContent = "Anonymous";
  }
}
