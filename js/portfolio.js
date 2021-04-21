$(function(){
	
	//전구 메뉴 나오기 nav바
	$("nav li").mouseover(function(){
		$(this).children('p').stop(true).slideDown('fast');
		$("nav span").stop(true).delay(0).animate({
			"width":"50px", "backgroundColor":"#b79b83"},500,function() {
		});
	});
	$("nav li").mouseout(function(){
		$(this).children('p').stop(true).slideUp('fast');
		$("nav span").stop(true).delay(0).animate({
			"width":"100px","backgroundColor":"#000"},2000,function() {
		});
	});
	
	
	//메뉴 슬라이드 나오게하기
	$('header p a').click(function(){ // 버튼을 누르면 
		$('#menuBar').stop(true).animate({left:'20px'},300, 'easeOutBack');	
		return false; //스크롤을 내렸을 때 메뉴바를 클릭하면 위로 올라가는 것을 방지한다. 
	});	
	$('#menuBar p a').click(function(){
		$("#menuBar").stop(true).animate({left:'-200px'},300, 'easeInBack');	
		return false;
	});	

	
	//scroll //전구모양누르면
	$("nav ul li:nth-of-type(2)").click(function(){
		$('html').animate({scrollTop : ($('#section02').offset().top)}, 600);
		//$( 'html, body' ).stop().animate( { scrollTop : '720' } ) ;
	});
	$("nav ul li:nth-of-type(3)").click(function(){
		$('html').animate({scrollTop : ($('#section03').offset().top)}, 600);
	});
	$("nav ul li:nth-of-type(4)").click(function(){ 
		$('html').animate({scrollTop : ($('#section07').offset().top)}, 800);
	});
	
	
	//사진 클릭시 동영상나오게 하기
	 var vid = null;  /**/
	 var vid = $(this).find("video").get(0);		
	$(".left>.pic").click(function(){
		$(".left>.cam").fadeIn('slow');
		
		vid.play();
	});
	$(".left>.cam p").click(function(){
		$(".left>.cam").fadeOut('slow');
	});

	






















	
	//scroll //메뉴바누르면  페이지로 넘어가게하기 바로바로화면이 나오게 하는방법?
/* $("#menuBar ul li:nth-of-type(2)").click(function(){//main
		$( 'html, body' ).stop().animate({ scrollTop : '0' }); 
	});
	$("#menuBar ul li:nth-of-type(3)").click(function(){//about me
		$( 'html, body' ).stop().animate( { scrollTop : '720' }); 
	});
	$("#menuBar ul li:nth-of-type(4)").click(function(){//portfolio 1
		$( 'html, body' ).stop().animate( { scrollTop : '1520' }); 
	});
	$("#menuBar ul li:nth-of-type(5)").click(function(){//portfolio 2
		$( 'html, body' ).stop().animate( { scrollTop : '2320' }); 
	});
	$("#menuBar ul li:nth-of-type(6)").click(function(){//portfolio 3
		$( 'html, body' ).stop().animate( { scrollTop : '3120' }); 
	});
	$("#menuBar ul li:nth-of-type(7)").click(function(){//contant 나중에 설정하기
		$( 'html, body' ).stop().animate( { scrollTop : '3120' }); 
	});
	 */

	var ht = $(window).height(); //변수 ht에 브라우저의 높이값을 저장 ,현재보이는브라우저 크기를 모르지만 현재높이를 가져와서 변수에 넣음
	$("section").height(ht); //브라우저의 높이값을 section의 높이값으로 지정해서 화면 꽉차겠끔 만듬.
	
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});// 브라우저 크기가 줄고 늘어나도 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	
	$("#menuBar li").on("click",function(e){ // 메뉴 버튼 클릭시
		e.preventDefault();
		// 각각의 | 안에는 a 요소가 들어있기 때문에 클릭시
		//링크가 동작해 페이지가 새로고침이 되면 깜빡임.
		// 따라서 e.preventDefault(); 를 이용해 #menu li 안에 있는
		//a 요소의 디폴트 기능인 링크 기능을 막아준다.
		var ht=	$(window).height(); // 변수 ht에 브라우저의 높이값 저장
		var i = $(this).index(); //변수 i에 현재 클릭한 그의 순서값을 저장
		// index() - 특정 태그가 몇번째 해당하는 요소인지 알아내는 방법, 0번부터 시작
		
		var nowTop = i*ht; // 브라우저의 높이값박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		
		//해당 스크롤 위치값으로 문서를 이동
	$("html,body").stop().animate({"scrollTop":nowTop},1400,"easeOutBounce");
		//1.4초동안 움직임을 튕튕겨라
	});
	
	// 화면이 스크롤될 때마다 현재 영역에 해당하는 메뉴 활성화하기- .on클래스 추가 
	$(window).on("scroll",function(){ //윈도우바에 스크롤바가 움직이게되면 
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht =$(window).height();
		// 변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		//scrollTop() - 현재 스크롤된 거리 값
			for(var i=0; i<6;i++){ //인덱스번호 i가 0부터 4까지
			if(scroll>=ht*i && scroll<= ht*(i+1)) { //시작과 끝는위치
				$("#menuBar li").removeClass();
				$("#menuBar li").eq(i).addClass("on");
			};
		}
		
	//section위에서 마우스 휠을 움직이면
	$("section").on("mousewheel",function(event, delta) {
		var i = $(this).index(); // 마우스 휠을 움직이기전 현재 보이는 화면의 인덱스 번호

		// 처음화면과 마지막 화면일때는 마우스 휠 기능을 무시 
		var aa = $(this).index();
		var lastIndex = $('section').last().index(); 
		if(aa==0 || aa==lastIndex) { //맨첫화면 맨마지막화면이면 이것이 무시되게끔 한다 그래야 오류가안남
			return;
		}		
		//마우스 휠을 올렸을 때
		if (delta > 0) {
			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
			var prev = $(this).prev().offset().top;
			//문서 전체를 prev에 저장된 위치로이동
		$("html,body").stop().animate({ "scrollTop":prev},1400,"easeOutBounce");
		
			//마우스 휠을 내렸을 때
			}else if(delta<0){
				//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top 위치 저장
				var next = $(this).next().offset().top;
				//문서 전체를 next에 저정된 위치로 이동
				$("html,body").stop().animate({"scrollTop":next},500);  //,"easeOutBounce"
			}
		}); //$("section").on("mousewheel", function(event, delta){
	}); //$(window).on("scroll", function(){
	
	
}); //$(function(){끝