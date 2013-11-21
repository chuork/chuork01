//= require ./vendor/jquery
//= require ./vendor/underscore
//= require mixpanel
//= require mixpanel.key

jQuery(function($){
  var nav_offset = $('#nav').offset().top;
  var scroll_top = 0;
  var nav_will_hide = false;

  $('table a').click(function(){
    nav_will_hide = true;
  });

  var schedule_hide_nav_only_talk = function(){
    if (location.hash.indexOf('#talk-') === 0) {
      nav_will_hide = true;
    };
  };

  schedule_hide_nav_only_talk();

  $(document).scroll(_.debounce(function(){
    scroll_top = $(this).scrollTop();

    if (nav_offset <= scroll_top) {
      $('article').addClass('adjustment');
      $('#nav').addClass('fixed');
    } else {
      $('article').removeClass('adjustment');
      $('#nav').removeClass('fixed');
    }

    if (nav_will_hide) {
      $('#nav').hide();
      nav_will_hide = false;
    } else {
      $('#nav').fadeIn('fast');
    }
  }, 50));
});
