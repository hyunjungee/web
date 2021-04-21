$(function(){
	
//왼쪽 bar2메뉴나오게 하기
	var flag=1;
	$('button').click(function(){
		if (flag == 1){
			$('.bar2').stop(true).show().animate({left:'100px'}, 300, 'easeOutBack');
			$("button").text('x');
			flag=0;
		} else{
			$('.bar2').stop(true).animate({left:'-280px'}, 300, 'easeInBack');
			$("button").text('≡');	//이미지로 바꿀때 : $('button img').attr('src','images/btn_open.png');
			flag=1;
		}
	});



//subM 아코디언메뉴		//+로 다시 안돌아옴 

/* 	
var plus=1;
$(".menu>li").on('click',function(){	
	$(this).parent().siblings().children('.subM').slideUp();
	$(this).toggleClass();
	$(this).next().slideToggle();
	 	
	if (plus == 1 ){
		$(this).find('span').text('-');
		plus=0;
	}else{
		$(this).find('span').text('+');
		plus=1;
	} /
});  */

/* //subM 아코디언메뉴      //+로 다시 안돌아옴 
var plus=1; // -로 만들기 위해
$(".menu>li").on('click',function(){   
   $(this).parent().siblings().children('.subM').slideUp();
   $(this).toggleClass();
   $(this).next().slideToggle();
   $('.menu li span').text('+');
      $(this).find('span').text('-');
}); 
 */

$(".menu>li").on('click',function(){   
   $(this).parent().siblings().children('.subM').slideUp();
   $(this).next().slideToggle();
   
   if($(this).hasClass("open")){  //open클래스를 던져주는것,, 클래스가 없어도 가능...  
      $(this).removeClass("open");          
      $('.menu li span').text('+');
   }else{
      $('.menu li span').text('+');
      $(".menu>li").removeClass("open");       
      $(this).addClass("open");  
      $(this).find('span').text('-');         
   }
})









//자동으로 슬라이드 이동
	$("#slider>img").each(function(aa){ //aa:img인덱스번호(0~3) 담을변수
		$(this).css("left",400*aa);
	});
	
 	setInterval(function(){
		$("#slider>img").each(function(){
			var nowLeft =parseInt($(this).css("left")); //현재 이미지의 왼쪽위치값을 읽어온다.
			var moveLeft = nowLeft -400;
			$(this).animate({left:moveLeft},1000, function(){ //레프트를 무스레프트값을준다 1초애한번씩움직이게끔 그리고 콜백함수로 물어본다 if문으로
				if(moveLeft<=-800){	//-800만큼이동했으면
					$(this).css("left",800);	//800으로 다시 돌아가라
				}
			});
		});
	},3000);//setInterval 끝







//페이드로 이동
	var cnt=0;
	setInterval(function(){//setInterval(실행문, 시간)
		//3초가지나면 어떠한 그림이 됫던 다 지울꺼다
		$("#fade>img").fadeOut(); //다 지우고  한장씩보여주도록한다
		cnt = cnt % 4; //cnt의 값을 3으로 나눈 나머지 값을  다시 cnt에 넣어라. 현재cnt가 0이니까 0나누기3은 0이다
		$("#fade>img").eq(cnt).fadeIn();
		cnt++; //나중을위해 cnt값을 증가시킨다.
	},3000);//setInterval 끝 




//사진 가격표 나오게 하기 각각 나오게 하기..
	
	$('#photo .all img').mouseover(function(){
		$(this).next().stop(true).animate({top:'290px'},500); 
	});
	$('#photo .all img').mouseout(function(){
		$(this).next().stop(true).animate({top:"500px"},500);
	});

	




//스크롤 탑.바텀 이동
	$(".top>a").click(function(){
		$('html, body').animate({scrollTop:0},800);
		
	});
	$(".bottom>a").click(function() {
        $('html').animate({scrollTop : ($('#footer').offset().top)}, 600);
    });
		



 

});