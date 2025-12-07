var colorarray = ["red", "green", "blue", "orange"];

let bodyelement = document.querySelector("body");
let box = document.getElementById("colorbox");

const changeBg = (index) => {
  let color = colorarray[index];
  bodyelement.style.backgroundColor = color;
};

colorarray.forEach((color, index) => {
  console.log("color", color);
  let spanEle = document.createElement("span");
  spanEle.style.backgroundColor = color;
  console.log("color", color);
  spanEle.addEventListener("click", () => {
    changeBg(index);
  });
  box.appendChild(spanEle);
});
