/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/autosprites-jquery-menu-plugin
*/

(function($) {
	$.fn.autosprites = function(settings) {
		settings = $.extend({
			offset: '100%',
			orientation: 'horizontal',
			over: { opacity: 'show' },
			overSpeed: 500,
			out: { opacity: 'hide' },
			outSpeed: 500,
			activeState: false,
			activeClass: 'active',
			activeSprites: false
		}, settings);

		function rempx(string){ return Number(string.substr(0, string.length - 2));	}
		function addpx(number){	return number + 'px'; }
		
		$(this).each(function(){
			var backgroundImage = $(this).css('background-image');
			
			// Solves IE6 stacking context bug
			$(this).css('zIndex', 100).find('a').css('zIndex', 99);
			
			var totalPositionOffset = 0;
			$(this).children().each(function(){
				var positionOffset = '-' + addpx(totalPositionOffset);
				
				// Assign the background image to each menu item and give it the correct background-position
				var baseOffset = '0px';
				//If this child is active we need to adjust the base offset to the active level
				if(settings.activeState && $(this).hasClass(settings.activeClass)){
					baseOffset = '-' + addpx(rempx(settings.offset));
					if(settings.activeSprites)
						baseOffset = '-' + addpx(rempx(settings.offset) * 2);
				}
				var position = settings.orientation == 'horizontal' ? positionOffset + ' ' + baseOffset : baseOffset + ' ' + positionOffset;
				var offsetPosition = settings.orientation == 'horizontal' ? positionOffset + ' -' + settings.offset : '-' + settings.offset + ' ' + positionOffset;
				$(this).css({
					backgroundImage: backgroundImage,
					backgroundPosition: position
				});
				
				// Build the Hover Divs so that the background can be animated
				var width = $(this).css('width');
				var height = $(this).css('height');
				var hover = $('<div>&nbsp;</div>').css({
						cursor: 'hand',
						zIndex: 1,
						position: 'absolute',
						top: 0,
						left: 0,
						width: width,
						height: height,
						backgroundImage: backgroundImage,
						backgroundPosition: offsetPosition
					}).hide();
				$(this).prepend(hover);
				
				
				$(this).hover(function(){
					$(this).find('div').stop(false, true).animate(settings.over, settings.overSpeed);
				}, function(){
					$(this).find('div').stop(false, true).animate(settings.out, settings.outSpeed);
				});
				
				totalPositionOffset += settings.orientation == 'horizontal' ? rempx(width) : rempx(height);
			});
		});
	}
})(jQuery);
