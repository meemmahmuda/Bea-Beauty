(function($){
  'use strict';

//Mobile Menu


$('.menu-icon i').on('click', function(){
  $('.mobile-menu').slideToggle();
})



$(window).resize(function(){

  var screenSize = $(window).width();

  if(screenSize > 991){
    $('.mobile-menu').removeAttr('style');
  }
});




$('.body1-txt h6').arctext({

    radius:200,
    dir:1
});



  const text = document.querySelector('.text h5');
  text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 10.5}deg)">${char}</span>`
    ).join('');


  const text4 = document.querySelector('.text4 h5');
  text4.innerHTML = text4.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8.9}deg)">${char}</span>`
    ).join('');



}) (jQuery);