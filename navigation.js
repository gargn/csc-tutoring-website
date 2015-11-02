/* Loads main content to new_view. */
function loadMainContent(new_view) {
   var current_view = $("#main-content").attr("class");
   $("#main-content").removeClass(current_view);
   $("#main-content").addClass(new_view);
   $("#main-content").load(new_view + ".html");
}

/* Makes sticky navigation bar. */
$(function(){
   var navOffset = $(".navbar").offset().top;

   var stick = function(){
      var scrollTop = $(window).scrollTop();

      if (scrollTop > navOffset) {
         $(".navbar").addClass("navbar-scrolled");
      }
      else {
         $(".navbar").removeClass("navbar-scrolled");
      }
   };

   stick();

   $(window).scroll(function() {
      stick();
   });
});

/* Loads tags files into the class tags. */
$(function(){
   $(".home").load("home.html");
   $(".sign_in").load("sign_in.html");
   $(".schedule").load("schedule.html");
   $(".tutors").load("tutors.html");
   $(".tutorials").load("tutorials.html");
   $(".tutoring_info").load("tutoring_info.html");
   $(".contact_us").load("contact_us.html");
});

/* Changes main content at navigation. */
$(function(){
   /* Sets value on load. */
   $(window).load(function() {
      var new_view = window.location.hash.substring(1);
      console.log(new_view);
      loadMainContent(new_view);
   });

   /* Sets value on selection of navigation bar. */
   $(".navbar a").click(function() {
      var new_view = $(this).attr("href").substring(1);
      loadMainContent(new_view); 
   });
});

