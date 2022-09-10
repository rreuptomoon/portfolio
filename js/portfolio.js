$(function () {
  load();

  $(".meun ul li").hover(
    function () {
      //mousein li - silbings = li borther opacity to 0.1
      $(this).children().siblings(".moon_icon").stop().fadeTo(400, 1);
    },
    function () {
      //mouseOut li - silbings  opacity back to 1
      $(this).children().siblings(".moon_icon").stop().fadeTo(400, 0.1);
    },
  );

  //1) mouseover the li
  $(".meun ul li ").click(function () {
    //2)get the li index
    let index = $(this).index();
    //3)let content box index show
    $(".content div").eq(index).show();
    $(".content div").eq(index).siblings().hide();

    $(this).children("a").hide();
    $(this).siblings().children("a").show();
  });

  $(".question li").hover(function () {
    $(this).children("h4").stop().fadeToggle(400);

    $(this).children(".answer").stop().slideToggle(400);
  });

  $(".text-1 h2,.text-4 h2").hover(
    function () {
      $(this).stop().fadeTo(400, 0.1);
      $(this).siblings().stop().fadeIn();
    },
    function () {
      $(this).stop().fadeTo(400, 1);
      $(this).siblings().stop().fadeOut();
    },
  );

  function load() {
    setInterval(timer, 3000);
    function timer() {
      $(document).ready(function () {
        $("#mask").fadeOut(1800);
      });
    }
  }
});
