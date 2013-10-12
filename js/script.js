/* 
	Author: Ivan Stegic
*/

$('#ii_top h2 a').live('click', function () {
	if (window.location.hash=='#hello') {
		var ii_top = 0;
	} else {
		var ii_top = 215;
	}
	ii_greeting(ii_top);
});

function ii_greeting(ii_size) {
	$('#ii_top').animate({
	    top: ii_size
	  }, 400, function() {
	    // Animation complete.
	    if (ii_size) {
				$('#ii_top h2 a').attr('href', '#good-bye');	    
	    } else {
				$('#ii_top h2 a').attr('href', '#hello');	    
	    }
	});
}

jQuery(document).ready(function($) {
	if (window.location.hash=='#hello') {
		ii_greeting(215);
	}
	var glow = $('#ii_top h2 a');
	setInterval(function() {
		glow.hasClass('glow') ? glow.removeClass('glow') : glow.addClass('glow');
	}, 2000);
});