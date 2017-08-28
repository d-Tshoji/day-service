$(document).on('click', '#js-nav-burger', function(){

  alert("実行しました。");
  
  $('#js-nav').toggleClass('active');

  $('.active').css('transform','scaleX(1)');

});
