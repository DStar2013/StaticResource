// 代码整理：懒人之家 lanrenzhijia.com
$(document).ready(function(){
	
	// first demo
	$(".first a").hover(function(){
		$(this).animate({
			backgroundColor:"#00aadd"
		}, 600);
	},function(){
		 $(this).animate({
		 	backgroundColor:"#303030"
		},400);
	});

	// second demo
	$(".second a").hover(function(){
		$(this).animate({
			color:"#00eeff"
		},400);
	},function(){
		$(this).animate({
			color:"#FFFFFF"
		},500);
	});
	
	// third demo
	original = $('.third a').css('background-color');
	$('.third a').hover(function(){
		var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).animate({
			'backgroundColor':col
		}, 1000);
	},function(){
		$(this).animate({
			'backgroundColor':original
		},500);
	});

	// fourth demo
	$('.fourth a').hover(function(){
		var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).animate({
			'backgroundColor': col
		},500);
	},function(){
		var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'; 
		$(this).animate({
			'backgroundColor': col
		},500);
	});
	
});