//------------------------------------------------------------------
//インレイ処理
//------------------------------------------------------------------
$(".js-nav-burger").on('touchstart click', function () {
  $('.js-nav').addClass('active');
  return false;
});

$(document).on('touchstart click', function (event) {
  $('.js-nav').removeClass('active');
});

$('.js-nav').on('touchstart click', function (event) {
  event.stopPropagation();
});

//----------------------------------------------------------------//
//タブ切り替え                                                     //
//----------------------------------------------------------------//
$(".js-tab-trg").on("touchstart click", function () {
  var targetId = $(this).data('target');

  $('.js-tab-trg').removeClass('tab-active');
  $(this).addClass('tab-active');
  $('.js-tab-content').removeClass('contents-active');
  $('.js-tab-content--' + targetId).addClass('contents-active');
  return false;
});