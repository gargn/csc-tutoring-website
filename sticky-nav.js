$(document).ready(function() {
   var navOffset = $('.navbar').offset().top;
 
   var stick = function(){
      var scrollTop = $(window).scrollTop();
         
      if (scrollTop > navOffset) { 
         $('.navbar').addClass('navbar-scrolled');
      } 
      else {
         $('.navbar').removeClass('navbar-scrolled'); 
      }
   };
    
   stick();
    
   $(window).scroll(function() {
      stick();
   });
});