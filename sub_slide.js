$(document).ready(function(){
    
    var slideGroup = $(".slide_w");
    var slides = $(".slide_List_box");
    var nav = $(".slide_List_txt").find("div");

    var currentIndex = 0;
    
    for(var i = 0; i < slides.length; i++ ){
        console.log(i);
        slides.eq(i).css({left: 110 * i + "%"});
       
    }
    

    function goToSlide(index/*파라미터*/){
        slideGroup.animate({left: -10 * index + "%"}, 400);
        currentIndex = index;
    }

    
    nav.on("click", "a", function(e){
        e.preventDefault();
        if ($(this).hasClass("prev")){

            if(currentIndex === 0){
                return false;
            }else{
                goToSlide(currentIndex - 4);
            }
        }else{
            if(currentIndex > 10){
                return false;
            }else{
                goToSlide(currentIndex + 4);
            }

        }
    });




    var slideGroup2 = $(".slide_w2");
    var slides2 = $(".slide_List_box2");
    var nav2 = $(".slide_List_txt2").find("div");
    
    for(var i = 0; i < slides2.length; i++ ){
        console.log(i);
        slides2.eq(i).css({left: 110 * i + "%"});
       
    }
    

    function goToSlide2(index/*파라미터*/){
        slideGroup2.animate({left: -10 * index + "%"}, 400);
        currentIndex = index;
    }

    
    nav2.on("click", "a", function(e){
        e.preventDefault();
        if ($(this).hasClass("prev")){

            if(currentIndex === 0){
                return false;
            }else{
                goToSlide2(currentIndex - 4);
            }
        }else{
            if(currentIndex > 10){
                return false;
            }else{
                goToSlide2(currentIndex + 4);
            }

        }
    });

















});