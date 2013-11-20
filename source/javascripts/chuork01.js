//= require ./vendor/jquery
//= require mixpanel
//= require mixpanel.key

jQuery(function($){
  var nav_offset = $('#nav').offset().top;
  var scroll_top = 0;
  var nav_will_hide = false;

  $('table a').click(function(){
    nav_will_hide = true;
  });

  $(document).scroll(function(){
    scroll_top = $(this).scrollTop();

    if (nav_offset <= scroll_top) {
      $('article').addClass('adjustment')
      $('#nav').addClass('fixed');
    } else if (nav_offset >= scroll_top) {
      $('article').removeClass('adjustment')
      $('#nav').removeClass('fixed');
    }

    if (nav_will_hide) {
      $('#nav').hide();
      nav_will_hide = false;
    } else {
      $('#nav').fadeIn();
    }
  });
});
