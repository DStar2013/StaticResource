// 代码整理：懒人之家  lanrenzhijia.com
$(function(){
	
	//navSlider
	function navSlider(){
		var $nav = $('.nav'),
		$cur = $('.nav li.cur a'),
		$navLine = $('.nav-line'),
		$anchor = $('a',$nav.children()),
		curPosL = $cur.position().left,
		curW = $cur.outerWidth(true),
		curIdx = $('li.cur',$nav).index();
		$navLine.css({'width':curW,'left':curPosL});
		$anchor.not('li.last a',$nav).each(function(index){
			var posL = $(this).position().left,
			w = $(this).outerWidth(true);
			$(this).mouseenter(function(){
				$navLine.animate({'width':w,'left':posL},250);
				$(this).parent().addClass('cur').siblings().removeClass('cur');
			});
		});
		$nav.mouseleave(function(){
			$navLine.animate({'width':curW,'left':curPosL},250);
			$anchor.parent(':eq('+curIdx+')').addClass('cur').siblings().removeClass('cur');
		});
	};
	
	navSlider();
	
	
	// sideSlider
	function sideSlider(){
		if(!$(".help-side dl").length){
			return false;
		}
		
		var $aCur = $(".help-side dl").find(".cur a"),
			$targetA = $(".help-side dl dd a"),
			$sideSilder = $(".side-slider"),
			curT = $aCur.position().top - 3;
		
		$sideSilder.stop(true, true).animate({
			"top":curT
		});
	
		$targetA.mouseenter(function(){
			var posT = $(this).position().top - 3;
			$sideSilder.stop(true, true).animate({
				"top":posT
			}, 240);
		}).parents(".help-side").mouseleave(function(_curT){
			_curT = curT
			$sideSilder.stop(true, true).animate({
				"top":_curT
			});
		});
	};
	
	sideSlider();
	
});