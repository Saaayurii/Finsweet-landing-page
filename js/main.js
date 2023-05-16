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
  $(".header__nav-list a, .footer__nav-list a").on("click",  function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $("body,html").animate({ scrollTop: top }, 1000)
  })
  

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })

});
