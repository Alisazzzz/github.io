$(document).ready( function() {
	
	$(".vertical.main").css("display", "none");
	$(".vertical.expo").css("right", "16vw");
	$(".vertical.excursions").css("right", "8vw");
	$(".vertical.souvenirs").css("right", "0vw");
	
	$(".content.expo").css("display", "none");
	$(".content.excursions").css("display", "none");
	$(".content.souvenirs").css("display", "none");
	
	
	$(".vertical.expo").click( function() { 
		$(".content").css("display", "none");
		if ( $(".vertical.expo").hasClass("right") ) {
			$(".vertical.expo").css("transition-duration", "500ms");
			$(".vertical.expo").css("transform", "translate(-67vw)");
		} else {
			$(".vertical.expo").css("transition-duration", "500ms");
			$(".vertical.expo").css("transform", "translate(67vw)");
		};
		$(".content.expo").fadeIn("slow", function() {});
		$(".vertical").each( function(index) {
			if ( $(this).hasClass("hidden") ) {
				$(this).removeClass("hidden");
				$(this).fadeIn("slow", function() {});
			}
		});
		$(".vertical.expo").addClass("hidden");
		$(".vertical.expo").css("display", "none");
	});
	
/*	
	$(".vertical.expo").click( function() {
		
		$right = false;
		
		$(".content").fadeOut("fast", function() {
			if ( $(".vertical.expo").hasClass("right") ) {
				$(".vertical.expo").css("transition-duration", "500ms");
				$(".vertical.expo").css("transform", "translate(-67vw)");
				$right = true;
			} else {
				$(".vertical.expo").css("transition-duration", "500ms");
				$(".vertical.expo").css("transform", "translate(67vw)");
				$right = false;
			};
			
			$(".vertical").each( function(index) {
				if ( $(this).hasClass("hidden") ) {
					$(this).removeClass("hidden");
					$(this).fadeIn("slow", function() {	
						//$(".vertical.expo").fadeOut("fast", function() {});						
						$(".content.expo").fadeIn("slow", function() {});
						$(".vertical.expo").addClass("hidden");
						if ($right) {
							$(".vertical.expo").removeClass("right");
							$(".vertical.expo").addClass("left");
						} else {
							$(".vertical.expo").removeClass("right");
							$(".vertical.expo").addClass("left");
						}
						
					});
				};
			});						
		});		
	});
	
	$(".vertical.excursions").click( function() {
		
		$right = false;
		
		$(".content").fadeOut("fast", function() {
			if ( $(".vertical.excursions").hasClass("right") ) {
				$(".vertical.excursions").css("transition-duration", "500ms");
				$(".vertical.excursions").css("transform", "translate(-59vw)");
			} else {
				$(".vertical.excursions").css("transition-duration", "500ms");
				$(".vertical.excursions").css("transform", "translate(59vw)");
			};
			
			$(".vertical").each( function(index) {
				if ( $(this).hasClass("hidden") ) {
					$(this).removeClass("hidden");
					$(this).fadeIn("slow", function() {
						$(".vertical.excursions").fadeOut("fast", function() {});						
						$(".content.excursions").fadeIn("slow", function() {});
						$(".vertical.excursions").addClass("hidden");
						if ($right) {
							$(".vertical.excursions").removeClass("right");
							$(".vertical.excursions").addClass("left");
						} else {
							$(".vertical.excursions").removeClass("right");
							$(".vertical.excursions").addClass("left");
						}
					});
				};
			});						
		});		
	});
*/	
	
	
})