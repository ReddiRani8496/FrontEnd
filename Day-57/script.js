let arr = [1, 2, 3, 4];

// double -> 2,4,6,8
// square -> 1,4,9,16

// const square = (val) => {
//   console.log(val * val);
// };

// for (let val of arr) {
//   square(val);
// }

// map -> update the value and gives entire array elements

const result = arr.map((val) => val * val);
console.log(result);

const double = arr.map((val) => val * 2);
console.log(double);

// filter -> based on the condition it will filter the array values

let even = arr.filter((val) => val % 2 == 0);
console.log(even);

let odd = arr.filter((val) => val % 2 != 0);
console.log(odd);

// reduce -> single value (sum of the numbers)

let sum = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(sum);
