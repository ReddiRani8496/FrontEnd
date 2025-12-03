(function printHello() {
  console.log("Hello");
})();

// Immediately Invoke function Expression (IIFE)

(function addTwoNums(a, b) {
  console.log(a + b);
})(10, 20);

// Higher Order functions

// The functions which take another function as a argument or a function returns a function.

// const add = (a, b) => {
//   console.log(a + b);
// };

// const subStract = (a, b) => {
//   console.log(a - b);
// };

// function calculator(a, b, fun) {
//   fun(a, b);
// }

// calculator(10, 20, add);
// calculator(10, 20, subStract);

// in the above caluculator function is called higher order function
// fun function is called call back function

const add = (a, b) => {
  return a + b; // 10+20 = 30
};

const subStract = (a, b) => {
  return a - b;
};

function calculator(a, b, fun) {
  return fun(a, b); // 30
}

let res = calculator(10, 20, add);
console.log(res);
let sub = calculator(10, 20, subStract);
console.log(sub);

const obj = {
  name: "rock",
  age: 20,
  fname: "star",
};
console.log(obj["name"]);
console.log(obj["fname"]);
