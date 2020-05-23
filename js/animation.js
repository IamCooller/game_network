$(function () {
  $(".btn_no").swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      $("section").addClass("popOutLeft duration-450");
      setTimeout(function () {
        $("section").removeClass("popOutLeft");
      }, 500);
    },
    threshold: 75,
  });
  $(".btn_next").swipe({
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      $("section").addClass("popOutRight duration-450");
      setTimeout(function () {
        $("section").removeClass("popOutRight");
      }, 500);
    },
    threshold: 75,
  });
  $(".btn_yes").swipe({
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      $("section").addClass("popOutRight duration-450");
      setTimeout(function () {
        $("section").removeClass("popOutRight");
      }, 500);
    },
    threshold: 75,
  });
});

$(function () {
  //Keep track of how many swipes
  var count = 0;
  var counter = 0;
  //Enable swiping...
  $(".CardsTwo").swipe({
    //Single swipe handler for left swipes
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      $(".Start_Game-Two").addClass("popOutRight duration-250");
      setTimeout(function () {
        $(".Start_Game-Two").css("display", "none");
      }, 250);
      setTimeout(function () {
        $(".cards_one").css("display", "");
        $(".cards_one").addClass("popInLeft duration-450");
      }, 300);
      console.log(count++);
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 75,
  });
});

function changeItem_Left() {
  $("section").addClass("popOutLeft duration-450");
  setTimeout(function () {
    $("section").removeClass("popOutLeft");
  }, 500);
}

function changeItem_Right() {
  $("section").addClass("popOutRight duration-450");
  setTimeout(function () {
    $("section").removeClass("popOutRight");
  }, 500);
}

function changeItem_Star() {
  $(".Start_Game").toggleClass("popOutLeft duration-250");
  setTimeout(function () {
    $(".Start_Game").css("display", "none");
  }, 249);
  setTimeout(function () {
    $(".Start_Game-Two").css("display", "");
    $(".Start_Game-Two").toggleClass("popInRight duration-450");
  }, 300);
}

function changeItem_Left_CardsTwo() {
  $(".Start_Game-Two").toggleClass("popOutRight duration-250");
  setTimeout(function () {
    $(".Start_Game-Two").css("display", "none");
  }, 250);

  setTimeout(function () {
    $(".cards_one").css("display", "");
    $(".cards_one").toggleClass("popInLeft duration-450");
  }, 300);
}

$(".cards_one").ready(function () {
  var count = 0;
  console.log(count++);
});
