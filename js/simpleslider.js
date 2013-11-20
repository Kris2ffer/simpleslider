/*
 * Simple Slider
 * by Kristoffer Årdal
*/
/*
// Maybe use a defaults-object in the future
var defaults = {
	speed: 300,
	timeout: 5000
};*/

function simpleSlider(sliderID, sliderOptions) {
	var opt = sliderOptions;
	var $slides = $(sliderID).children();
	var count = $slides.size();
	var current = 0;
	var speed = 300;
	var timer;
	var autoPlay = false;
	var pagerClassNormal = "pagerNormal";
	var pagerClassSelected = "pagerSelected";
	
	
	// Take care of options
	if (opt.nextBtn) {
		$(opt.nextBtn).click(function(e) {
			e.preventDefault();
			advance(1);
        });
	}
	if (opt.prevBtn) {
		$(opt.prevBtn).click(function(e) {
			e.preventDefault();
			advance(-1);
        });
	}
	if (opt.timeout) {
		autoPlay = true;
		doTimeout()
	}
	if (opt.speed || opt.speed == Number) {
		speed = opt.speed;
	}
	if (opt.pager) {
		for (var i = 0; i < count; i++) {
			// Make a pager element
			var a = "<a>" + (i+1) + "</a>";
			var $a = $(a);
			
			$(opt.pager).append($a);
			$a.click(function(e) {
                e.preventDefault();
				goTo($(opt.pager + " a").index(this));
            });
		}
		
		// Use the given style, or use the default
		if (opt.pagerClassNormal) {
			pagerClassNormal = opt.pagerClassNormal;
		}
		if (opt.pagerClassSelected) {
			pagerClassSelected = opt.pagerClassSelected;
		}
		
		// Add styles to pager
		$(opt.pager).children().addClass(pagerClassNormal);
		$(opt.pager).children().first().removeClass(pagerClassNormal).addClass(pagerClassSelected);
	}
	if (opt.playStopBtn) {
		$(opt.playStopBtn).click(function(e) {
			e.preventDefault();
			toggle();
		});
		toggleText();
	}
	
	
	// Advance back or forward using a positive or negative value
	function advance(value) {
		var index = current + value;
		
		if (index < 0) {
			index = count-1;
		} else if (index >= count) {
			index = 0;
		}
		
		goTo(index)
	}
	
	// Go to the given index
	function goTo(index) {
		if (index != current) {
			clearTimeout(timer);
			var prev = current;
			current = index;
			
			$($slides[prev]).fadeOut(speed);
			$($slides[current]).fadeIn(speed, function() {
				doTimeout();
			});
			
			if (opt.pager) {
				$($(opt.pager + " a").get(current)).addClass(pagerClassSelected).removeClass(pagerClassNormal);
				$($(opt.pager + " a").get(prev)).addClass(pagerClassNormal).removeClass(pagerClassSelected);
			}
		}
	}
	
	function doTimeout() {
		if (autoPlay) {
			timer = setTimeout(function(){ advance(1); }, opt.timeout);
		}
	}
	
	// Toggle play and stop
	function toggle() {
		clearTimeout(timer);
		autoPlay = !autoPlay;
		doTimeout();
		toggleText();
	}
	
	// Toggle between the play and stop text
	function toggleText() {
		if (opt.playStopBtn && opt.playText && opt.stopText) {
			if (autoPlay) {
				$(opt.playStopBtn).text(opt.stopText);
			} else {
				$(opt.playStopBtn).text(opt.playText);
			}
		}
	}
}

