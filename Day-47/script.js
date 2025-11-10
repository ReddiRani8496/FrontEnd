// function printHello() {
//   console.log("Hello");
//   let a = 10;

//   console.log(a);

//   //   var b = 20;
//   //   console.log(b);
// }

// // console.log(b);

// printHello();
// // printHello();
// // printHello();

// // if (true) {
// //   var num = 20;
// // }
// // console.log(num);

// add two numbers

// function add(a, b) {
//   console.log(a + b);
// }

// add(10, 20);

// function increment(a) {
//   console.log(a + 1);
// }

// increment(10);

// function add(a, b) {
//   console.log(a + b);
// }

// add(10, 30);

// function printString(str) {
//   //   console.log(str.toUpperCase());
//   return str.toUpperCase();
// }

// console.log(printString("Hello"));

// count number of vowels in given string(a,e,i,o,u)

// function countVowels(str) {
//   str = str.toLowerCase();
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       count++;
//     }
//   }

//   console.log(count);
// }
// countVowels("hello rock star");

// function addTwoNumbers(a,b)

// let addTwoNumbers = function (a, b) {
//   console.log(a + b);
// };

// addTwoNumbers(10, 20);

// let printHello = function () {
//   console.log("Hello");
// };

// printHello();

let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((val) => console.log(val));

// arr.forEach(function (val) {
//   console.log(val);
// });

function printVal(val) {
  console.log("inside the function");
  console.log(val);
}

// printVal(arr[0]);
// printVal(arr[1]);
// printVal(arr[2]);
// printVal(arr[3]);

// for (let i = 0; i < arr.length; i++) {
//   printVal(arr[i]);
// }

// arr.forEach(printVal(val));

// arr.forEach(function (val) {
//   console.log(val);
// });

// arrow functions =>

// arr.forEach((val) => {
//   console.log(val);
// });

// arr.forEach((val) => console.log(val));

let arr1 = [1, 2, 3];

function printVal(val) {
  console.log(val);
}

// for (let i = 0; i < arr1.length; i++) {
//   printVal(arr[i]);
// }

arr1.forEach(function (val) {
  console.log(val);
});

arr1.forEach((val) => {
  console.log(val);
});

arr1.forEach((val) => console.log(val));
