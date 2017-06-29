// 代码整理：懒人之家 lanrenzhijia.com
$(function(){
	
	//实例2: 自顶向下
	$("#a a").css({backgroundPosition: "-20px 35px"}).mouseover(function(){
		$(this).stop().animate({
			backgroundPosition:"(-20px 94px)"
		},{duration:500})
	}).mouseout(function(){
		$(this).stop().animate({
			backgroundPosition:"(40px 35px)"
		},{duration:200, complete:function(){
			$(this).css({backgroundPosition: "-20px 35px"})
		}})
	})
	
	//实例3: 右左
	$('#b a').css({backgroundPosition:"0 0"}).mouseover(function(){
		$(this).stop().animate({
			backgroundPosition:"(-150px 0)"
		},{duration:500})
	}).mouseout(function(){
		$(this).stop().animate({
			backgroundPosition:"(-300px 0)"
		},{duration:200,complete:function(){
			$(this).css({backgroundPosition: "0 0"})
		}})
	})
	
	//实例4: 淡出淡入
	$('#c a').css({backgroundPosition:"0 0"}).mouseover(function(){
		$(this).stop().animate({
			backgroundPosition:"(0 -250px)"
		},{duration:500})
	}).mouseout(function(){
		$(this).stop().animate({
			backgroundPosition:"(0 0)"
		},{duration:500})
	})
	
	//实例5: 淡出淡入颜色	
	$('#d a').css({backgroundPosition: "0 0"}).mouseover(function(){
		$(this).stop().animate({
			backgroundPosition:"(0 -250px)"
		},{duration:500})
	}).mouseout(function(){
		$(this).stop().animate({
			backgroundPosition:"(0 0)"
		},{duration:500})
	})
	
	//实例6: 背景折叠动画效果
	$(".navTag a").css({backgroundPosition: "right 0"}).mouseover(function(){
		$(this).stop().animate({
			backgroundPosition:"(right -62px)"
		},{duration:400})
	}).mouseout(function(){
		$(this).stop().animate({
			backgroundPosition:"(right 0)"
		},{duration:400})
	})
	$(".navTag a span").css({backgroundPosition:"left 0"}).mouseover(function(){
		$(this).stop().animate({
			backgroundPosition:"(0 -62px)"
		},{duration:400})
	}).mouseout(function(){
		$(this).stop().animate({
			backgroundPosition:"(left 0)"
		},{duration:400})
	})
	
});