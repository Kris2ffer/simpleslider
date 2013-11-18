// Simple Slider


function simpleSlider(sliderID, sliderOptions) {
	var opt = sliderOptions;
	var $slides = $(sliderID).children();
	var count = $slides.size();
	var current = 0;
	var speed = 300;
	var timer;
	var autoPlay = false;
	
	var defaults = {
		speed: 300,
		timeout: 5000
	};
	
	
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
		//opt.speed = defaults.speed;
		speed = opt.speed;
	}
	if (opt.pager) {
		for (var i = 0; i < count; i++) {
			var a = "<a>" + (i+1) + "</a>";
			var $a = $(a);
			
			$(opt.pager).append($a);
			$($a).click(function(e) {
                e.preventDefault();
				goTo($(opt.pager + " a").index(this));
            });
		}
		
		$(opt.pager).children().addClass("pagerNormal");
		$(opt.pager).children().first().removeClass("pagerNormal").addClass("pagerSelected");
	}
	if (opt.playStopBtn) {
		$(opt.playStopBtn).click(function(e) {
			e.preventDefault();
			toggle();
		});
		toggleText();
	}
	
	
	
	function advance(value) {
		var index = current + value;
		
		if (index < 0) {
			index = count-1;
		} else if (index >= count) {
			index = 0;
		}
		
		goTo(index)
	}
	
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
				$($(opt.pager + " a").get(current)).addClass("pagerSelected").removeClass("pagerNormal");
				$($(opt.pager + " a").get(prev)).addClass("pagerNormal").removeClass("pagerSelected");
			}
		}
	}
	
	function doTimeout() {
		if (autoPlay) {
			timer = setTimeout(function(){ advance(1); }, opt.timeout);
		}
	}
	
	function toggle() {
		clearTimeout(timer);
		autoPlay = !autoPlay;
		doTimeout();
		toggleText();
	}
	
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






