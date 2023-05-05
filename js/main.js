$(function () {
  $(".rateYo").rateYo({
    starWidth: "40px"
  });
  
 
  var mixer = mixitup('.Blog__list');
});
$('.card-deck a').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.card-text').html();
  }
});
