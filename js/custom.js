jQuery.fn.countMe=function(t,e){if(void 0!==t||void 0!==e){var n=0,r=this.html();return setTimeout(()=>{var t=setInterval(()=>{n++,this.text(n),n==r&&clearInterval(t)},e)},t),this}alert("Worning!\ndelay and speed can't be empty!")};
w
$(document).ready(function(){

	$('#main_banner').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	    //center:true,
	    //mouseDrag:false,
	    //stagePadding: 50,
	    //merge:true,
	    //startPosition: 2,
	    //autoplay: true,
	    autoplayTimeout: 2000,
	    autoplayHoverPause:true,
	    animateIn:'animate__fadeIn',
	    animateOut:'animate__fadeOut',
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	$('#pro_slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:2
	        }
	    }
	})

	var owl = $('#main_banner');
	owl.owlCarousel();
	// Listen to owl events:
	owl.on('changed.owl.carousel', function(event) {
	    
		new WOW().init();

	})

	wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    })
    wow.init();

	

});