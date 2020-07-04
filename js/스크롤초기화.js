$(document).ready(function(){
    $(window).scrollTop(0);
    //스크롤 이벤트에 animate 속성이 적용되면 반드시 스크롤 초기화 값을 줘야함

    $(".gnb li").click(function(){
        // li에 on 빼고 / 넣기 제어
       $(".gnb li").removeClass("on");
       $(this).addClass("on");



        // section의 높이 값을 윈도우의 값으로 지정
        var ht = $(window).height();
        $("section").height(ht);



        // 스크롤 이동 이벤트 
        // i 의 변수에 .gnb li의 index값을 설정해줌
        // navPostion에 ( index 값*윈도우 )의 높이 값을 계산하여
        //스크롤 이벤트 실행
        var i=$(this).index();
        var navPostion = i*ht;
        $("html,body").animate({"scrollTop":navPostion -70},500);

    });

    $("section").on("mousewheel", function(event,delta){
        var ht = $(window).height();
        if( delta > 0 ){
            var prev = $(this).prev().offset().top;
            $("html,body").stop().animate({"scrollTop":prev},ht)
        }else if( delta < 0){
            var next = $(this).next().offset().top;
            $("html,body").stop().animate({"scrollTop":next},ht)
        }
    })

}) 