let arr = [1, 2, 3, 4];

// console.log(arr[0]);

// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// => arrow functions

// arr.forEach((val) => console.log(val));

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(`sum of all numbers is ${sum}`);

// array methods

console.log(arr.length);

// 1,2,3,4 => 1,2,3,4,5

// push() -> adds element at the end of the array

arr.push(5);

console.log(arr);

// 6,1,2,3,4,5

// unshift() -> add at starting

arr.unshift(6);
console.log(arr);

// remove last element -> pop()

arr.pop();
console.log(arr);

// remove first elemnt -> shift()

arr.shift();
console.log(arr);

// convert my array into string -> toString()

// let str = arr.toString();
// console.log(str);

let arr1 = [10, 20, 30];
console.log(arr1);

arr = arr.concat(arr1);
console.log(arr);

console.log(arr.slice(1, 4)); // starting is 1st index and eneding 4-1 (3rd index)
console.log(arr); // there won't be any change in the array

console.log(arr.splice(1, 4)); // 1 index to 4 elements

console.log(arr); // in the array it will remove splice elements
