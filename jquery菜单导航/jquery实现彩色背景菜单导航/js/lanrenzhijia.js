// 代码整理：懒人之家  www.lanrenzhijia.com 

$(function(){
		 
		   $('#navigation li a').append('<span class="hover"></span>')
		   
		   $('#navigation li a').hover(function() {
	        
		// Stuff that happens when you hover on + the stop()
		$('.hover', this).stop().animate({
			'opacity': 1
			}, 700,'easeOutSine')
	
	},function() {
	
		// Stuff that happens when you unhover + the stop()
		$('.hover', this).stop().animate({
			'opacity': 0
			}, 700, 'easeOutQuad')
	
	})
		   });


// 代码整理：懒人之家  www.lanrenzhijia.com 