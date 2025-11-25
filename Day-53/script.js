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

// function sum(a, b) {
//   console.log(a + b); // 30
// }

// function sub(a, b) {
//   console.log(a - b); // -10
// }

// function calculator(a, b, calcFunction) {
//   // 10, 20,
//   calcFunction(a, b);
// }

// calculator(10, 20, sum);

// calculator(10, 20, sub);

// console.log("before timeout");
// function printData(data) {
//   setTimeout(() => {
//     console.log(data);
//   }, 3000);
// }

// printData(10); // after 3 seconds 10
// printData(20); // after print 10, then three seconds 20
// printData(30); // after 3 seconds 30

// console.log("line number 58");

// function printData(data, nextPrintData) {
//   setTimeout(() => {
//     console.log(data); // 10, 20
//     if (nextPrintData) {
//       nextPrintData(); //printData(20)
//     }
//   }, 3000);
// }

// printData(10, () => {
//   printData(20, () => {
//     printData(30, () => {
//       printData(40, () => {
//         printData(50, () => {
//           printData(60);
//         });
//       });
//     });
//   });
// });

function printData() {
  return new Promise((resolve, reject) => {
    console.log("inside promise");
    reject("error ");
  });
}

let data = printData();

console.log(data);
