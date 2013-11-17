$(function() {
	// Configuration
	var config = {
		aspect_ratio: 16/9,
	};

	// State
	var slide = 1;
	var sections = $('section');
	var num_slides = sections.length;

	// Init
	sections.hide();
	$('section:nth-child(' + slide + ')').show();
	window.location.hash = '#' + slide;
	$(window).click(function() {
		$('section:nth-child(' + slide + ')').hide();
		if(slide < num_slides) slide++;
		$('section:nth-child(' + slide + ')').show();
		window.location.hash = '#' + slide;
	});
	$(window).on('contextmenu', function(e) {
		e.preventDefault();
		$('section:nth-child(' + slide + ')').hide();
		if(slide > 1) slide--;
		$('section:nth-child(' + slide + ')').show();
		window.location.hash = '#' + slide;
	});
});
