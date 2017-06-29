// 代码整理：懒人之家

var object = new Array();

function Slide(N,oCont){
	this.N  = N;
	this.S  = 1.1;
	this.object = new Array();

	this.CObj = function (parent,N){
	
		this.parent = parent;
		this.N = N;
		this.obj = parent.frm[N];
		this.tit = this.obj.firstChild;
		this.div = this.obj.getElementsByTagName("div")[1];
		this.div.style.visibility = "hidden";
		this.y0 = N * 18;
		this.Y1 = this.y0;
		this.obj.style.top = this.y0;
		this.obj.style.height = parent.H - (parent.NF-1) * 18 - 3;
		this.obj.style.visibility = "visible";
		this.obj.parent = this;
		this.run = false;
		
		this.move = function(){
			with(this){
				dy = (y1-y0)/parent.S;
				if(Math.abs(dy)>.1){
					y0+=dy;
					obj.style.top = Math.round(y0);
					setTimeout("object["+parent.N+"].object["+N+"].move();", 16);
				} else {
					run = false;
					if(dy>0)div.style.visibility="hidden";
					else if(N>0)parent.object[N-1].div.style.visibility="hidden";
				}
			}
		}
		
		this.obj.onmouseover = function(){
			with(this.parent){
				if(!run){
					run = true;
					div.style.visibility="visible";
					for(i=0;i<parent.NF;i++)parent.object[i].tit.className = "title";
					tit.className = "title_o";
					for(i=0;i<=N;i++){
						parent.object[i].y1 = i*18;
						parent.object[i].move();
					}
					for(i=N+1;i<parent.NF;i++){
						parent.object[i].y1 = parent.H-(parent.NF-i)*18;
						parent.object[i].move();
					}
				}
			}
		}
	}

	this.frm = document.getElementById(oCont);
	this.H = parseInt(this.frm.style.height);
	this.frm = this.frm.getElementsByTagName("span");
	this.NF = this.frm.length;
	for(i=0;i<this.NF;i++) this.object[i] = new this.CObj(this, i);
	this.object[0].obj.onmouseover();
	this.S = 10;
}

onload = function() {
	object[0] = new Slide(0, "frames");
}