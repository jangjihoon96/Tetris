const playground = document.querySelector(".playground > ul");

for (let i = 0; i < 20; i++) {
  const li = document.createElement("li");
  const ul = document.createElement("ul");
  for (let j = 0; j < 10; j++) {
    const matrix = document.createElement("li");
    ul.insertAdjacentElement("afterbegin", matrix);
  }
  li.insertAdjacentElement("afterbegin", ul);
  playground.insertAdjacentElement("afterbegin", li);
}
