$(document).ready( function() {
	
	//$(".vertical.main").addClass("hidden");
	//$(".vertical.expo.right").css("right", "16vw");
	//$(".vertical.excursions.right").css("right", "8vw");
	//$(".vertical.souvenirs").css("right", "0vw");
	
	//$(".vertical.expo.left").css("left", "8vw");
	//$(".vertical.excursions.left").css("left", "16vw");
	//$(".vertical.expo.left").addClass("hidden");
	//$(".vertical.excursions.left").addClass("hidden");
	
	$(".content.expo").css("display", "none");
	$(".content.excursions").css("display", "none");
	$(".content.souvenirs").css("display", "none");
	
	$(".menu p").click( function() {
		$id = $(this).attr("id");
		if ( ($id == "main") && !($(".content.main").is(":visible")) ) {
			$(".content").css("display", "none");
			$(".content.main").css("display", "block");					
		}
		if ( ($id == "expo") && !($(".content.expo").is(":visible")) ) {
			$(".content").css("display", "none");
			$(".content.expo").css("display", "block");	
		}
		if ( ($id == "excursions") && !($(".content.excursions").is(":visible")) ) {
			$(".content").css("display", "none");
			$(".content.excursions").css("display", "block");	
		}
	})
	

	
})