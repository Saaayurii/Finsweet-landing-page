$(function () {
  $(".rateYo").rateYo({
    starWidth: "40px",
  });

  var mixer = mixitup(".Blog__list");
  $(".card-deck a").fancybox({
    caption: function (instance, item) {
      return $(this).parent().find(".card-text").html();
    },
  });

  $(".Customers__slider").slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    dots: true,
    appendDots: $(".Customers__dots"),
  });
  $(".Customers__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".Customers__slider").slick("slickPrev");
  });
  $(".Customers__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".Customers__slider").slick("slickNext");
  });

  $(".Questions__acc-link").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("Questions__acc-link--active");
    $(this).children(".Questions__acc-text").slideToggle();
  });



});
