$(document).ready(function(){
    $(window).scrollTop(0);


   $(window).scroll(function(){
       $("header").css("position","fixed");
   })


    $(".gnb li").click(function(){

        var ht = $(window).height();
        $("section").height(ht);

        var i = $(this).index();
        var navPosition = i*ht;

        $(".gnb li").removeClass();
        $(this).addClass("on");


       
        $("html,body").animate({"scrollTop":navPosition -50},500);
    })

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