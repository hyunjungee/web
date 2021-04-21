$(function(){
	
		//----------------------팝업창
	$("#header h1").click(function(){
		$("#popUp").show(); 
	});
	$(".pop02 a").click(function(){ //팝업04의 a를 클릭하면
		$("#popUp").hide(); //팝업을 숨겨줘
	});
	
		//--------------------gnb
	$(".menu").mouseover(function(){	
		$(".subM").stop(true).slideDown('fast');
		$(".black2").stop(true).slideDown('fast');
	});
	$(".menu").mouseout(function(){	
		$(".subM").stop(true).slideUp('fast');
		$(".black2").stop(true).slideUp('fast');
	});
	
		//---------------------검색
	$(".sns2").mouseover(function(){	
		$(".search").show();
	});
	$(".sns3").click(function(){	
		$(".search").hide(); 
	});

		//------------------------view 더보기 늘리기
	$("span").mouseover(function(){			
		$(this).stop().animate({"width":"180px"},500);	
	});	
	$("span").mouseout(function(){	
		$(this).stop().animate({"width":"50px"},500);	
	});


		//-----------------------------------scroll버튼 누르면 화면 내리기
	$(".scroll").click(function(){
		$( 'html, body' ).stop().animate( { scrollTop : '850' } ) ;
	});
	
	
	
	
	
	
	
		//--------------------------------한화면 단위로 스크롤  잘안됨---------------------------------------
	 $(window).resize(function(){ //현재화면의 크기가 뭔지 모르지만 풀스크린으로 만들기 위해 쓰는것
		win_h = $(window).height(); 
		
		$('.con').css({
			height:win_h,
			lineHeight:win_h+'px'// 글자 수직 가운데 정렬
		});
	}).resize();//실행되자마자 리사이즈함수 호출 곧바로 보여주는 하면이 페이지에 적용이됨 
	// $(window).trigger("resize");	
	
	$(window).on("scroll",function(){ //윈도우바에 스크롤바가 움직이게되면 //변수 ht에 현재 브라우저의 넓이값 저장
		var ht =$(window).height(); // 변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop(); //scrollTop() - 현재 스크롤된 거리 값
		var i = $(this).index();
		
			for(var i=0; i<5;i++){ //인덱스번호 i가 0부터 4까지
			if(scroll>=ht*i && scroll<= ht*(i+1)) { //시작과 끝는위치
				//$(".con").removeClass(); //모든 li의 어떠한 클래스가 있던지 다 지우겠댜.
				//$(".con").eq(i).addClass("on");
			};
		}
		
	//section위에서 마우스 휠을 움직이면
	$("con").on("mousewheel",function(event, delta) {
		var i = $(this).index(); // 마우스 휠을 움직이기전 현재 보이는 화면의 인덱스 번호

		// 처음화면과 마지막 화면일때는 마우스 휠 기능을 무시 
		var aa = $(this).index();
		var lastIndex = $('.con').last().index(); 
		if( aa==0 || aa==lastIndex) { //맨첫화면 맨마지막화면이면 이것이 무시되게끔 한다 그래야 오류가안남
			return;
		}
			//마우스 휠을 올렸을 때
			if (delta > 0) {   //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
				var prev = $(this).prev().offset().top;   //문서 전체를 prev에 저장된 위치로이동
				$("html,body").stop().animate({ "scrollTop":prev},1400,"easeOutBounce");
			}
			//마우스 휠을 내렸을 때
			else if(delta<0){   //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top 위치 저장
				var next = $(this).next().offset().top;   //문서 전체를 next에 저정된 위치로 이동
				$("html,body").stop().animate({"scrollTop":next},1400,"easeOutBounce");
			}
		}); //$("section").on("mousewheel", function(event, delta){
	}); //$(window).on("scroll", function(){

/**/

});	//$(funtion(){끝


	
/*	$('.con').mousewheel(function(e,delta){ //올리고내리는것을 e라는 값에 들어가고 delta 마우스휠 위치값 
		var aa = $(this).index(); 
		var lastIndex = $('.con').last().index(); 
		
		if(aa==0 || aa==lastIndex) { //맨처음페이지거나  맨마지막페이지면
			return; //함수끝내라 휠적용하지 말라 리턴을안쓰면 오류가 생긴다.
		}
		if(delta > 0){ //양수값을가진 마우스휠을 올리면
			m =$(this).prev().offset().top;
			$('html, body').stop().animate({scrollTop:m});
		} else {
			m = $(this).next().offset().top;
			$('html, body').stop().animate({scrollTop:m});
		}
	});*/

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* 
 		var elm = ".con";
            $(elm).each(function (index) {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
					// IE
                    if (!event) event = window.event;
					// 휠에 대한 정보 얻기 파이어폭스외 IE/Chrome/Opera =wheelDelta
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
						//평균 50~120사이로 요소의 인식높이에 따라 다름 (한화면 height100%기준)일때는 120
                        if (window.opera) delta = -delta;
						//휠에 대한 정보 얻기 Mozilla FF = detail
                    }  else if (event.detail) delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            try{
                                moveTop = $(elmSelecter).next().offset().top;
                            }catch(e){}
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            try{
                                moveTop = $(elmSelecter).prev().offset().top;
                            }catch(e){}
                        }
                    }
                     
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 800, complete: function () {
                        }
                    });
                });
           



 */

	












