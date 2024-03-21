var shoppingFormEl = $('#shopping-form'); // this is the input field
var shoppingListEl = $('#shopping-list'); // this is the list that is printed to the page 


function handleFormSubmit(event) {
    // event.preventDefault();

    $.each(shoppingFormEl, function() {
        var submitEl = $('input:shopping-form');
        var items = [];
        console.log(submitEl);
        $.each(submitEl, function () {
            items.push($(this).val());
        })
        console.log(items);
    })
}
// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('click', handleFormSubmit());