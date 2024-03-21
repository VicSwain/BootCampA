// WRITE YOUR CODE HERE
var names = ["Vic", "Noah", "Zach", "Troy"];
var classnumber = 0;

console.log(names.length);

for (var i = 0; i < 4; i++) {
    console.log("Welcome to the class " + names[i]);
}

names[3] =  "Bob";
if (names[3] === "Bob") {
    console.log("Bob is in the class")
}
