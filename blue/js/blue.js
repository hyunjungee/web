 $(function(){



//전체메뉴 나오게 하기
	$(".main li:nth-of-type(1)>a").mouseover(function(){	
		$("#subMenu").stop(true).slideDown('fast');
	});
	$("#subMenu").mouseleave(function(){	
		$(this).stop(true).slideUp('fast');
		// //$(this).find('.submenu').addClass('hidden');
	});







//메인 슬라이드
 $('.slider > .pages > div').click(function() {
    var $this = $(this);
    var $slider = $this.closest('.slider');
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var index = $this.index();
    
    $slider.find(' > .pic > .active').removeClass('active');
    $slider.find(' > .pic > div').eq(index).addClass('active');
});

$('.slider > .side-btns > div').click(function() {
    var $this = $(this);
    var index = $this.index();
    var $slider = $this.closest('.slider');
    
    var $current = $slider.find('.pages > div.active');
    var $post;
    
    if ( index == 0 ) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    
    if ( $post.length == 0 ) {
        if ( index == 0 ) {
            $post = $slider.find('.pages > div:last-child');
        }
        else {
            $post = $slider.find('.pages > div:first-child');
        }
    }
    
    $post.click();
});

function Slider1__moveNext() {
    var $slider = $('.slider');
    var $nextBtn = $slider.find('.side-btns > div:last-child');
    $nextBtn.click();
}
setInterval(Slider1__moveNext, 3000); 






//탭메뉴
$(".gg h3").on('click',function(){ //h3를누르면
	$('h3').removeClass('open'); //h3오픈클래스제거
	$('.gg>ul').hide(); //ul 가리기
	$(this).addClass('open'); //오픈클래스 적용				
	$(this).next().show(); //밑에있는 ul태그를 보여주겠다
});






//스크롤 탑으로 이동
	$("#topScroll p").click(function(){
		$('html, body').animate({scrollTop:0},800);
	});




//스크롤 내리면 탑 나타나게 하기 //안됨
		$(function(){
			$(window).scroll(function() {
				var aa = $(this).scrollTop();    // 변수 aa에 스크롤한 만큼의 거리를 저장 
				
				if ($(this).scrollTop() > 500) {
					/*$("p").addClass("test"); 
					$("div").prev().addClass("test");
					$("p:nth-child(2)").addClass("test"); 
					$("p").last().addClass("test");*/ 
					$("#topScroll p").show(); 
				} else {
					$("#topScroll p").hide();
				}
			});
		});

 }); // $(function(){