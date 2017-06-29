// 代码整理：懒人之家
$(document).ready(function(){
	var timerId = null;
	function itemShow(){
		if (timerId) return;
		timerId = setInterval(function(){
			$("#feature li.current a span").animate({top: "-55px" }, "fast");
			$("#feature li.current a p").animate({top: "-55px" }, "fast");
		}, 200);
	}
	function itemHide(){
		if (!timerId) return;
		$("#feature li.current a span").animate({top: "0px" }, "fast");
		$("#feature li.current a p").animate({top: "0px" }, "fast");
		$("#feature li.current").removeClass("current");
		clearInterval(timerId);
		timerId = null;
	}
	$("#feature li").hover(function(){
		$(this).addClass("current");
		itemShow();
	}, itemHide);
});