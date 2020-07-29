$(document).ready(function(){
    
    $(".owl-carousel").mouseenter(function(){
        
        $(".owl-nav button").css('opacity','1');
    })
    $(".owl-carousel").mouseleave(function(){
        $(".owl-nav button").css('opacity','0');
    })


    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true
    });
   
 






});