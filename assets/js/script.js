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
	
	// JavaScript for Category Selection and Slider Focus
	const categoryButtons = document.querySelectorAll('.category_selector button');
	const slides = document.querySelectorAll('.slide');

	// Handle Category Filtering
	categoryButtons.forEach((button) => {
	button.addEventListener('click', () => {
		// Remove 'active' class from all buttons
		categoryButtons.forEach((btn) => btn.classList.remove('active'));
		// Add 'active' class to clicked button
		button.classList.add('active');

		// Get selected category
		const selectedCategory = button.dataset.category;

		// Show/hide slides based on category
		slides.forEach((slide) => {
		const slideCategory = slide.dataset.category;
		if (selectedCategory === 'all' || slideCategory === selectedCategory) {
			slide.style.display = 'block';
		} else {
			slide.style.display = 'none';
		}
		});
	});
	});

	// Handle Slide Click Focus
	slides.forEach((slide) => {
		slide.addEventListener('click', () => {
			// Remove focus from all slides
			slides.forEach((s) => s.classList.remove('focused'));
			// Add focus to clicked slide
			slide.classList.add('focused');
			// Scroll the focused slide into view
			slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
		});
	});

	// Animate progress bars
	document.addEventListener("DOMContentLoaded", () => {
		const progressBars = document.querySelectorAll(".progress-bar span");
		progressBars.forEach(bar => {
			const targetWidth = bar.getAttribute("data-width");
			bar.style.width = targetWidth;
		});
	});

	




	
}(jQuery));


