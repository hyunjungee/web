$(function(){
	
	//----------------------팝업창
	$("#header h1").click(function(){
		$("#pop").show(); 
	});
	$(".pop01 a").click(function(){ //팝업04의 a를 클릭하면
		$("#pop").hide(); //팝업을 숨겨줘
	});


	//-------------------------main 슬라이드 버튼
		//li펼쳐서 한 줄로 배치
		$(".slide li").each(function(index){ //앰솔루트의 의해 겹쳐져있는걸 쭉 펼침
			$(this).css("left",index*1200);
		});
		$(".slide li:last").css("left", -1200);//마지막 li를 맨 앞으로 배치하여 오른쪽으로 이미지가 움직일때 공백이 되는 것을 방지한다. 
		$(".rrow .LArrow").click(function(){ 
			$(".slide li").each(function(){
				var left=parseInt($(this).css("left"));
				var movePos =left-1200;
				$(this).animate({left:movePos},1000,function(){
					if(movePos<-1200){	
						$(this).css("left",1200);	
					}
						//0:-1200. 1:0, 2:1200, 3:2400, 4:3600, 5:4800
				});
			});
		});

		$(".rrow .RArrow").click(function(){ 
			$(".slide li").each(function(){
				var left=parseInt($(this).css("left"));
				var movePos =left+1200;
				$(this).animate({left:movePos},1000,function(){
					if(movePos>1200){	
						$(this).css("left",-1200);	
					}
				});
			});
		}); 
		


	//-----------------------content04 슬라이드02
 		$(".slide02 li").each(function(index){ //나열
				$(this).css("left",index*1001)
			});  //0:1001 1:2002 2:3003 
		
	 		setInterval(function(){ 
				$(".slide02 li").each(function(){  
					var left=parseInt($(this).css('left'));	//자신의 left값 얻어오기
					var movePos=left-1001; 
					
					$(this).animate({left:movePos},2000, function(){	//-1001 위치로 2초
						var left=parseInt($(this).css('left'));
						if(left<=-1001){
						$(this).css({"left":2002});
						}
					}); 
				});
			},3000);
			
			
			
			
			
});//$(function(){끝