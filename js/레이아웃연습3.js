$(document).ready(function(){
 

    let hedTop = $("header").offset().top;

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

       if(scroll>=hedTop){
           $("header").addClass("scroll");
       }else{
           $("header").removeClass("scroll");
       }
    });

    $(".gnb li ").click(function(){
        let valuePos = $(this).find("a").attr("value");
        let offsetTop = $("#"+valuePos).offset().top;
        
       $("html, body").animate({scrollTop:offsetTop -70},500);
    });
    




    
});