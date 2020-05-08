
  
function changeItem_Left() {
  $('section').addClass('popOutLeft duration-450'); 
  setTimeout(function(){
  $('section').removeClass('popOutLeft');
}, 500);
}

function changeItem_Right() {
  $('section').addClass('popOutRight duration-450'); 
  setTimeout(function(){
  $('section').removeClass('popOutRight');
}, 500);
}


function changeItem_Star() {
  $('.Start_Game').toggleClass('popOutLeft duration-250');   
  setTimeout(function(){ 
    $('.Start_Game').css('display', 'none');      
}, 249);
setTimeout(function(){
$('.Start_Game-Two').css('display', '');
$('.Start_Game-Two').toggleClass('popInRight duration-450'); 
}, 300);
}



function changeItem_Left_CardsTwo() {
  $('.Start_Game-Two').toggleClass('popOutRight duration-250'); 
  setTimeout(function(){
    $('.Start_Game-Two').css('display', 'none'); 
}, 250); 

setTimeout(function(){
  $('.cards_one').css('display', '');
  $('.cards_one').toggleClass('popInLeft duration-450'); 
  }, 300);
}

