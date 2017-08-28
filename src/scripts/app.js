$(document).on('click', '#js-nav-burger', function () {
  $('#js-nav').toggleClass('active');
  $('.active').css('transform', 'scaleX(1)');
});
$(document).on('click', function (e) {
  if (!$(e.target).closest('#js-nav,#js-nav-burger').length) {
    $('.active').css('transform', 'scaleX(0)');
    $('#js-nav').removeClass('active');
  }
});