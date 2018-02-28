jQuery( document ).ready(function( $ ) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/* 	LOADER
/*-----------------------------------------------------------------------------------*/
$("#loader").delay(1000).fadeOut("slow");
/*-----------------------------------------------------------------------------------*/
/*		STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(".sticky").sticky({topSpacing:0});
/*-----------------------------------------------------------------------------------*/
/*  FULL SCREEN
/*-----------------------------------------------------------------------------------*/
$('.full-screen').superslides({});
/*-----------------------------------------------------------------------------------

/*-----------------------------------------------------------------------------------*/
/* 	SLIDER REVOLUTION
/*-----------------------------------------------------------------------------------*/
jQuery(".tp-banner").revolution({
	sliderType:"standard",
	sliderLayout:"auto",
	delay:9000,
	minHeight:500,
	gridwidth:0,
	navigationType:"bullet",
	navigationArrows:"solo",
	navigationStyle:"preview4",
	gridheight:500		
});		
/*-----------------------------------------------------------------------------------*/
/* 	SLIDER REVOLUTION
/*-----------------------------------------------------------------------------------*/
jQuery('.tp-banner-full').show().revolution({
	dottedOverlay:"none",
	delay:7000,
	startwidth:1200,
	startheight:500,
	navigationType:"bullet",
	navigationArrows:"solo",
	navigationStyle:"preview4",
	parallax:"mouse",
	parallaxBgFreeze:"on",
	parallaxLevels:[7,4,3,2,5,4,3,2,1,0],												
	keyboardNavigation:"on",						
	shadow:0,
	fullWidth:"on",
	fullScreen:"off",
	shuffle:"off",						
	autoHeight:"off",						
	forceFullWidth:"on",	
	fullScreenOffsetContainer:""	
});

/*-----------------------------------------------------------------------------------*/
/* 	TESTIMONIAL SLIDER
/*-----------------------------------------------------------------------------------*/
$(".item-slide-4").owlCarousel({ 
    items : 4,
	autoplay:true,
	loop:false,
	margin: 30,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	lazyLoad:true,
	nav: true,
	responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    },
	animateOut: 'fadeOut'		
});




/*-----------------------------------------------------------------------------------
    TESTNMONIALS STYLE 1
/*-----------------------------------------------------------------------------------*/
$('.free-slide').flexslider({
	mode: 'fade',
	animation: "fade",
	auto: true
});
/*-----------------------------------------------------------------------------------*/
/* 	Thumb Slider
/*-----------------------------------------------------------------------------------*/
$('.thumb-slider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
});
/*-----------------------------------------------------------------------------------*/
/* 	ANIMATION
/*-----------------------------------------------------------------------------------*/
var wow = new WOW({
    boxClass:     'animate',      // animated element css class (default is wow)
    animateClass: 'animated', 	// animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
});
wow.init();

});

