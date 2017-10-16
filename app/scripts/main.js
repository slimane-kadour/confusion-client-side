'use strict';

//Menu

   jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	

//ScrollUp

$(function(){
        $('.scrollup').click(function() {
          $('html,body').animate({scrollTop: 0}, 'slow');
        });
    });
  

//google map


 
