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

/* Changes view based on navigation bar value. */
$(function(){
   $(".navbar a").click(function(){
      var current_view = $("#main-content").attr("class");
      var new_view = $(this).attr("href").substring(1);

      $("#main-content").removeClass(current_view);
      $("#main-content").addClass(new_view);
      $("#main-content").load(new_view + ".html");
   });
});

