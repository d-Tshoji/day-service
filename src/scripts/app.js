$(document).on('click', '#js-nav-burger', function(){

  alert("実行しました。");
  //$('.header__nav').css("display","block");
  $('.header__nav').fadeIn();

  $('#js-nav').toggleClass('active');

});
