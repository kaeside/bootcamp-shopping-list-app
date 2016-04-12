$(document).ready(function () {
// Button-click functionality
    $("#add-item").click(function () {
        // Put text input into a variable
        var userInput = document.getElementById('user-input');
        var shoppingItem = userInput.value;

        // Append text input variable into list
        $('.shoppingList').append('<li>' + shoppingItem + '</li>');
    });
});


// Prepend li from list

