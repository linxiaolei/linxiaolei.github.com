$(document).ready(function(){
     $("li").eq(0).css("color","#7C401C");
     $("li").eq(1).css("color","blue");
     $("li").eq(2).css("color","#F0A317");
     $("li").eq(3).css("color","#1EB4EC");
     $("li").eq(4).css("color","#ED3D25");
     $("li").eq(5).css("color","lightblue");
     $("li").eq(6).css("color","red");
     $("li").eq(7).css("color","green"); 
     $(".qrcode_green").hover(function(){
         $(".qrcode_green").hide();
         $(".qrcode_black").show();
     }); 
      $(".qrcode_black").mouseout(function(){
         $(".qrcode_black").hide();
         $(".qrcode_green").show();
     }); 
     $(".input-group").eq(2).hide();
});