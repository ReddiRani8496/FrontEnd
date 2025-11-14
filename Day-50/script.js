let divElement = document.getElementById("myDiv");

divElement.onclick = function () {
  console.log("Div element is clicked");
};

// arrow functions

divElement.onclick = () => {
  console.log("Div is clickedddddd");
};

// it will execute the last method -> Div is Clickedddddddddddd

// let a  = 10;

// a = 5;

// console.log(a);

let secondDivElement = document.getElementById("secondDiv");

secondDivElement.onmouseover = () => {
  console.log("Mouse hovered on the second div");
};
