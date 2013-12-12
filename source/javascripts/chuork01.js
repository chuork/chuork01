//= require ./vendor/jquery
//= require ./vendor/underscore
//= require mixpanel
//= require mixpanel.key

jQuery(function($) {
  var nav_offset = $('#nav').offset().top;
  var nav_will_hide = false;

  $('table a').click(function() {
    nav_will_hide = true;
  });

  var schedule_hide_nav_only_talk = function() {
    if (location.hash.indexOf('#talk-') === 0) {
      nav_will_hide = true;
    };
  };

  schedule_hide_nav_only_talk();

  $(document).on('scroll', function() {
    var scroll_top = $(this).scrollTop();

    if (nav_offset <= scroll_top) {
      $('article').addClass('adjustment');
      $('#nav').addClass('fixed');
    } else {
      $('article').removeClass('adjustment');
      $('#nav').removeClass('fixed');
    }
  }).on('scroll', _.debounce(function() {
    if (nav_will_hide) {
      $('#nav').hide();
      nav_will_hide = false;
    } else {
      $('#nav').fadeIn('fast');
    }
  }, 50));
});
