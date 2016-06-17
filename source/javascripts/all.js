$(document).ready(function() {
  $('a').smoothScroll();

  $('body').on('click', '#mobile-navigation:not(.open)', function() {
    $('.overlay').show();
    $('#mobile-navigation').addClass('open');
  });

  $('body').on('click', '#mobile-navigation.open, .overlay a', function() {
    $('.overlay').hide();
    $('#mobile-navigation').removeClass('open');
  });

  $(".dropdown-button").click(function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
  });

  $('#menu sup').html(function(index, oldHtml) {
    if(oldHtml.length == 1) {
      return oldHtml + "0";
    }
    else {
      return oldHtml;
    }
  });
});
