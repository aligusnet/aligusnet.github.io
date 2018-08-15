$(document).ready(function() {
 	$(".mobile-menu-icon").on("click", function() {
 		$("nav").toggleClass("active");
 		$(this).toggleClass("open");
	});
});
