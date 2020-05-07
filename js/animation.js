
  
function changeItem_Left() {
  $('section').toggleClass('magictime rotateLeft'); 
  setTimeout(function(){
  $('section').removeClass('magictime rotateLeft');
}, 2000);
}

function changeItem_Right() {
  $('section').toggleClass('magictime rotateRight'); 
  setTimeout(function(){
  $('section').removeClass('magictime rotateRight');
}, 2000);
}


function changeItem_Star() {
  $('.Start_Game').toggleClass('magictime tinDownOut'); 
  setTimeout(function(){
    $('.Start_Game').css('display', 'none'); 
}, 1000);  
setTimeout(function(){
$('.Start_Game-Two').toggleClass('magictime tinDownIn'); 
$('.Start_Game-Two').css('display', '');
}, 1500);
setTimeout(function(){
  $('.Start_Game-Two').removeClass('magictime tinDownIn'); 
  }, 2500);
}


function changeItem_Left_CardsTwo() {
  $('.Start_Game-Two').toggleClass('magictime rotateLeft'); 
  setTimeout(function(){
    $('.Start_Game-Two').css('display', 'none'); 
}, 1000); 
$('.cards_one').css('display', '');

}

