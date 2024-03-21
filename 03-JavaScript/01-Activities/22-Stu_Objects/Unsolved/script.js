//WRITE YOUR CODE BELOW
var customerDrink = {
    name: "Vic",
    numberofSuger: 2,
    isReady: true
};

if (customerDrink.isReady === true) {
    console.log("Your order is ready, " + customerDrink.name + " with " + customerDrink.numberofSuger + " sugars.");
} else {
    console.log(customerDrink.name +", your order is still in que");
};