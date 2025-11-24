let num = 5;

console.log(num); // undefined

console.log(square);

let square1 = square(num);

console.log(square1);

let square2 = square(3);

console.log(square2);

function square(num) {
  let res = num * num;
  return res;
}

let value1;
console.log(value1); // undefined

console.log(value2); // Not defined

const value2 = 10;
