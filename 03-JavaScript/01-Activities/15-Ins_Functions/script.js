// Functions are reusable blocks of code that perform a specific task
// This is a function declaration 
function declareHello() { 
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
}

// This is a function expression
var expressHello = function() { 
  console.log("Hello, I am a function expression.");
  console.log("-----------------------------------");
  return;
};

// Functions must be called to execute
// declareHello(); 
// expressHello();

//Functions can be called again to make the block of code execute again
// declareHello(); 

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
// comma seperates three arguments here (x,y,z) are parameters
function declareHelloAgain(x,y,z) { 
  console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
  console.log("-----------------------------------");
  return;
}
// (7,"Hello", true) are arguments
// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
// declareHelloAgain(7, "Hello", true);
// string can be  "" '' or ``
// number can be 
// array[] we acces them via an index
// array[0];

// objects are {key:value}
function getRandomName() {
  console.log('getRandomName')
  var randomIndex = 1
  var names = ["Vic", "Alex", "Losha"];
  console.log(names[randomIndex]);
  console.log([1,2,3])
  var randomName = names[(Math.floor(Math.random() * names.length))];
  console.log(randomName.toUpperCase())
  return [randomName]
}
var myName = getRandomName();
console.log("myName: ", myName[0].toUpperCase())
// focus on the data type and the goal, try to be generic
// console.log("Alex".toUpperCase())
// WHAT CAN I DO TO MY DATATYPES?
// STRING
//ARRAY
//OBJECT

