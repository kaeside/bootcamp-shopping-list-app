$(document).ready(function () {
// Button-click functionality
    $("#add-item").click(function () {
        // Put text input into a variable
        var userInput = document.getElementById('user-input');
        var shoppingItem = userInput.value;

        // Append text input variable into list
        $('#shoppingList').append('<li>' + shoppingItem + '<button class ="btn btn-danger delete">Delete Item</button></li>');
    });

// Delete list item
    $('#shoppingList').on("click", ".delete", function() {
    	$(this).parent().remove() 
    });
});


// Prepend li from list

