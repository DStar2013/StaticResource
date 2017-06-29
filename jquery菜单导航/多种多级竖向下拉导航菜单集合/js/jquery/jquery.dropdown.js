/* 代码整理：懒人之家 www.lanrenzhijia.com */
$(document).ready(function(){

	$("ul.dropdown li").dropdown();

});

$.fn.dropdown = function() {

	$(this).hover(function(){
		$(this).addClass("hover");
		$('> .dir',this).addClass("open");
		$('ul:first',this).css('visibility', 'visible');
	},function(){
		$(this).removeClass("hover");
		$('.open',this).removeClass("open");
		$('ul:first',this).css('visibility', 'hidden');
	});

}