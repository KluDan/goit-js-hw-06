const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.childElementCount}`);

[...categoriesEl.children].forEach((categoryEl) => {
  const titleEl = categoryEl.querySelector("h2").textContent;
  const elementsNumber = categoryEl.querySelector("ul").childElementCount;
  console.log(`\nCategory: ${titleEl}`);
  console.log(`Elements: ${elementsNumber}`);
});
