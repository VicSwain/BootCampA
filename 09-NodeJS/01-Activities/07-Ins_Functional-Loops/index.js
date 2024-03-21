// functions are "1st class citizens"
// callback functions you pass to another function, that function does some work and calls the other function back
// think about leaving your car for an oil change. The phone number you leave for them to call you back is the callback
// callback functions are fucntions that get passed to another function as a parameter that function will do some work and then call the CB function saying I have done some work, now its your turn to do your work


const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop
// patron is the element you can call what you want
moviePatrons.forEach(patron => console.log(patron.age));

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value
// patron is what we are providing to the filter function, its a check, the goal is to filter our some of the array elements
const canWatchRatedR = moviePatrons.filter(function(patron) {
  return patron.age > 17;
});

console.log(canWatchRatedR);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
  // Copy the object being iterated over so that we don't affect the existing object (immutability). Note that this is not the ideal way of copying the object in this case and we will be using another approach (spread operator) for copying objects later in the module.
  const pObj = JSON.parse(JSON.stringify(patron));
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});

console.log("Movie Patrons: ")
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);
