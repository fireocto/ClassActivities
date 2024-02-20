// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function tacoTuesday(tacos, margaritas) {
  console.log(tacos);
  console.log(margaritas);
  return tacos + margaritas;
}
// invoke the function and pass in two numbers

tacoTuesday(4, 6);

// invoke the function and pass in more than two numbers

tacoTuesday(4, 6, 8, 15);

// invoke the function and pass in only one number

tacoTuesday(4);

// change the function to set default values for the parameters

function tacoTuesday(tacos = "no argument given", margaritas = "no argument given") {
  console.log(tacos);
  console.log(margaritas);
  return tacos + margaritas;
}

// again, invoke the function and pass in only one number

tacoTuesday(4);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

function tacoTuesday(tacos, margaritas, ...salsa) {
  console.log(tacos);
  console.log(margaritas);
  console.log(salsa);
  return tacos + margaritas;
}

// again, invoke the function and pass in more than two numbers

console.log(tacoTuesday(4, 5, 8, 9, 14));
