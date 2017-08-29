$(".js-nav-burger").on("click", function () {
  $('.js-nav').toggleClass('active');
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