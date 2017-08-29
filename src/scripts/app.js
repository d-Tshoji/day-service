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