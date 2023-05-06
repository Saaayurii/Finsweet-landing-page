$(function () {
  $(".rateYo").rateYo({
    starWidth: "40px"
  });
  
 
  var mixer = mixitup('.Blog__list');
  $('.card-deck a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  });

  $('.Customers__slider').slick({
    arrows: false,
    slidesToShow:2,
    infinite:true,
    draggable: false,
    waitForAnimate: false,
  })
  $('.Customers__slider-prev').on('click', function(e){
    e.preventDefault()
    $('.Customers__slider').slick('slickPrev')
  })
  $('.Customers__slider-next').on('click', function(e){
    e.preventDefault()
    $('.Customers__slider').slick('slickNext')
  })
  
  
});
