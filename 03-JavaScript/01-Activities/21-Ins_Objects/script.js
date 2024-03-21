// Objects are a collection of properties
// typically assigned a variable name and the idea is that they are all related
// property : value, not an =
// seperated by a , 
// properties opened with {, Arrays open with []
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or boolean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);
planet.name = planet.name.toUpperCase()

console.log(planet)
console.log([planet, planet.age, planet.isPopulated])