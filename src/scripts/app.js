$(".js-nav-burger").on("click", function () {
  $('.js-nav').addClass('active');
});

$(document).on('click', function (e) {
  $('.js-nav').removeClass('active');
});

$('.js-nav-burger').on('click', function (event) {
  event.stopPropagation();
});

$('.js-nav').on('click', function (event) {
  event.stopPropagation();
});


$(".js-tab-trg").on("click", function () {
  var targetId = $(this).data('target');

  $('.js-tab-trg').removeClass('tab-active');
  $(this).addClass('tab-active');
  $('.js-tab-content').removeClass('contents-active');
  $('.js-tab-content--' + targetId).addClass('contents-active');

  return false;
});