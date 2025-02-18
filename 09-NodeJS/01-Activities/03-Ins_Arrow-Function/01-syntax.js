// All of the `createGreeting` functions are equivalent
var createGreeting = function(message, name) {
  return message + ", " + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
  return message + ", " + name + "!"; //this is the expression of the function
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!"; // (message, name) these are the parameters

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting); //greeting is the parameter here there is only one hence the lack of () around greeting

// We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "Angie");

// Logs "Hello, Angie!";
greet(greeting);
