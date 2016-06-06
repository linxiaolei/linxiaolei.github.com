$(document).ready(function(){
$(function () {
 // Slideshow 
 $("#slider").responsiveSlides({
  auto: false,
  pager: true,
  nav: true,
  speed: 500,
  timeout:4000,
  pager: true, 
  pauseControls: true,
  namespace: "callbacks"
 });
});
$(".m2").hide();
 $(".m3").hide();
 $(".doubane").hide();
 $(".loaddown").hide();
 $("#more").hide();
 $(".shopname:eq(0)").css({"background-color":"#9B7C5E","color":"white"});
 $(".shopname:eq(0)").click(function(){
$(".m1").show();
$(".m2").hide();
$(".m3").hide();
 $(".shopname:eq(0)").css({"background-color":"#9B7C5E","color":"white"});
  $(".shopname:eq(1)").css({"background-color":"white","color":"#C4BBB4"});
   $(".shopname:eq(2)").css({"background-color":"white","color":"#C4BBB4"});
 })
$(".shopname:eq(1)").click(function(){
$(".m2").show();
$(".m1").hide();
$(".m3").hide();
$(".shopname:eq(1)").css({"background-color":"#9B7C5E","color":"white"});
  $(".shopname:eq(0)").css({"background-color":"white","color":"#C4BBB4"});
   $(".shopname:eq(2)").css({"background-color":"white","color":"#C4BBB4"});
 })
$(".shopname:eq(2)").click(function(){
$(".m3").show();
$(".m2").hide();
$(".m1").hide();
$(".shopname:eq(2)").css({"background-color":"#9B7C5E","color":"white"});
  $(".shopname:eq(1)").css({"background-color":"white","color":"#C4BBB4"});
   $(".shopname:eq(0)").css({"background-color":"white","color":"#C4BBB4"});
 })
$(".icon:eq(2)").mouseover(function (){
$(".doubane").show();
})
$(".icon:eq(2)").mouseout(function (){
$(".doubane").hide();
})
$(".app").mouseover(function (){
$(".loaddown").show();
})
$(".app").mouseout(function (){
$(".loaddown").hide();
})
$("#mm").click(function(){
$("#more").show();
 })
 $(document).on('mouseup', function(e) {
    if( ! $(e.target).is($("#more")) ) {
        $("#more").hide();
    }
});




});
