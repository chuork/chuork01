//= require ./vendor/jquery
//= require mixpanel
//= require mixpanel.key

jQuery(function($){
  var nav_offset = $('#nav').offset().top;
  var scroll_top = 0;

  $(document).scroll(function(){
    scroll_top = $(this).scrollTop();

    if (nav_offset <= scroll_top) {
      $('#nav').addClass('fixed');
    } else if (nav_offset >= scroll_top) {
      $('#nav').removeClass('fixed');
    }
  });
});
