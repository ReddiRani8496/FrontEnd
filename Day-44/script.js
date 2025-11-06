let str = "hello";
console.log(str);

let str1 = "hello world";
console.log(str1);

let age = 20;

console.log("My age is " + age + "years");

// string templates ``    ${}

console.log(`My age is ${age}years`);

console.log(`addition of two numbers is ${10 + 30 - 30}`);

// string methods

// at, charAt

let nameOfThePerson = "rock";

console.log(nameOfThePerson.at(2));

console.log(nameOfThePerson.charAt(1));

// group of characters, index starting from 0

console.log(nameOfThePerson[1]);

console.log(nameOfThePerson.toLowerCase());
console.log(nameOfThePerson.toUpperCase());

console.log(nameOfThePerson.substring(-1, 3)); // end index is excluded -> 1,2  oc
// in the substring if starting index is less than 0, it will consider 0

console.log(nameOfThePerson.substring(1));
console.log("after line 38");
console.log(nameOfThePerson.slice(-1, 3));
console.log(nameOfThePerson);

// concat
let fname = "rock";
let sname = "star";
let fullname = fname.concat(" ", sname);
console.log(fullname);

// trim -> remove starting and ending whitespaces
fname = "    rock     ";
console.log(fname.trim());

// trimStart() -> removes spaces at the starting of the string

console.log(fname.trimStart());
console.log(fname.trimStart().length);

console.log(fname.trimEnd());
console.log(fname.trimEnd().length);

// pad

let num = "15";
console.log(num.padStart(10, "*"));

console.log(num.padEnd(8, "*"));

let compnayName = "Google";

console.log(compnayName.repeat(20));

// replace

let sentence = "I love Microsoft Microsoft looks so beautiful";

console.log(sentence.replace("Microsoft", "Google"));

// includes -> checks word is there in the string or no
console.log(sentence.includes("google"));

// startsWith

console.log(sentence.startsWith("I"));

// endsWith
console.log(sentence.endsWith("Microsoft!"));

// indexOf(word)

console.log(sentence.indexOf("Microsoft"));

// lastIndexOf(word)

console.log(sentence.lastIndexOf("Microsoft"));
