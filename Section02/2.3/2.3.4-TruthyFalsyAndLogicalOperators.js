// Logical Operators
// what do you expect each line to print?
console.log(true && false); false
console.log(true || false); true
console.log(!true); false
console.log(!(true && false)); true
console.log(false || !false); false

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); false
console.log(!``); true
console.log(!(1 && "false")); true
console.log(NaN || !"true"); false

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 15
let menu = age > 11 ? "full menu" : "kid's menu";

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

if (true && !num) {
  console.log("The number is zero");
}

// Write your if statement here *
