$(function () {
  $(".btn_no").swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      $("section").toggleClass("popOutLeft duration-250");
      setTimeout(function () {
        $("section").removeClass("popOutLeft");
      }, 300);
      setTimeout(function () {
        $("section").toggleClass("popInRight duration-250");
      }, 340);
    },
    threshold: 75,
  });

  $(".btn_next").swipe({
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      $("section").toggleClass("popOutRight duration-250");
      setTimeout(function () {
        $("section").removeClass("popOutRight");
      }, 300);
      setTimeout(function () {
        $("section").toggleClass("popInLeft duration-250");
      }, 340);
    },
    threshold: 75,
  });
  $(".btn_yes").swipe({
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      $("section").toggleClass("popOutRight duration-250");
      setTimeout(function () {
        $("section").removeClass("popOutRight");
      }, 300);
      setTimeout(function () {
        $("section").toggleClass("popInLeft duration-250");
      }, 340);
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
  $("section").toggleClass("popOutLeft duration-250");
  setTimeout(function () {
    $("section").removeClass("popOutLeft");
  }, 300);
  setTimeout(function () {
    $("section").toggleClass("popInRight duration-250");
  }, 340);
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

function changeItem_Right() {
  $("section").toggleClass("popOutRight duration-250");
  setTimeout(function () {
    $("section").removeClass("popOutRight");
  }, 300);
  setTimeout(function () {
    $("section").toggleClass("popInLeft duration-250");
  }, 340);
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

function loader() {
  $(".cards_one").toggleClass("popOutLeft duration-250");
  setTimeout(function () {
    $(".cards_one").css("display", "none");
  }, 400);
  setTimeout(function () {
    $(".loader").toggleClass("popInLeft duration-250");
  }, 400);
  setTimeout(function () {
    $(".loader").css("display", "");
  }, 400);
  setTimeout(function () {
    $(".loader").toggleClass("popOutLeft duration-250");
  }, 4000);
  setTimeout(function () {
    $(".loader").css("display", "none");
  }, 4250);
  setTimeout(function () {
    $(".end_game").css("display", "");
    $(".end_game").toggleClass("popInRight duration-450");
  }, 4400);
}
function admin() {
  $(".end_game").toggleClass("popOutLeft duration-250");
  setTimeout(function () {
    $(".end_game").css("display", "none");
  }, 400);

  setTimeout(function () {
    $(".admin").css("display", "");
    $(".admin").toggleClass("popInRight duration-450");
  }, 410);
}

$(".cards_one").ready(function () {
  var count = 0;
  console.log(count++);
});
