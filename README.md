# Simple Slider

This is a very simple slideshow using jQuery. 
If you need a slider with basic configurations, controls and effects, then this is it.
It supports multiple slideshows on a page. Wow.

## Implementation

### Files

* simpleslider.js
* simpleslider.css

Simple Slider is currently using default styles from the simpleslider.css file. You can edit these styles if you want to. 
You initialize your slider by calling the simpleSlider() function and passing the ID of your slider and a list of options. 
See below or example.html for an example.

```html
<script>
$(document).ready(function() {

simpleSlider("#sliderID", // ID of slider
{
	nextBtn: "#nextBtnID",		// ID of next button
	prevBtn: "#prevBtnID",		// ID of previous button
	playStopBtn: "#playStopBtnID",	// ID of toggle button used to toggle autoplay
	playText: "Play",		// Text to show on toggle button when stopped or autoplay is off
	stopText: "Stop",		// Text to show on toggle button while playing or autoplay is on
	pager: "#pagerID",		// ID of pager element
	speed: 300,			// The speed of the transition
	timeout: 2000			// The timeout between transitions if you want autoplay
});

});
</script>
```

## Requirements

* jQuery