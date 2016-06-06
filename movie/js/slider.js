$(document).ready(function(){
	$('.click-prev').bind("click",function(){
	    $(".pic-container").animate({left:"+=589px"},500);
	  });
	$('.click-after').bind("click",function(){
	    $(".pic-container").animate({left:"-=589px"},500);
	  });
});