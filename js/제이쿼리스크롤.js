$(document).ready(function(){
    
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
      });

    var ht = $(window).height();
    

    $(".gnb li").click(function(){

       $(".gnb li").removeClass("on");
       $(this).addClass("on");

        var i = $(this).index();
        var navPosition = i * ht;


        $("html,body").animate({scrollTop:navPosition -80},500);

    });


})