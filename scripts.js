var height=$( window ).height()-40;



$(".codecontainer").css("height",height+"px");

$("#csscontainer").css("display","none");
$("#jscontainer").css("display","none");

$(".menu-item").click(function() {
  $(this).toggleClass("selected");

  var id= $(this).attr('name');
 $("#"+id+"container").toggle();


  var numDisplayed = $('.codecontainer').filter(function(){
    return $(this).css('display') !== 'none';
  }).length;


  var width = 100/numDisplayed;
  $(".codecontainer").css("width", width+"%");
});
