
(function($) {
    "use strict";


	/*------ WINDOW LOAD FUNCTION ------*/
	$(window).load(function() {
		
		/*------ PRELOADER ------*/
		'use strict';
		$(".status").delay(700).fadeOut();
		$(".preloader").delay(1200).fadeOut("slow");
		
		
		
		/*------ WOW ANIMATION ------*/
		var wow = new WOW({
			mobile: false
		});
		wow.init();
		
	});



	/*------ DOCUMENT READY FUNCTION ------*/

	$(document).ready(function() {
		
		/*------ SCREENSHOT POPUP ------*/
		$('.screen-gallery-1').magnificPopup({
			delegate: 'a',
			type:'image',
			gallery:{
				enabled:true
			}
		});
		
		
		
		/*------ POPUP VIDEO ------*/
		$('.popup-video').magnificPopup({
			  disableOn: 700,
			  type: 'iframe',
			  mainClass: 'mfp-fade',
			  removalDelay: 160,
			  preloader: false,
			  fixedContentPos: false
		});
		
		
		
		/*------ SCROLL TO TOP ------*/
		$(function() {
			$.scrollUp({
				scrollName: 'scrollUp', // Element ID
				scrollDistance: 300, // Distance from top/bottom before showing element (px)
				scrollFrom: 'top', // 'top' or 'bottom'
				scrollSpeed: 750, // Speed back to top (ms)
				easingType: 'linear', // Scroll to top easing (see http://easings.net/)
				animation: 'fade', // Fade, slide, none
				animationSpeed: 200, // Animation speed (ms)
				scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
				scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
				scrollText: '<i class="fa fa-chevron-up"></i>', // Text for element, can contain HTML
				scrollTitle: false, // Set a custom <a> title if required.
				scrollImg: false, // Set true to use image
				activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
				zIndex: 9999 // Z-Index for the overlay
			});
		});
		
		
		
		/*------ ONE PAGE NAV ------*/
		$('#nav').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function($currentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});
		
	});





	/*------ SCROLL NAVBAR ------*/

	$(window).scroll(function(){	

		"use strict";	

		var b = $(window).scrollTop();
		
		if( b > 100 ){		
			$(".scroll-nav").addClass("scroll-fixed-nav");	
		} else {
			$(".scroll-nav").removeClass("scroll-fixed-nav");
		}
		
	});





	/*------ SCREENSHOT GALLERY ------*/

	$('#screen-gallery-1').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  dots: true,
	  autoplay: false,
	  pauseOnHover: true,
	  responsive: [
		{
		  breakpoint: 700,
		  settings: {
			arrows: true,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1
		  }
		}
	  ]
	});





	/*------ TESTIMONIAL SLIDER ------*/

	$('#testimonial-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		fade: true,
		asNavFor: '#testimonial-carousel'
	});





	/*------ TESTIMONIAL THUMBS CAROUSEL ------*/

	$('#testimonial-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '#testimonial-slider',
		dots: false,
		arrows: false,
		centerMode: true,
		autoplay: false,
		focusOnSelect: true,
		centerPadding: '10px',
		responsive: [{
			breakpoint: 640,
			settings: {
				dots: false,
				autoplay: true,
				slidesToShow: 3,
				centerPadding: '0px',
			}
		}, {
			breakpoint: 575,
			settings: {
				autoplay: true,
				dots: false,
				slidesToShow: 1,
				centerMode: true,
			}
		}]
	});





	/*------ CONTACT FORM VALIDATION ------*/

	$("#contact-form").submit(function (e) {
		e.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		var message = $("#message").val();
		var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

		function isValidEmail(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

		if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
			$.ajax({
				type: "POST",
				url: "sendmail.php",
				data: dataString,
				success: function () {
					$('.success').fadeIn(1000);
					$('.error').fadeOut(500);
				}
			});
		} else {
			$('.error').fadeIn(1000);
			$('.success').fadeOut(500);
		}

		return false;
	});





	/*------ AJAX MAILCHIMP ------*/

	if ($('.mailchimp').length>0) {
		/*  MAILCHIMP  */
		$('.mailchimp').ajaxChimp({
			callback: mailchimpCallback,
			url: "//facebook.us14.list-manage.com/subscribe/post?u=d0f4dd2d15bbc45a5e5ab4674&amp;id=b543e01a36" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
		});
	}
		
	function mailchimpCallback(resp) {
		if (resp.result === 'success') {
			$('.subscription-success').html('<i class="fa fa-smile-o"></i>' + resp.msg).fadeIn(1000);
			$('.subscription-error').fadeOut(500);

		} else if(resp.result === 'error') {
			$('.subscription-error').html('<i class="fa fa-frown-o"></i>' + resp.msg).fadeIn(1000);
		}
	}





	/*------ YOUTUBE BACKGROUND ------*/

	$('#youtube-bg').YTPlayer({
		fitToBackground: true,
		videoId: 'RH1tPH-KTVQ'
	});





	/*------ PARALLAX BACKGROUND ------*/

	$(window).on('resize', function(){
		// To fix the parallax.js bug
		window.setTimeout(function(){
			$(window).resize();
		},500);
	});
	// To fix the parallax.js bug
	var isMobile = {
		Android: function() { return navigator.userAgent.match(/Android/i); }, 
		BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
		iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
		Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
		Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
		any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
	jQuery(function($) {
		if (isMobile.any()) {
			document.documentElement.className = document.documentElement.className + " touch";
			$('.parallax').each(function(i, obj) {
				$(this).css("background-image", 'url('+$(this).data('image-src')+')');
				$(this).css("background-color", "#283548");
				$(this).css("background-size", "cover");
				$(this).css("background-position", "center center");
			});
		
		}
	});
	
	
})(jQuery);