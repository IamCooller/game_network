
  
function changeItem_Left() {
  $('section').toggleClass('animation-target'); 
  setTimeout(function(){
  $('section').removeClass('animation-target');
}, 1000);
}

function changeItem_Right() {
  $('section').toggleClass('animation-target_two'); 
  setTimeout(function(){
  $('section').removeClass('animation-target_two');
}, 1000);
}


function changeItem_Star() {

 
  setTimeout(function(){
    $('.Start_Game').css('display', 'none');      
}, 1500);

setTimeout(function(){
$('.Start_Game-Two').css('display', '');
$('.Start_Game-Two').toggleClass('magictime tinDownIn'); 
$('.Start_Game').css('position', 'absolute');
$('.Start_Game').css('z-index', '-1');
}, 1000);

setTimeout(function(){
  $('.Start_Game-Two').removeClass('magictime tinDownIn'); 
  }, 1500);
}


function changeItem_Left_CardsTwo() {
  $('.Start_Game-Two').toggleClass('animation-target'); 
  setTimeout(function(){
    $('.Start_Game-Two').css('display', 'none'); 
}, 1000); 
$('.cards_one').css('display', '');

}

