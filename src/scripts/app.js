//------------------------------------------------------------------
//インレイ処理
//------------------------------------------------------------------
$(".js-nav-burger").on("touchstart click", function () {
  $('.js-nav').addClass('active');
  event.stopPropagation();
  return false;
});

$(document).on('touchstart click', function (e) {
  $('.js-nav').removeClass('active');
});

$('.js-nav').on('touchstart click', function (e) {
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