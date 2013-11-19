# Simple Slider

This is a very simple slideshow using jQuery. 
If you need a slider with basic configurations, controls and effects, then this is it.
It supports multiple slideshows on a page. Wow.

## Implementation

### Files

* simpleslider.js
* simpleslider.css

Simple Slider comes with styles that will be used by default. You can edit these styles if you want to, or add your own.
You initialize your slider by calling the `simpleSlider()` function and passing the ID of your slider and a list of options. 
See below or example.html for an example.

```html
<script>
$(document).ready(function() {

simpleSlider("#sliderID", // ID of slider
{
	nextBtn: 	"#nextBtnID",	// ID of next button
	prevBtn: 	"#prevBtnID",	// ID of previous button
	playStopBtn:"#playStopBtnID", // ID of toggle button used to toggle autoplay
	playText: 	"Play",			// Text to show on toggle button when stopped or autoplay is off
	stopText: 	"Stop",			// Text to show on toggle button while playing or autoplay is on
	pager: 		"#pagerID",		// ID of pager element
	pagerClassNormal:   "pagerNormal",	 // The name of the class/style to be used on the pager
	pagerClassSelected: "pagerSelected", // The class/style to be used on selected pager element
	speed: 		300,			// The speed of the transition
	timeout: 	2000			// The timeout between transitions if you want autoplay
});

});
</script>
```

You can add the `.slider` class from `simpleslider.css` to your slider. 
This will make sure the slider only shows one image at a time.

## Requirements

* jQuery