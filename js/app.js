$(document).ready(function () {

// METHOD KYLE AND KAESIDE USED
// use enter to submit
    // $('#user-input').keydown(function (e) {
    // 	console.log("hello")
    //     if (e.keyCode == 13) {
    //         $("#add-item").submit();
    //     }
    // });

//SIMPLER "SUBMIT" METHOD
// Button-click functionality
    $(".add-item").submit(function (event) {
    	event.preventDefault();
        // Put text input into a variable
        var shoppingItem = $('.user-input').val();
        // var userInput = document.getElementById('user-input');
        // var shoppingItem = userInput.value;

        if (shoppingItem === '') {
            alert("Please enter an item");
        }
        else {
            // Append text input variable into list
            $('.shoppingList').append('<li>' + shoppingItem + ' ' + '<button class ="btn btn-danger delete">Delete Item</button></li>');
			$('.user-input').val("");
            // userInput.value = '';


        }
    });

// Delete list item
    $('.shopping-list').on("click", ".delete", function () {
        $(this).parent().remove();
    });
});


// Prepend li from list
