// let buttonElement = document.getElementById("button");

// buttonElement.onclick = () => {
//   console.log("button is clicked");
// };

// buttonElement.onclick = function () {
//   console.log("buttonnnn");
// };

// addEventListener

// buttonElement.addEventListener("click", (e) => {
//   console.log("button of add event listener");
// });

// let secondDiv = document.getElementById("secondDiv");

// let handler = () => {
//   console.log("div");
// };

// secondDiv.addEventListener("mouseleave", handler);

// secondDiv.removeEventListener("mouseleave", handler);

let body = document.querySelector("body");

let toggelButton = document.getElementById("theme");

let currentMode = "light";

toggelButton.addEventListener("click", () => {
  if (currentMode == "light") {
    currentMode = "dark";
    body.setAttribute("class", "dark");
    toggelButton.innerText = "Change Theme to Light Mode";
  } else if (currentMode == "dark") {
    currentMode = "light";
    body.setAttribute("class", "light");
    toggelButton.innerText = "Change Theme to dark Mode";
  }
});
