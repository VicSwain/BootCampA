const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};
// using the template literal includes the line break what you type, space, new lines all are LITERAL
const greeting = `My name is ${arya.first}!
I am loyal to ${arya.allegiance}.`;

console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.