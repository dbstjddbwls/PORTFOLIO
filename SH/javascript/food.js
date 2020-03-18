window.onload = function(){
    
        //http:, localhost:port번호, index.html ?test=tttt
        console.log($(location).attr('search'));
        
        var a1 = $(location).attr('search');
        
        if(a1 == '?index=123'){
            
            $('.menuList .active').removeClass();
            $('.menuDrink').addClass('active');
            
            
           $('.banner').attr("src", "images/mBanner_S.png");
           $('.foodBox').css({
               "display": "none"
           });
           $('.DrinkBox').css({
               "display": "block"
           });
           $('.setBox').css({
               "display": "none"
           });
        }
    }      


$(".menuList li").click(function () {
           $('.menuList .active').removeClass();
           $(this).addClass('active');
       });



       $('.menuFood').click(function () {
           $('.banner').attr("src", "images/mBanner_M.png");
           $('.foodBox').css({
               "display": "block"
           });
           $('.DrinkBox').css({
               "display": "none"
           });
           $('.setBox').css({
               "display": "none"
           });
       });


       $('.menuDrink').click(function () {
           $('.banner').attr("src", "images/mBanner_S.png");
           $('.foodBox').css({
               "display": "none"
           });
           $('.DrinkBox').css({
               "display": "block"
           });
           $('.setBox').css({
               "display": "none"
           });
       });


       $('.menuSet').click(function () {
           $('.banner').attr("src", "images/mBanner_M.png");
           $('.foodBox').css({
               "display": "none"
           });
           $('.DrinkBox').css({
               "display": "none"
           });
           $('.setBox').css({
               "display": "block"
           });
       });
