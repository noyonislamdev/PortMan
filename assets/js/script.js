(function($) { 
	"use strict";  

	//Preloader js{ 
		$('.preloader').fadeOut();
		$('.status-mes').delay(350).fadeOut('slow'); 
	
	// Active Slick Nav 
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('#header-area').addClass('sticky');
		} else {
			$('#header-area').removeClass('sticky');
		}
	});


	$('#category-slider').owlCarousel({
		loop: true,
		item:6,
		margin: 25,
		navText: ["<i class='bx bx-left-arrow-alt'></i>" ,"<i class='bx bx-right-arrow-alt' ></i>"],
		nav: true,
		responsive: {
			440: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 5
			}
		}
	});

	window.onload = function() {
		$('.counter-value').each(function(){
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			},{
				duration: 3500,
				easing: 'swing',
				step: function (now){
					$(this).text(Math.ceil(now));
				}
			});
		});
	}
		
}(jQuery));


