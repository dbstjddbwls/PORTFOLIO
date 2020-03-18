$(function () {
    $('.topNav').mouseenter(function () {
        $('.subList').stop().slideDown("fast");
    });
    $('.topNav').mouseleave(function () {
        $('.subList').stop().slideUp("fast");
    });




    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > 40) {
            $('.topNav').stop().css({
                "top": 0
            });
            $('.topNav').stop().css({'background-color': "black"}); 
            
            $('.topNav').hover(function(){
               $('.topNav').stop().css({'background-color': "black"}); 
            });
        }
        if ($(window).scrollTop() < 40) {
            $('.topNav').stop().css({
                "top": '40px'
            });
            
            $('.topNav').stop().css({'background-color': "transparent"}); 
            
            $('.topNav').hover(function(){
               $('.topNav').stop().css({'background-color': "black"}); 
            },function(){
               $('.topNav').stop().css({'background-color': "transparent"});  
            })
        }
    });
});
