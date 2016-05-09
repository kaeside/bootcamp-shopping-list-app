/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	/*jshint esversion: 6 */
	$(function () {
	    $(".add-item").submit(function (event) {
	        event.preventDefault();
	        var shoppingItem = $('.user-input').val();
	
	        if (shoppingItem === '') {
	            alert("Please enter an item");
	        } else {
	            $('.shopping-list').append('<li> ' + shoppingItem + ' <button class ="btn btn-danger delete">Delete Item</button></li>');
	            $('.user-input').val("");
	        }
	    });
	
	    $('.shopping-list').on("click", ".delete", function () {
	        $(this).parent().remove();
	    });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bootcamp-shopping-list-app.1.0.0.js.map