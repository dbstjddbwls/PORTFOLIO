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
            })
        });