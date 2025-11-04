// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// for (let i = 0; i < 5; i++) {
//   console.log("hello " + (i + 1));
// }

// print   even numbers between 1 to 10

// 1 2 3 4 5 6 7 8 9 10

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// print   odd numbers between 1 to 10

// 1 2 3 4 5 6 7 8 9 10

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// print factors of a given number

// let n = 6;

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }

// count how many factors are there for given number

// let n = 5;
// let factorsCount = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     // checks both the type and value
//     factorsCount++;
//   }
// }

// console.log("Total factors are " + factorsCount);

// check given number is prime or no

// factors ==2 then prime

let n = 8;

let factorsCount = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    factorsCount++;
  }
}

if (factorsCount == 2) {
  console.log(n + " is Prime number");
} else {
  console.log(n + " is not prime");
}
