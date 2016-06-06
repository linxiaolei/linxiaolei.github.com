$(document).ready(function(){
	//"下载客户端"悬停出现二维码
	$("#download-app").hover(
		function(){
			$(".download-intro").show();
		},
		function(){
			$(".download-intro").hide();
		});
	$(".download-intro").hover(
		function(){
			$(".download-intro").show();
		},
		function(){
			$(".download-intro").hide();
		});
	//热门音乐人hover出现半透明遮罩
	$(".musician-item").hover(
		function(){
			$(this).find(".hover-layer").show();
			$(this).find(".play-icon-2").css("background-color","white");
			$(this).find("i").css("color","black");
		},
		function(){
			$(this).find(".hover-layer").hide();
			$(this).find(".play-icon-2").css("background-color","black");
			$(this).find("i").css("color","white");
		});
	//本周热门音乐人与上升最快音乐人之间的切换
	//编辑推荐hover出现半透明遮罩
	$(".recommend-item").hover(
		function(){
			$(this).find(".hover-layer2").show();
			$(this).find(".play-icon-3").css("background-color","white");
			$(this).find("i").css("color","black");
		},
		function(){
			$(this).find(".hover-layer2").hide();
			$(this).find(".play-icon-3").css("background-color","black");
			$(this).find("i").css("color","white");
		});
	//热门歌单hover出现半透明遮罩
	$(".hot-item").hover(
		function(){
			$(this).find(".hover-layer3").show();
		},
		function(){
			$(this).find(".hover-layer3").hide();
		});
	//本周流行与上升最快两种排名方式
	$(".weekly-option").click(function(){
		$(".weekly-option").css({'font-size':'18px',color:'black'});
		$(".fast-option").css({'font-size':'12px',color:'#999'});
		$(".fast-order").css("display","none");
	});
	$(".fast-option").click(function(){
		$(".fast-option").css({'font-size':'18px',color:'black'});
		$(".weekly-option").css({'font-size':'12px',color:'#999'});
		$(".fast-order").css("display","block");
	});
	$(".play-list li").hover(
		function(){
			$(this).find(".hover-layer4").show();
			$(this).css("background-color","#F5F7F8");
		},
		function(){
			$(this).find(".hover-layer4").hide();
			$(this).css("background-color","white");
		});
	//点击查看前后推荐页面
	$(".recommend-title i").click(function(){
		$(".recommend-title i").css("background-color","rgba(19,138,100,1.0)");
		$(this).css("background-color","rgba(19,138,100,0.5)");
	});
	$("#rec-after").click(function(){
		$(".level-list").stop().animate({"margin-left":"-575px"},500);
	});
	$("#rec-pre").click(function(){
		$(".level-list").stop().animate({"margin-left":"0"},500);
	});
	//图片轮播js
	$(function() {
		var bannerSlider = new Slider($('#banner_tabs'), {
			time: 5000,
			delay: 400,
			event: 'hover',
			auto: true,
			mode: 'fade',
			controller: $('#bannerCtrl'),
			activeControllerCls: 'active'
		});
		$('#banner_tabs .flex-prev').click(function() {
			bannerSlider.prev()
		});
		$('#banner_tabs .flex-next').click(function() {
			bannerSlider.next()
		});
	});
});












