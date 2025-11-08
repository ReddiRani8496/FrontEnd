const person = {
  name: "rock",
  age: 20,
};

console.log(person.age);
console.log(person.name);

let arr = [1, 2, 3, 4];
console.log(arr[2]);

arr.forEach((num) => console.log(num));

// const car = {
//   price: 100000,
//   color: "black",
//   model: "bmw",
// };

// console.log(car.price);
// console.log(car.color);
// console.log(car.model);

// object is key value pair

const car = new Object({
  price: 1000,
  color: "red",
  model: "benz",
});

console.log(car.price); // objectname.key
console.log(car.color);
console.log(car.model);

console.log(car["price"]); // objectname["keyname"]

console.log(car["color"]);

console.log(car["model"]);

for (let key in car) {
  console.log(key + " " + car[key]);
}

const student = {
  id: 1,
  name: "nick",
  class: "8th",
  fee: 15000,
};

for (let key in student) {
  console.log(key + " " + student[key]);
}

console.log(Object.keys(student).length);

console.log(Object.keys(car).length);
