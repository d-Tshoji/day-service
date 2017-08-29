//------------------------------------------------------------------
//インレイ処理
//------------------------------------------------------------------
$(".js-nav-burger").on("click", function () {
//$('.js-nav-burger').bind('touchstart', function() {
  //alert("実行しました。")
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

//----------------------------------------------------------------//
//タブ切り替え                                                     //
//----------------------------------------------------------------//
$(".js-tab-trg").on("click", function () {
  var targetId = $(this).data('target');

  $('.js-tab-trg').removeClass('tab-active');
  $(this).addClass('tab-active');
  $('.js-tab-content').removeClass('contents-active');
  $('.js-tab-content--' + targetId).addClass('contents-active');

  return false;
});