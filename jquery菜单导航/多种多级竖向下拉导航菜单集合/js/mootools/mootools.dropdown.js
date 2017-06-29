/* 代码整理：懒人之家 www.lanrenzhijia.com */
window.addEvent('load', function() {
  var items = document.getElementById("nav").getElementsByTagName("li");
  for (var i=0; i<items.length; i++)
  {
    items[i].onmouseover=function()
    {
      el = $(this);
      el.addClass("hover");
      $(el.getFirst('ul')).setStyle('visibility', 'visible');
    }
    items[i].onmouseout=function()
    {
      el = $(this);
      el.removeClass("hover");
      $(el.getFirst('ul')).setStyle('visibility', 'hidden');
    }
  }
})
