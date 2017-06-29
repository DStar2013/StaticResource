// JavaScript Document

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-3672694-9']);
  _gaq.push(['_trackPageview']);
 
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  
  
  
  
  
  var DDSPEED = 10;
var DDTIMER = 15;
// main function to handle the mouse events //
function ddMenu(id,d)
{
    var h = document.getElementById(id + '-ddheader');
    var c = document.getElementById(id + '-ddcontent');
    clearInterval(c.timer);
    if(d == 1)
    {
        clearTimeout(h.timer);
        if(c.maxh && c.maxh <= c.offsetHeight)
        {
            return;
        }
        else if(!c.maxh)
        {
            c.style.top = '-' + c.offsetHeight + 'px';
            c.style.display = 'block';
            c.style.height = 'auto';
            c.maxh = c.offsetHeight;
            c.style.height = '0px';
        }
        c.timer = setInterval(function(){ddSlide(c,1)},DDTIMER);
    }
    else
    {
        h.timer = setTimeout(function(){ddCollapse(c)},50);
    }
}
// collapse the menu www.5icool.org //
function ddCollapse(c){
  c.timer = setInterval(function(){ddSlide(c,-1)},DDTIMER);
}
// cancel the collapse if a user rolls over the dropdown cent //
function cancelHide(id){
  var h = document.getElementById(id + '-ddheader');
  var c = document.getElementById(id + '-ddcontent');
  clearTimeout(h.timer);
  clearInterval(c.timer);
  if(c.offsetHeight < c.maxh){
    c.timer = setInterval(function(){ddSlide(c,1)},DDTIMER);
  }
}
// incrementally expand/contract the dropdown and change the opacity //
function ddSlide(c,d){
  var currh = c.offsetHeight;
  var dist;
  if(d == 1){
    dist = (Math.round((c.maxh - currh) / DDSPEED));
  }else{
    dist = (Math.round(currh / DDSPEED));
  }
  if(dist <= 1 && d == 1){
    dist = 1;
  }
  c.style.top = parseInt(c.style.top.replace('px','')) - parseInt(dist * d) + 'px';
  c.style.height = currh + (dist * d) + 'px';
  if(getOs()=="Firefox")
  {	
    c.style.opacity = currh / c.maxh;
    c.style.filter = 'alpha(opacity=' + (currh * 100 / c.maxh) + ')';
  }
  if((currh < 2 && d != 1) || (currh > (c.maxh - 2) && d == 1)){
      clearInterval(c.timer);
  }
}
function getOs() 
{ 
   var OsObject = ""; 
   if(navigator.userAgent.indexOf("MSIE")>0) { 
        return "MSIE"; 
   } 
   if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){ 
        return "Firefox"; 
   } 
   if(isSafari=navigator.userAgent.indexOf("Safari")>0) { 
        return "Safari"; 
   }  
   if(isCamino=navigator.userAgent.indexOf("Camino")>0){ 
        return "Camino"; 
   } 
   if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){ 
        return "Gecko"; 
   } 
} 