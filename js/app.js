/*jshint esversion: 6 */
$(function () {
    $(".add-item").submit(function (event) {
    	event.preventDefault();
        var shoppingItem = $('.user-input').val();

        if (shoppingItem === '') {
            alert("Please enter an item");
        }
        else {
            $('.shopping-list').append(`<li> ${shoppingItem} <button class ="btn btn-danger delete">Delete Item</button></li>`);
			$('.user-input').val("");

        }
    });

    $('.shopping-list').on("click", ".delete", function () {
        $(this).parent().remove();
    });
});
