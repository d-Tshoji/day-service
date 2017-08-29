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

$(".js-tab-all").on("click", function () {
  $('.news__contents').removeClass('contents-active');
  $('.js-tab-reset').removeClass('tab-active');
  $('.js-tab-all').addClass('tab-active');
  $('.js-all').addClass('contents-active');
});

$(".js-tab-info").on("click", function () {
  $('.news__contents').removeClass('contents-active');
  $('.js-tab-reset').removeClass('tab-active');
  $('.js-tab-info').addClass('tab-active');
  $('.js-info').addClass('contents-active');
});

$(".js-tab-topic").on("click", function () {
  $('.news__contents').removeClass('contents-active');
  $('.js-tab-reset').removeClass('tab-active');
  $('.js-tab-topic').addClass('tab-active');
  $('.js-topic').addClass('contents-active');
});



//$(".js-tab-color").on("click", function () {
//  alert("色変えるにょ")
//  $('.js-tab').removeClass('tab-active');
//  $(this).addClass('tab-active');
//});


