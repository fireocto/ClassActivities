// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let tacos = "my favorite food!";
let salsa = 39;
let quesadilla = true;
let beer = null;
let enchiladas;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof tacos);
console.log(typeof salsa);
console.log(typeof quesadilla);
console.log(typeof enchiladas);
console.log(typeof beer);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let number = `This much is ${quesadilla}: mexican food is ${tacos} `;
console.log(number);
// reassign the value of the variable that references "null"
beer = "good.";
// print the value and its type
console.log(beer);
// print a variable that causes a ReferenceError

// alter the previous line to no longer cause a ReferenceError
