let employee = {
  id: 1,
};

console.log(employee);

let nameOfTheEmployee = "rock";
let key = "name";

employee["name"] = "rock";

console.log(employee);

let companyName = "abc";

employee["companyname"] = companyName;
console.log(employee);

console.log(Object.keys(employee).length);

for (let key in employee) {
  console.log(key + " " + employee[key]);
}

let fname = "rock";
console.log(fname);

console.log(fname.concat("star"));

console.log(fname);
