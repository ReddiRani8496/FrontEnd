let addButton = document.querySelector("button");

let inputElement = document.getElementById("todoText");

let itemsList = document.getElementById("listItems");

addButton.addEventListener("click", () => {
  let text = inputElement.value;

  let li = document.createElement("li");
  li.innerText = text;
  itemsList.appendChild(li);
  inputElement.value = "";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    itemsList.removeChild(li);
  });
});
