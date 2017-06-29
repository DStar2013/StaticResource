// 代码整理：懒人之家
var webPan={
	first:function(x){return x.firstChild||x.firstChild.nextSibling},
	next:function(x){
		do{x=x.nextSibling}while(x&&x.nodeType!=1);
		return x;
	},
	set:function(x,_1,_2,_3){
		this.next(x).style.display = _1;
		this.first(x).className = this.first(x).className.replace(_2,_3);	
	},
	init:function(){
		var _this=this,_0='mo_title_r1',_1='mo_title_r2';
		function $(o){return document.getElementById(o)};
		this.win=[];
		for (var i=0;i<arguments.length;++i ) {
			var _i=this.first($(arguments[i]));
			this.set(_i,'none',_0,_1);
			_i.onclick=function (){
				if(_this.prev&&_this.prev!=this){_this.set(_this.prev,'none',_0,_1)};
				var _2=_this.first(this).className.indexOf(_1) == 0?['',_1,_0]:['none',_0,_1];
				_this.set(this,_2[0],_2[1],_2[2]);
				_this.prev=this;
			}
		}
	}
};
window.onload = function (){
	webPan.init('win1','win2','win3','win4')
}