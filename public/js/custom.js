

jQuery(function ($) {
	"use strict";

	// SideBar
	$(".sidebar-opner").on("click", function () {
		$(".sidebar, .app-content, .web-header").toggleClass("active")
	});


	// DropDown
	$(".sidebar .dropdown").on("show.bs.dropdown", function(e){
		$(this).find(".dropdown-menu").first().stop(true, true).slideDown(300);
	}),$(".sidebar .dropdown").on("hide.bs.dropdown", function(e){
		$(this).find(".dropdown-menu").first().stop(true, true).slideUp(300);
	});

});


