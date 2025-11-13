let element = document.getElementById("firstDiv");

element.style.backgroundColor = "red";

element.style.fontSize = "25px";

element.style.color = "white";

console.log(element.getAttribute("id"));

let paraElement = document.querySelector("p");

console.log(paraElement.getAttribute("class"));

paraElement.setAttribute("class", "paragraph");

console.log(paraElement.getAttribute("class"));

let newElement = document.createElement("p");

newElement.innerHTML = "Items are completed";

console.log(newElement.innerText);

// let bodyElement = document.querySelector("body");

// element.appendChild(newElement);

// element.prepend(newElement);

// element.before(newElement);
element.append(newElement);
