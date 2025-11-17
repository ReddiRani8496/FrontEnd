let addButton = document.querySelector("button");

let inputElement = document.getElementById("todoText");

let itemsList = document.getElementById("listItems");

function addItem() {
  let text = inputElement.value;

  let li = document.createElement("li");
  li.innerText = text;
  itemsList.appendChild(li);
  inputElement.value = "";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.classList.add("deleteButton");
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    itemsList.removeChild(li);
  });
}

addButton.addEventListener("click", () => {
  addItem();
});

inputElement.addEventListener("keyup", (e) => {
  if (e.code == "Enter" || e.code == "enter") {
    addItem();
  }
});
