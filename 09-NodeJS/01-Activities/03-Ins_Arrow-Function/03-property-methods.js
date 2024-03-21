// Avoid using arrow functions for object methods
var dog = {
  name: "Lassie",
  sound: "Woof!",
  // these are the object methods, here is where you DO NOT USE arrow functions
  // makeSound: function () { console.log(this.sound) }; this is how it should look like in an object, it has to do with the way arrow functions uses the 'this' keyword
 makeSound: function () { console.log(this.sound) },
 readTag: function () { console.log("The dog's tag read: " + this.name + ".")}
//  this is how it was original and readTag was undefined
 // makeSound: () => console.log(this.sound),
  // readTag: () => console.log("The dog's tag reads: " + this.name + ".")

};

// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag();

// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window
