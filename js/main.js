$(function () {
 
  $(".rateYo").rateYo({
    starWidth: "40px"
  });
 
});
$('.card-deck a').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.card-text').html();
  }
});