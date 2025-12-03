// block scope -> if we declare let and const variables within the block, scope is inside the block
// we can't access outside the block

// block multiple statement placed together as a single statement

// if (true) {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }

// console.log(a); // 10
// console.log(b); // error
// console.log(c); // error

// var variables are function scoped variable
// function x() {
//   var num = 10;
//   console.log(num);
// }
// x();
// console.log(num);

// Variable Shadowing

// if inner scope has the same variable name as outer scope, then priority goes to inner scope and it will
// print inner scope value.

// var a = 10;
// let b = 20;
// const c = 30;

// if (true) {
//   var a = 100;
//   let b = 200;
//   const c = 300;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function x() {
//   var a = 100;
//   console.log(a);
// }
// x();
// console.log(a);

// clouser -> a function with it's lexical environment bundled together is called clouser.
function x() {
  var a = 10;

  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}

const z = x();
console.log(z);
z();

console.log(num);

var num = 20;

hello();

function hello() {
  console.log("hello");
}
