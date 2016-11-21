// HTML문서와 CSS문서가 브라우저에 모두 표시되었을 때 다음의 함수를 실행하겠습니다.
$(document).ready(function () {


    // 사이트가 시작하면 0.8초(1000=1초) 뒤에 배너 열기
    $('.banner').delay(800).slideDown(400);


    // 배너 닫기 버튼 누르면 배너 닫기
    $('.banner .close_btn img').on('click', function () {
        $('.banner').slideUp(400);
    });


    // 전체메뉴 열기 클릭 효과
    $('.all_btn').on('click', function () {
        $('.all_menu').slideDown(400); // 0.4초(1000=1초)동안 열리기!
    });


    // 전체메뉴 닫기 클릭 효과
    $('.all_menu .close_btn').on('click', function () {
        $('.all_menu').slideUp(400); // 0.4초(1000=1초)동안 닫히기!
    });


    // 슬라이드 효과 plugin 활용
    $('.notice .slider').bxSlider({
        pager: true, // 페이지 번호를 보일 것인지 설정 ----------------------------------------------------------------
        pagerSelector: '.notice .pager', // 페이지 번호가 들어갈 선택자 입력
        controls: false, // 이전/다음 버튼 표시 유무-------------------------------------------------------------------
        auto: true, // 자동 슬라이드 유무
        pause: 6000, // 자동 슬라이드 시간
        slideWidth: 180
    });


    // 슬라이드 효과 plugin 활용 (필요한 것만 활용하고 나머지는 지우고 사용 추천)
    // http://bxslider.com/options
    var slider2 = $('.slide .slider').bxSlider({
        mode: 'horizontal', // 슬라이드의 종류
        speed: 500, // 슬라이드가 움직이는 속도
        slideMargin: 0, // 각각의 슬라이드 사이의 간격
        startSlide: 0, // 시작 슬라이드 번호를 정할 수 있습니다
        randomStart: false, // 시작 슬라이드 번호를 랜덤하게 정할 수 있습니다.
        easing: null, // 'easing' 타입을 설정
        captions: false, // 이미지에 타이틀(캡션) 포함 여부
        responsive: true, // 반응형 슬라이드 유무
        preloadImages: 'visible', // 보이는 이미지만 로드할 것인지, 미리 전부 로드할 것인지 설정
        pager: false, // 페이지 번호를 보일 것인지 설정 ---------------------------------------------------------------
        pagerSelector: '', // 페이지 번호가 들어갈 선택자 입력
        controls: false, // 이전/다음 버튼 표시 유무--------------------------------------------------------------------
        prevText: '', // 이전 버튼의 텍스트
        nextText: '', // 다음 버튼의 텍스트
        prevSelector: '', // 이전 버튼이 들어갈 선택자 입력
        nextSelector: '', // 다음 버튼이 들어갈 선택자 입력
        autoControls: true, // 시작/정지 버튼 유무(!! auto 옵션이 true 일 때 적용 가능)--------------------------------
        startText: '', // 시작 버튼 텍스트
        stopText: '', // 정지 버튼 텍스트
        autoControlsCombine: false, // 시작과 정지 버튼 중 한가지만 보이고 눌렀을 때 토글 기능
        autoControlsSelector: '', // 시작/정지 버튼이 들어갈 선택자 입력
        auto: true, // 자동 슬라이드 유무
        pause: 6000, // 자동 슬라이드 시간
        autoStart: true, // 처음부터 시작할 것인지, 시작 버튼을 눌렀을 때 시작할 것인지, true = 처음부터 시작
        autoDirection: 'next', // 자동 슬라이드 방향
        autoHover: false, // 마우스 오버 이벤트 발생했을 때 자동 슬라이드 정지 여부
        autoDelay: 0, // 자동 슬라이드 전 대기시간 설정
        minSlides: 1, // 최소한으로 보여줄 슬라이드 갯수
        maxSlides: 1, // 최대한으로 보여줄 슬라이드 갯수
        moveSlides: 0, // 1개 이상의 슬라이드가 보일 때 한번에 움직일 슬라이드의 갯수
        slideWidth: 560, // 슬라이드의 가로 사이즈----------------------------------------------------------------------
        onSliderLoad: function(currentIndex){}, // 슬라이드가 준비되었을 때 실행
        onSlideBefore: function($slideElement, oldIndex, newIndex){}, // 슬라이드 전환 직전에 실행
        onSlideAfter: function($slideElement, oldIndex, newIndex){} // 슬라이드 전환 완료 후 실행
    });

    // 자동 슬라이드를 *시작하는 함수
    function playAuto() {
        $('.slide .play').hide();
        $('.slide .pause').show();
        slider2.startAuto();
    }

    // 자동 슬라이드를 *종료하는 함수
    function pauseAuto() {
        $('.slide .pause').hide();
        $('.slide .play').show();
        slider2.stopAuto();
    }

    $('.slide .prev').on('click', function () {
        slider2.goToPrevSlide();
        pauseAuto();
    });
    $('.slide .next').on('click', function () {
        slider2.goToNextSlide();
        pauseAuto();
    });
    $('.slide .pause').on('click', function () {
        pauseAuto();
    });
    $('.slide .play').on('click', function () {
        playAuto();
    });


    $('.background .slider').bxSlider({
        mode: 'fade',
        speed: 1200, // 슬라이드가 움직이는 속도
        pager: false, // 페이지 번호를 보일 것인지 설정 ---------------------------------------------------------------
        pagerSelector: '', // 페이지 번호가 들어갈 선택자 입력
        controls: false, // 이전/다음 버튼 표시 유무-------------------------------------------------------------------
        auto: true, // 자동 슬라이드 유무
        pause: 12000, // 자동 슬라이드 시간
        slideWidth: 1920
    });


    // 푸터 영역에 IBK 관계사이트(관계사) 클릭했을 때 이벤트
    $('.ibk_site .head').on('click', function () {
        if ( $(this).hasClass('on') ) {
            $(this).siblings('.body').hide();
            $(this).removeClass('on');
        } else {
            $('.ibk_site .body').hide();
            $('.ibk_site .head').removeClass('on');
            $(this).siblings('.body').show();
            $(this).addClass('on');
        }
    });


    /*
    IBK 버튼의 'head'를 'CLICK' 했을 때
        if ( 'head'에 'ON' 표시가 있습니까? ) {
            /// 표시가 있다면..
            클릭한 'head'의 'body'를 닫기
            클릭한 'head'에 'ON' 표시 제거
        } else {
            // 표시가 없다면..
            *모든 'body' 닫기
            *모든 'head'에 'ON' 표시 제거
            클릭한 'head'의 'body'를 열기
            클릭한 'head'에 'ON' 표시
        }
    */


    // IBK 관계사이트(관계사) 이외의 모든 요소를 클릭했을 때 이벤트
    $("*", document.body).on("click", function (e) {
        if (!$(e.target).parents().hasClass("ibk_site")) {
            $('.ibk_site .body').hide();
            $('.ibk_site .head').removeClass('on');
        }
    });

});