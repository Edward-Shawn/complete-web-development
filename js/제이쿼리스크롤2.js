$(document).ready(function(){

    $("html,body").scrollTop(0);

    $(window).scroll(function(){
        $("header").css("position","fixed");
    })
    $(".gnb li").click(function(){
            $(".gnb li").removeClass();
            $(this).addClass("on");
            var i = $(this).index();
            var navPosition = i*ht

            $("html,body").animate({scrollTop:navPosition-50},500)
    })
    var ht = $(window).height();
    $("section").height(ht);

    




})