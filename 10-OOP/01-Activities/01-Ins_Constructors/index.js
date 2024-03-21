// Example dog object made from scratch. Writning 100 of these from scratch would take a long time.
// const dog = {
//   name: 'Rex',
//   age: 2,
//   breed: 'Bulldog'
// }

// Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
// used to be able to create multiple objects
function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  // this is a method do not use arrow functions with methods
  this.nap = function () {
    console.log('Zzzzzzzzz');
  };
}

// Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
// new is the keyword to create a new object, creates a new this, and the constructionr creats a new objects and fills the objects to the respective values
const dog = new Dog('Rex', 2, 'Bulldog');

// Calling dog's nap method
dog.nap();
