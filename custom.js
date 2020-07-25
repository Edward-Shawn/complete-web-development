$(document).ready(function(){
    
    var slide_btn = $(".slide_btn").find(".slide");

    $(".slide_wrap").mouseenter(function(){
        $(slide_btn).stop(true).css({'display': 'block', 'opacity': 0}).animate({'opacity': 1}, 300);
    })

    $(".slide_wrap").mouseleave(function(){
        $(slide_btn).stop(true).animate({'opacity': 0}, 300, function(){
            $(this).css({'display': 'none'})
        });
    });
});