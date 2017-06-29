/* 代码整理：懒人之家 www.lanrenzhijia.com */
var nav = {
	init:function(){
		var that = this;
		this.nav = $("#nav");	
		this.navBox = $("#navBox");
		this.subNav = $(".subnav");
		this.navLi = this.nav.find("li");
		this.navBox.bind("mouseleave",function(){			
			that.hideFn();	
		});
		this.isShow = false;
		this.navBox.bind("mouseover",function(){			
			clearTimeout(that.timer);
		});
		this.subNav.bind("mouseover",function(){
			clearTimeout(that.timer2);
			clearTimeout(that.timer);
		});
		this.navLi.bind("mouseover",function(){
			clearTimeout(that.timer2);
			var self = $(this);					
			that.timer2 = setTimeout(function(){
				//document.title = self.attr("sub");	
				if(self.attr("sub")){	
					that.subNav.hide();	
					that.navLi.find("a").removeClass("on");
					$("#"+self.attr("sub")).slideDown(150);	
					self.find("a").addClass("on");			
				};
			},500);		
		});		
	},
	hideFn:function(){
		var that = this;
		clearTimeout(that.timer2);
		clearTimeout(that.timer);
		this.timer = setTimeout(function(){			
			that.subNav.slideUp(100);		
			that.nav.find("li a").removeClass("on");
			that.isShow = false;		
		},500);		
	}	
};
/* 代码整理：懒人之家 www.lanrenzhijia.com */