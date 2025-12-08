// {
//   let a = 10;
//   var b = 20;
//   const c = 30;
// }

// block -> placing multiple javascript lines together example in if block, we are placing multiple lines
// as a single block

if (true) {
  let a = 10;
  console.log(a);
}

// variable shadowing -> the inner scope variable shares the same name as the outer scope variable,
// the priority goes to the inner scope variable
// var shadowing happens in function level
// let and const shadowing happens block level

var a = 100;
let b = 200;
const c = 300;
{
  var a = 10; // here a is shadowed with new value 10
  let b = 20; // here b shadows outer scope b
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}

console.log(a); // 10
console.log(b); // 200
console.log(c); // 300

// Illegal shadowing -> we can't shadow let using var

// let num = 10;
// {
//   var num = 20;
// }

// we can shadow

var num = 10;
{
  let num = 20;
}

// Clousers -> function along with its lexical scope bundles together forms a clouser.

// function x() {
//   var a = 10;
//   function y() {
//     var a = 20;
//     console.log(a);
//   }
//   y();
//   console.log(a);
// }

// x();

// we can return a function from a function

function x() {
  var a = 10;
  // function y() {
  //   console.log(a);
  // }
  // a = 100;
  // return y; // when we return the function, not only function is returned, the function with its lexical scope is returned

  return function y() {
    console.log(a);
  };
}

var fun = x();
fun(); // even y function we are accessing outside x function still it has lexical environment, so it
// points to the reference a.

// SetTimeOut
function sample() {
  for (let i = 1; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("set time out");
}

sample();
