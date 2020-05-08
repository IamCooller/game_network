
  
function changeItem_Left() {
  $('section').toggleClass('popOutLeft'); 
  setTimeout(function(){
  $('section').removeClass('popOutLeft');
}, 1000);
}

function changeItem_Right() {
  $('section').toggleClass('popOutRight'); 
  setTimeout(function(){
  $('section').removeClass('popOutRight');
}, 1000);
}


function changeItem_Star() {
  $('.Start_Game').toggleClass('popOutLeft duration-450');   
  setTimeout(function(){ 
    $('.Start_Game').css('display', 'none');      
}, 445);
setTimeout(function(){
$('.Start_Game-Two').css('display', '');
$('.Start_Game-Two').toggleClass('popInRight duration-850'); 
}, 700);
}



function changeItem_Left_CardsTwo() {
  $('.Start_Game-Two').toggleClass('popOutRight duration-450'); 
  setTimeout(function(){
    $('.Start_Game-Two').css('display', 'none'); 
}, 450); 

setTimeout(function(){
  $('.cards_one').css('display', '');
  $('.cards_one').toggleClass('popInLeft duration-850'); 
  }, 700);
}

