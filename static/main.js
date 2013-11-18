$(function() {
	// Configuration
	var config = {
	};

	// State
	var slide = 0;
	if(window.location.hash.length > 1) {
		slide = parseInt(window.location.hash.substr(1));
	}
	var sections = $('section');
	var num_slides = sections.length;

	var move_slides = function(noanimate) {
		sections.each(function(index) {
			var opacity = 1;
			var left = 0;
			if(index < slide) {
				opacity = 0;
				left = -1 * $(window).width();
			} else if(index > slide) {
				opacity = 0;
				left = $(window).width();
			}
			$(this).css('width', $(window).width() + 'px');
			if(noanimate) {
				$(this).css('left', left + 'px');
				$(this).css('opacity', opacity);
			} else {
				$(this).animate({'opacity': opacity, 'left': left + 'px'}, 'slow');
			}
		});
	}

	// Init
	move_slides(true);
	window.location.hash = '#' + slide;
	$(window).click(function() {
		if(slide < num_slides-1) slide++;
		window.location.hash = '#' + slide;
		move_slides();
	});
	$(window).on('contextmenu', function(e) {
		e.preventDefault();
		if(slide > 0) slide--;
		window.location.hash = '#' + slide;
		move_slides();
	});
});
