$(document).ready(function(){

    var mySlide = function(){
        //variation hoisting   - 변수도 2가지로 만들것  가져오는 변수 1 / 행하는 변수 1 

        //1. document selectors
        var $conainer = $(".slideshow");
        var $slideGroup = $conainer.find(".slideshow-slides");
        var $slides = $slideGroup.find(".slide");
        var $nav = $conainer.find(".slideshow-nav");
        var $indicator = $conainer.find(".slideshow-indicator");



        //2. normal variation
        var currentIndex = 0;
        var timer;

        //--------------------------------------------------------------------------

        //document contrll
        //1. setting image's left value
        for(var i = 0; i < $slides.length; i++){
            $slides.eq(i).css({ left: 100 * i + "%" }); 
            // left 100의 디폴트는 px 이지만 뒤에 %를 붙여서 단위를 바꿔줌


        }


        //define functions
        //1. main slide funtion
        function goToSlide(index){
            $slideGroup.animate({left: -100 * index + "%"}, 400);
            currentIndex = index;
            update()
        }

        //2. auto slide start function
        function startTimer(){
            timer = setInterval(function(){
                var nextIndex = (currentIndex + 1 ) % $slides.length;   // 슬라이드 제작시 많이 쓰는 공식
                goToSlide(nextIndex);
                console.log(nextIndex);
            }, 2000)
        }

        //3. auto slide stop funtion
        function stopTimer(){
            clearInterval(timer);
        }

        //4. stop slide when slide is in first or last index
        function update(){
            if(currentIndex === 0){
                $nav.find(".prev").hide();
            }else{
                $nav.find(".prev").show();
            }



            if(currentIndex === $slides.length  - 1 ){
                $nav.find(".next").hide();
            }else{
                $nav.find(".next").show();
            }
        }



        //document selector controll
        //.1 stop or start slide when mouse hover or out
        $conainer.on("mouseenter", function(){
            stopTimer();
        });

        $conainer.on("mouseleave", function(){
            startTimer();
        });

        //2. navigation click event
        $nav.on("click", "a", function(e){
            e.preventDefault();
            if ($(this).hasClass("prev")){
                goToSlide(currentIndex - 1);
            }else{
                goToSlide(currentIndex + 1);
            }
        });



        //active functions
        goToSlide(currentIndex);
        startTimer();

    }

    mySlide();

});
