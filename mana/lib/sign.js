$(function(){
    $('.idChk').click(function(){
            $('.idResult').css({"display":"inline-block"});
        });
        
           $('#passwordChk').focusout(function(){
              if($('#password').val() == $('#passwordChk').val()){
                  $('.passwordNot').css({"display":"none"});
                  $('.passwordChk').css({"display":"inline-block"});
              } else{
                  $('.passwordChk').css({"display":"none"});
                  $('.passwordNot').css({"display":"inline-block"});
              }
           });
           
           $('#adressList').on("change",function(){
               $('#adress').val($(this).val());
           });
           
           $('.sign').click(function(){
               alert('회원가입이 완료되었습니다.');
               window.location.href="index.html"
           });
});