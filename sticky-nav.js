/*
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
*/


$(function(){
   $("#home").load("home.html");
   $("#sign_in").load("sign_in.html");
   $("#schedule").load("schedule.html");
   $("#tutors").load("tutors.html");
   $("#tutorials").load("tutorials.html");
   $("#tutoring_info").load("tutoring_info.html");
   $("#contact_us").load("contact_us.html");
});

