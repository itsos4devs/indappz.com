$(function() {
    "use strict";    	
	$(document).ready(function() {
	
		/* 2. Animsition preloader */
		$(".animsition-overlay").animsition({
		    inClass: 'overlay-slide-in-right',
		    outClass: 'overlay-slide-out-right',
		   	inDuration: 1,
		    outDuration: 1500,
		    linkElement: '.animsition-link',
		    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		    loading: false,
		    loadingParentElement: 'body',
		    loadingClass: 'animsition-loading',
		    loadingInner: '', // e.g '<img src="loading.svg" />'
		    timeout: false,
		    timeoutCountdown: 5000,
		    onLoadEvent: true,
		    browser: [ 'animation-duration', '-webkit-animation-duration'],
		    overlay : true,
		    overlayClass : 'animsition-overlay-slide',
		    overlayParentElement : 'body',
		    transition: function(url){ window.location.href = url; }
		});
			
		$('body').on('animsition.outStart', function(){
			$('body').removeClass('active');
			$('body').addClass('out');
		})
		
		$('body').on('animsition.inEnd', function(){
			$('body').addClass('active');
			$('body').addClass('in');
			setTimeout(function () {      
			    $("body").addClass("anim"); 
			}, 1000);
			
			/* 3. Swiper slider */
			var interleaveOffset = 0.5;
	
		    
		    var mySwiper = new Swiper(".portfolio-slider", {
				direction: "vertical",
				navigation: {
			    	nextEl: ".swiper-button-next",
			    	prevEl: ".swiper-button-prev"
			  	},
			  	pagination: {
		        	el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
		      	},
			  	speed: 1300,
			  	parallax: true,
			  	autoplay: false,
			  	effect: "slide",
			  	mousewheel: {
			  		sensitivity: 1
	  			}
			});
	
		});
		    
	    /* 5. Midnight */
	    $('.styky-header').midnight();
		
		/* 6. Navigation open/close */
		$( ".menu-open" ).on( "click", function() {
		  	$('.menu-open, .nav-container').addClass('active');
		});
		
		$( ".menu-close" ).on( "click", function() {
		  	$('.menu-open, .nav-container').removeClass('active');
		});
		
		/* 7. Drop-down menu */
		$('.dropdown-open').on("click",function(){
		    $(this).find('.dropdown').addClass('active');
		    $('.nav-link').addClass('done');
		    $('.dropdown-close').addClass('active');
		});
		
		$('.dropdown-close').on("click",function(){    
		    $('.dropdown').removeClass('active');
		    $('.nav-link').removeClass('done');
		    $('.dropdown-close').removeClass('active');
		});
	
	});
		
	/* 8. Change menu background */
	$(document).on('mouseover', '.bg-change', function(){		
		$(this).addClass('active').siblings().removeClass('active')
	});
	
	/* 9. ScrollAnimations */
	var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
	$containers.scrollAnimations();
	
	/* 10. Headroom */
	$(".styky-header").headroom();
	
	
	
});