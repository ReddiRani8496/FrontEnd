let addButton = document.querySelector("button.addButton");
let inputElement = document.getElementById("todoText");
let itemsList = document.getElementById("listItems");

function addItem() {
  let text = inputElement.value.trim();

  if (text === "") return;

  let li = document.createElement("li");
  li.innerText = text;
  itemsList.appendChild(li);
  inputElement.value = "";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.classList.add("deleteButton");
  li.appendChild(deleteButton);

  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("editButton");
  li.appendChild(editButton);

  deleteButton.addEventListener("click", () => {
    itemsList.removeChild(li);
  });
  editButton.addEventListener("click", () => {
    enableEdit(li, editButton, text);
  });
}

function enableEdit(li, editButton, originalText) {
  editButton.style.display = "none";

  let input = document.createElement("input");
  input.type = "text";
  input.value = originalText;
  input.style.width = "200px";

  let textNode = li.firstChild;
  li.insertBefore(input, textNode.nextSibling);
  li.removeChild(textNode);
  li.classList.add("edit-mode");

  input.focus();
  input.select();

  function saveEdit() {
    let newText = input.value.trim();
    if (newText === "") {
      itemsList.removeChild(li);
      return;
    }

    li.removeChild(input);
    li.firstChild.textContent = newText;
    li.classList.remove("edit-mode");
    editButton.style.display = "inline-block";

    editButton.onclick = () => enableEdit(li, editButton, newText);
  }

  input.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      saveEdit();
    }
    if (e.code === "Escape") {
      li.removeChild(input);
      li.firstChild.textContent = originalText;
      li.classList.remove("edit-mode");
      editButton.style.display = "inline-block";
    }
  });

  input.addEventListener("blur", saveEdit);
}

addButton.addEventListener("click", () => {
  addItem();
});

inputElement.addEventListener("keyup", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    addItem();
  }
});
