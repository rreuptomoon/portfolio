$(function () {
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

  $(".meun ul li").hover(
    function () {
      //mousein li - silbings = li borther opacity to 0.1
      $(this).children().siblings(".moon_icon").stop().fadeTo(400, 0.1);
    },
    function () {
      //mouseOut li - silbings  opacity back to 1
      $(this).children().siblings(".moon_icon").stop().fadeTo(400, 1);
    },
  );

  /*  $(".question li").hover(
    function () {
      $(this).children(".answer").show();
      $(this).siblings().children(".answer").hide();
    },
    function () {
      $(this).children(".answer").hide();
      $(this).siblings().children(".answer").hide();
    },
  ); */

  $(".question li").hover(function () {
    $(this).children(".answer").stop().slideToggle(400);
  });
});
