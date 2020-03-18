$(function () {

    $('a').click(function () {
        if ($(this).attr('href') == 'give.html') {
            alert('로그인이 필요한 서비스입니다');
            window.location.href = "login.html";
            return false;
        }
    })

});
