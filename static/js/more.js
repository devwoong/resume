$(document).ready(function(){
    $('.more').click(function(){
      if($('.more').hasClass('more')){
         $('.more').addClass('board_close').removeClass('more');
         $('.board').css('display', 'block');
      }else if($('.board_close').hasClass('board_close')){
         $('.board_close').addClass('more').removeClass('board_close');  
         $('.board').css('display', 'none');
      }
    });
  });