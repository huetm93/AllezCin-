$(document).ready(function() {
    $(window).scroll(function() {// checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 200) { 
          $('.navglobal').addClass('solid');
          $('.collapse').addClass('solid');
      } else {
          $('.navglobal').removeClass('solid');
          $('.collapse').removeClass('solid');
      }
    });
});