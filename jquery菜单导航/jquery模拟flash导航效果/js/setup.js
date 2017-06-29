/* 代码整理：懒人之家 lanrenzhijia.com */
$(document).ready(function(){
	$('#hnav').autosprites({
		offset: '72px',
		activeState: true,
		activeSprites: true
	});
	$('#vnav').autosprites({
		orientation: 'vertical',
		offset: '234px'
	});
});