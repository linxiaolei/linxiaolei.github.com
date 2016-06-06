$(document).ready(function(){
     $("li a").eq(0).css("color","#7C401C");
     $("li a").eq(1).css("color","blue");
     $("li a").eq(2).css("color","#F0A317");
     $("li").eq(3).css("color","#1EB4EC");
     $("li").eq(4).css("color","#ED3D25");
     $("li").eq(5).css("color","lightblue");
     $("li").eq(6).css("color","red");
     $("li").eq(7).css("color","green"); 
     $(".qrcode_green img").hover(function(){
         $(".qrcode_black").show();
     }); 
      $(".qrcode_black").mouseleave(function(){
         $(".qrcode_black").hide();
     }); 
     $(".input-group").eq(2).hide();
     
     $(".pic .image").hover(function(){
        $(this).next().show();
     });
     $("a.player").mouseleave(function(){
        $(this).hide();
     });
});