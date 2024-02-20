const pizzaToppings = ["pepperoni", "mushrooms", "pickles", "anchovies"];

function greetCustomer() {
  let greeting = "welcome to pizza place! our toppings are: ";
  for(let name of pizzaToppings) {
    greeting += `${name}, `;
  }
  console.log(greeting);
}

greetCustomer(pizzaToppings);
