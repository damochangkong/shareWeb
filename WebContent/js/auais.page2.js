coefficient = 200;
page1Handler = {
	operatorType : 1,//Developer:1 Manager:2
	showDeveloper : function(isClick){
		$(".section2 div").stop(true);
		this.operatorType = 1;
		//其他层全部隐藏
		$(".section2DivPhoneCon").find("div").hide();
		$(".section2DivConDetail1").find("img").attr('src', 'images/page2/mind_detail.png');
		$(".section2DivConTree3").find("img").attr('src', 'images/page2/mind_03.png');
		$(".section2DivConTree2").find("img").attr('src', 'images/page2/mind_02.png');
		$(".section2DivConTree1").find("img").attr('src', 'images/page2/mind_01.png');
		this.showCommonDiv(isClick);
	},
	showManager : function(isClick){
		$(".section2 div").stop(true);
		this.operatorType = 2;
		//其他层全部隐藏
		$(".section2DivPhoneCon").find("div").hide();
		$(".section2DivConDetail1").find("img").attr('src', 'images/page2/manager_detail1.png');
		$(".section2DivConTree2").find("img").attr('src', 'images/page2/manager_02.png');
		$(".section2DivConTree1").find("img").attr('src', 'images/page2/manager_01.png');
		this.showCommonDiv(isClick);
	},
	showCommonDiv : function(isClick){
		//背景1显示
		$(".section2DivPhoneCon").show();
		$(".section2DivConTree1").show();
		//鼠标显示
		$(".section2DivMouse").show();
		//设置树的初始位置
		$(".section2DivConTree1").css({left: '0%'});
		$(".section2DivConTree2").css({left: '100%'});
		$(".section2DivConTree3").css({left: '100%'});
		$(".section2DivConDetail2").css({left: '100%',top: '31.7%',display:'none'});
		$(".section2DivConDetail1").css({top: '89%',display:'none'});
		//设置鼠标的初始位置
		$(".section2DivMouse").animate({
			left: '22%',top: '42%'
		}, 3 * coefficient);
		if(isClick){
			//触发动画
			$(".section2DivPhoneCon").delay(2 * coefficient);
			this.mouseClickEvent(this.showTree2);
		}
	},
	beginAction : function(){
		$(".section2DivPhoneCon").delay(2 * coefficient);
		this.showDeveloper(true);
	},
	//回调函数中显示下一个列表
	showTree2 : function(){
		$(".section2DivConTree2").show();
		$(".section2DivConTree1").animate({
			left: '-100%'
		}, 3 * coefficient);
		$(".section2DivConTree2").animate({
			left: '0%',
			opacity : 1
		}, 3 * coefficient);
		if(page1Handler.operatorType==2){
			$(".section2DivConDetail2").show();
			$(".section2DivConDetail2").animate({
				left: '0%',
				opacity : 1
			}, 3 * coefficient);
		}
		if(page1Handler.operatorType==1){
			page1Handler.selectTree2();
		}else{
			page1Handler.addBranch();
		}
	},
	//移动鼠标并点击
	selectTree2 : function(){
		$(".section2DivMouse").delay(3 * coefficient).animate({
			left: '20%',top: '50%'
		}, 3 * coefficient);
		this.mouseClickEvent(this.showTree3);
	},
	//回调函数中显示下一个列表
	showTree3 : function(){
		$(".section2DivConTree3").show();
		$(".section2DivConTree2").animate({
			left: '-100%'
		}, 3 * coefficient);
		$(".section2DivConTree3").animate({
			left: '0%',
			opacity : 1
		}, 3 * coefficient);
		page1Handler.addBranch();
	},
	//增加新的树枝
	addBranch : function(){
		$(".section2DivMouse").delay(3 * coefficient).animate({
			left: '61%',top: '91%'
		}, 3 * coefficient);
		this.mouseClickEvent(this.showInputWin);
	},
	//显示编辑页
	showInputWin : function(){
		$(".section2DivMouse").hide();
		var inputString = "表单组件细节";
		if(page1Handler.operatorType==1){
			$(".section2DivConInput").attr('src', 'images/page2/mind_input.png');
		}else{
			$(".section2DivConInput").attr('src', 'images/page2/manager_input.png');
			inputString = "维修制冰机，联系<br/>15893111111";
		}
		$(".section2DivConInput").show();
		(function(){
			$('<div></div>').addClass('inputElement').appendTo(".section2DivConInput").typed({
	            strings: [inputString],
	            typeSpeed: 0.5 * coefficient,
	            startDelay: 2 * coefficient,
	            backDelay: 2 * coefficient,
	            loop: false,
	            contentType: 'html',
	            loopCount: true,
	            showCursor: false,
	            preStringTyped: function() {
	            },
	            callback: function(){
	            	page1Handler.saveBranch();
	            }
	        });
		})();
	},
	//点击保存
	saveBranch : function(){
		$(".section2DivMouse").css({left: '64%',top: '42%'}).show();
		this.mouseClickEvent(this.showAddedPage);
	},
	showAddedPage : function(){
		$(".section2DivConInput").hide().find("div").remove();
		$(".section2DivMouse").hide();
		$(".section2DivConDetail1").show();
		$(".section2DivConDetail1").animate({
			top:'39.7%'
		}, 3 * coefficient,(page1Handler.operatorType==1)? null : page1Handler.changePosition);
	},
	changePosition : function(){
		$(".section2DivMouse").css({left: '22%',top: '42%'}).show();
		//三个动画效果同时执行，即同时延迟之后再同时执行
		$(".section2DivMouse").delay(2 * coefficient).animate({
			top : '33%'
		}, 2 * coefficient,page1Handler.hideMouse);
		$(".section2DivConDetail1").delay(2 * coefficient).animate({
			top : '31.7%'
		}, 2 * coefficient);
		$(".section2DivConDetail2").delay(2 * coefficient).animate({
			top : '39.7%'
		}, 2 * coefficient);
		;
	},
	hideMouse : function(){
		$(".section2DivMouse").delay(5 * coefficient).hide();
	},
	mouseClickEvent : function(callBack){
		$(".section2DivMouse").delay(5 * coefficient).animate({
			opacity : 0
		}, 1 * coefficient);
		$(".section2DivMouse").delay(1 * coefficient).animate({
			opacity : 0.8
		}, 1 * coefficient, callBack);
	},
	bindClickEvent : function(){
		$(".section2Div2").click(function(){
			$(this).find("img").attr('src', 'images/page2/developerSelected.png');
			$(".section2Div2Tip").show();
			$(".section2Div3Tip").hide();
			$(".section2Div3").find("img").attr('src', 'images/page2/manager.png');
			page1Handler.showDeveloper(true);
			
		});
		$(".section2Div3").click(function(){
			$(this).find("img").attr('src', 'images/page2/managerSelected.png');
			$(".section2Div3Tip").show();
			$(".section2Div2Tip").hide();
			$(".section2Div2").find("img").attr('src', 'images/page2/developer.png');
			page1Handler.showManager(true);
		});
	}
}

page2Handler = {
	//圆点点击
	beginAction : function() {
		$("#Layer2Con").delay(2 * coefficient);
		this.mouseClickEvent(page2Handler.changeBackToType);
	},
	//背景图片替换
	changeBackToType : function() {
		$("#LayerType").show();
		page2Handler.mouseMoveAndClick();
	},
	//移动鼠标再次点击
	mouseMoveAndClick : function() {
		$("#LayerMouse").delay(1 * coefficient).animate({
			left: '17%', top: '52%'
		}, 2 * coefficient);
		this.mouseClickEvent(page2Handler.changeBackToInput);
	},
	//隐藏按钮，替换背景图片，输出文字
	changeBackToInput : function() {
		$("#LayerType").hide();
		$("#LayerMouse").hide();
		$("#LayerInput").show();
		$("#LayerInputDetail").show();
		(function(){
			$('<div></div>').addClass('element').appendTo("#LayerInputDetail").typed({
	            strings: ["研究发现，只要喝一瓶300毫升的啤酒，你就能吊起蚊子的胃口。"],
	            typeSpeed: 0.2 * coefficient,
	            startDelay: 3 * coefficient,
	            backDelay: 3 * coefficient,
	            loop: false,
	            contentType: 'html',
	            loopCount: true,
	            showCursor: false,
	            preStringTyped: function() {
	            },
	            callback: function(){
	            	page2Handler.moveMouseAndFinish();
	            },
	        });
		})();
	},
	//鼠标点击完成
	moveMouseAndFinish : function() {
		$("#LayerMouse").css({ "left": "88%", "top": "61%",opacity : 0.8 }); 
		$("#LayerMouse").show();
		this.mouseClickEvent(page2Handler.intoFolder);
	},
	//编辑页消失
	intoFolder : function(){
		$("#LayerInputDetail").hide().find("div").remove();
		//编辑页消失
		$("#LayerInput").animate({
			left:'91%',top:'4%',
		    opacity:0,
		    height:'0%',width:'0%'},5 * coefficient);
		$("#LayerKaiGuan").show();
		$("#LayerKaiGuan").delay(3 * coefficient).animate({width:'10%',height:'5.5%',opacity : 0}, 3 * coefficient, page2Handler.openFolder);
	},
	//开关效果，开关点击
	openFolder : function(){
		$("#LayerKaiGuan").find("img").delay(2 * coefficient).attr('src', 'images/page3/guan2.png');
		$("#LayerKaiGuan").animate({width:'7.8%',height:'4.2%',opacity : 1}, 3 * coefficient);
		//移动鼠标
		$("#LayerMouse").delay(3 * coefficient).animate({
			left:'88%',top:'4.6%',opacity : 0.8
		}, 2 * coefficient);
		page2Handler.mouseClickEvent(page2Handler.openPieceBox);
	},
	//弹出碎片盒子
	openPieceBox : function(){
		//隐藏鼠标，改变文件夹为打开，显示碎片盒子
		$("#LayerMouse").hide();
		$("#LayerKaiGuan").find("img").attr('src', 'images/page3/kai.png');
		$("#LayerSummary").show();
		$("#LayerWordPiece").show();
		//移动鼠标
		$("#LayerMouse").delay(2 * coefficient).show().animate({
			left:'25%',top:'18%',
				opacity : 0.8
		}, 2 * coefficient);
		page2Handler.mouseClickEvent(page2Handler.showPieceDetail);
	},
	//区域放大，弹出尾页
	showPieceDetail : function(){
		$("#LayerKaiGuan").hide();
		$("#LayerSummary").hide();
		$("#LayerDetail").show();
		$("#LayerWordPiece").delay(1 * coefficient).animate({
			width:'100%',height:'14.8%',opacity : 0
		}, 4 * coefficient,page2Handler.callBack10);
		$("#LayerWordPieceLong").delay(1 * coefficient).animate({
			width:'120%',height:'17.5%',opacity : 0.7
		}, 3 * coefficient,page2Handler.restoreWordPiece);
	},
	restoreWordPiece : function(){
		$("#LayerMouse").animate({
			opacity : 0
		}, 3 * coefficient);
		$("#LayerWordPieceLong").animate({
			width:'100%',height:'14.6%',opacity : 1
		}, 3 * coefficient);
	},
	mouseClickEvent : function(callBack){
		$("#LayerMouse").delay(3 * coefficient).animate({
			opacity : 0
		}, 1 * coefficient);
		$("#LayerMouse").delay(1 * coefficient).animate({
			opacity : 0.8
		}, 1 * coefficient, callBack);
	},
	restart : function(){
		//终止现在的动画
		$(".section3 div").stop(true);
		//隐藏详情页
		$(".LayerContent").hide();
		$(".element").hide();
		//设置长文字盒子的透明度为0
		$("#LayerWordPieceLong").css({opacity:0});
		//设置鼠标的初始位置
		$("#LayerMouse").css({opacity:1}).show();
		$("#LayerMouse").animate({left: '83%',top: '90%'}, 3 * coefficient);
		//输入框恢复位置和大小和透明度
		$("#LayerInput").css({width:'100%',height:'100%',left: '0%',top: '0%',opacity:1}).hide();
		$('#LayerInputDetail').hide();
		$("#LayerKaiGuan").hide().find("img").attr('src', 'images/page3/guan1.png');
		//短文字盒子恢复大小和透明度
		$("#LayerWordPiece").css({width:'42.2%',height:'12.3%',opacity:1}).hide();
	}
};