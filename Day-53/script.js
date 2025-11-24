// function printHello() {
//   console.log("Hello");
// }

// function myFunction(value) {
//   value();
// }

// myFunction(() => {
//   console.log("Hello");
// });

// settime out

// console.log("1");
// console.log("2");
// console.log("3");

// function hello() {
//   console.log("hello");
// }

// setTimeout(hello, 3000); // function, timeout(delay time)

// setTimeout(() => {
//   console.log("hello");
//   console.log("hey");
// }, 3000);

function sum(a, b) {
  console.log(a + b); // 30
}

function sub(a, b) {
  console.log(a - b); // -10
}

function calculator(a, b, calcFunction) {
  // 10, 20,
  calcFunction(a, b);
}

calculator(10, 20, sum);

calculator(10, 20, sub);
