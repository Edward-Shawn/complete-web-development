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


    var mySlide = function(){
        //variation hoisting   - 변수도 2가지로 만들것  가져오는 변수 1 / 행하는 변수 1 
  
        //1. document selectors  ( 앞에 $ 붙이는 패턴 문서내에 있는걸 불러왔다는 뜻)
        var $conainer = $(".s-wrap");
        var $slideGroup = $conainer.find(".main-img");
        var $slides = $slideGroup.find(".mySlides");
        var $nav = $conainer.find(".slide_btn");
        var $indicator = $(".slideshow-indicator");
        
        
        
        //2. normal variation
        var currentIndex = 0;
        var timer; // 객체타입
        var indicatorHTML = ''; // 원시타입
  
        //--------------------------------------------------------------------------
  
          //document contrll
          //1. setting image's left value
          //2. insert the indicator's "a" tags equal to picture count
          for(var i = 0; i < $slides.length; i++){
            $slides.eq(i).css({ left: 100 * i + "%" }); 
            indicatorHTML += '<a href="#"></a>';
            // left 100의 디폴트는 px 이지만 뒤에 %를 붙여서 단위를 바꿔줌
        }
  
        $indicator.html(indicatorHTML);
  
        //define functions
        //1. main slide funtion
        function goToSlide(index/*파라미터*/){
            $slideGroup.animate({left: -100 * index + "%"}, 400);
            currentIndex = index;
            //update();            
            indicatorBtn();  
        }
  
        //2. auto slide start function
        function startTimer(){
            timer = setInterval(function(){
                var nextIndex = (currentIndex + 1 ) % $slides.length;   // 슬라이드 제작시 많이 쓰는 공식
                goToSlide(nextIndex);
                console.log(nextIndex);
            }, 3000)
        }
  
        //3. auto slide stop funtion
        function stopTimer(){
            clearInterval(timer);
        }
  
        //4. stop slide when slide is in first or last index
  
        /*function update(){
            if(currentIndex === 0){         // 첫번째 선언
                $nav.find(".prev").hide();
            }else{
                $nav.find(".prev").show();
            }
  
  
            
            if(currentIndex === $slides.length  - 1 ){   // 마지막 선언
                $nav.find(".next").hide();
            }else{
                $nav.find(".next").show();
            }
        }*/
  
        function indicatorBtn (){
            $indicator.find("a").removeClass("active");
            $indicator.find("a").eq(currentIndex).addClass
            ("active");
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
  
                if(currentIndex === 0){
                    return false;
                }else{
                    goToSlide(currentIndex - 1);
                }
            }else{
  
                if(currentIndex === $slides.length -1 ){
                    return false;
                }else{
                    goToSlide(currentIndex + 1);
                }
  
            }
        });
  
  
        //3. slide moving to clicked indicator's index
        $indicator.on("click", "a", function (e){
            e.preventDefault();
            var index = $(this).index();
            goToSlide(index);
        });
  
  
        //active functions
        goToSlide(currentIndex);
        startTimer();
  
    }
    
    mySlide();  //선언






});