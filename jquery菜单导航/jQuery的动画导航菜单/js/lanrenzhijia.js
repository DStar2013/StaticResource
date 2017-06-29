// 代码整理：懒人之家 lanrenzhijia.com
$(document).ready(function() {
			
				$('.menu li').click(function() {
					
					previousItem	= $(this).prevAll('li').length;
					thisLength		= $(this).css('width');
					thisTitle		= ($(this).attr('title') != "") ? $(this).attr('title') : "Title Example";
					thisTitle		= thisTitle + '<br/><img src="images/pointer.png" />';
					thisPadding		= parseInt($(this).css('padding-left')) + parseInt($(this).css('padding-right'));
					navigatorSlide	= (parseInt(thisLength) + parseInt(thisPadding) + 3) * previousItem;
					
					$(this).parents('ul').prev('.navigator').html(thisTitle).animate({ marginLeft: navigatorSlide });
					
				});
				
				$('.menu-2 li').click(function() {
					
					previousItem	= $(this).prevAll('li').length;
					thisLength		= $(this).css('width');
					thisPadding		= parseInt($(this).css('padding-left')) + parseInt($(this).css('padding-right'));
					navigatorSlide	= (parseInt(thisLength) + parseInt(thisPadding) + 4) * previousItem;
					
					$(this).parents('ul').prev('.navigator-2').animate({ marginLeft: navigatorSlide });
					
				});
			
				$('.menu-3 li').hover(function() {
				
					previousItem	= $(this).prevAll('li').length;
					thisLength		= $(this).css('width');
					thisPadding		= parseInt($(this).css('padding-left')) + parseInt($(this).css('padding-right'));
					navigatorSlide	= (parseInt(thisLength) + parseInt(thisPadding) + 4) * previousItem;
					
					$(this).parents('ul').prev('.navigator-3').animate({ marginLeft: navigatorSlide }, 300);
					
				});
				
			});

/* 代码整理：懒人之家 lanrenzhijia.com */