$(function(){
    
    var count = 0;
        
        setInterval(function(){
            count++
            if(count > 3){
                count=0;
            }
            $('.imgList>li').fadeOut();
            $('.imgList>li').eq(count).fadeIn();
        },3000);
            
            $('.sideBar').click(function(){
                $('.sideMenu').slideToggle();
            });
    
    $('.wList>li').mouseenter(function(){
            $(this).find('.wName').stop().fadeOut();
            $(this).find('.bgcolor').stop().fadeIn();
            $(this).find('.wTxtbox').stop().fadeIn();
            $(this).find('img').css({"transfrom":"scale(1.03)"})
        });
    
        $('.wList>li').mouseleave(function(){
            $(this).find('.wName').stop().fadeIn();
            $(this).find('.bgcolor').stop().fadeOut();
            $(this).find('.wTxtbox').stop().fadeOut();
        });
    
    $('.portList li').mouseenter(function(){
            $(this).find('.portB').stop().fadeIn();
            $(this).find('.portBox').stop().fadeIn();
        });
        
        $('.portList li').mouseleave(function(){
            $(this).find('.portB').stop().fadeOut();
            $(this).find('.portBox').stop().fadeOut();
        });
    
    $('.reqBtn').click(function(){
            location.href="request.html"
        });
    
    
    
});