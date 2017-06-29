// 懒人之家  www.lanrenzhijia.com

	function setValueById(pObjID,pValue){
		var obj=document.getElementById(pObjID);
		try{
			obj.value=pValue;
		}catch(e){
			alert("控件："+pObjID+"　不存在，或没有value属性")
		}
	}
	
	function $(pID){
		return document.getElementById(pID);
	}
	
	function getNodeAtt(pNode,pAtt){
		try{
			return pNode.attributes.getNamedItem(pAtt).nodeValue;
		}catch(e){
			//alert("前台调试错误：\n"+e.message+"\n当前节点不存在: "+pAtt+"这个属性");
		}
	}
	
	var myTree=new JTree("showTree","vogueType.xml");
	myTree.setPicPath("JTreePic/")
	myTree.onclick=function(){
		//alert(myTree.selectNode.parentNode.attributes.getNamedItem("explain").nodeValue);
		//alert(myTree.clickItem.level)
		//alert(myTree.clickItem.treeNodes.length);
		//try{myTree.clickItem.treeNodes[0].click();}catch(e){}
		setValueById("typeCaption",vControl('REPLACE',getNodeAtt(myTree.selectNode,"caption")));
		setValueById("parentType",vControl('REPLACE',getNodeAtt(myTree.selectNode.parentNode,"caption")));
		setValueById("PRI",getNodeAtt(myTree.selectNode,"PRI"));
		setValueById("explain",getNodeAtt(myTree.selectNode,"explain"));
		setValueById("level",myTree.clickItem.level);
	}
	myTree.CAPTIONATT="caption";
	myTree.create();
	//alert(myTree.root.caption);
	myTree.root.treeNodes[0].treeNodes[1].click();
	myTree.treeNodes[0].treeNodes[1].expand(false);
	myTree.treeNodes[0].treeNodes[2].expand(false);
	
function vControl(pChoice,pParm){
	switch(pChoice){
		case "REPLACE":
			var pattern=/\([0-9]+\)$/;
				return pParm.replace(pattern,"");
			break;
		case "FINDNODE":
			var obj;
			for(var i=0;obj=pParm[i];i++){
				alert(obj.caption);
				if(obj.caption==$("nodeCaption").value)
					obj.click();
			}
			break;
	}
}

function findNode(pTree){
	var obj;
	for(var i=0;obj=pTree[i];i++){
		if(obj.caption==$("nodeCaption").value){
			obj.click();
			//obj.parentTreeNode.expand(true)
			myTree.clickItem.parentTreeNode.expand(true);
			return true;
		}
		findNode(obj.treeNodes)
	}
}