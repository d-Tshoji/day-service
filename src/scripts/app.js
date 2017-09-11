//------------------------------------------------------------------
//インレイ処理
//------------------------------------------------------------------
$('.js-nav-burger').on('click', function () {
  $('.js-nav').addClass('active');
  return false;
});

$(document).on('click touchstart', function (event) {
  $('.js-nav').removeClass('active');
});

$('.js-nav').on('click touchstart', function (event) {
  event.stopPropagation();
});

//----------------------------------------------------------------
//タブ切り替え                                                     
//----------------------------------------------------------------
$('.js-tab-trg').on('click', function () {
  var targetId = $(this).data('target');

  $('.js-tab-trg').removeClass('tab__item--active');
  $(this).addClass('tab__item--active');
  $('.js-tab-content').removeClass('tab-content--active');
  $('.js-tab-content--' + targetId).addClass('tab-content--active');
  return false;
});