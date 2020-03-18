 function TopScroll() {
     $('html').scrollTop(0);
 }

 $(function () {
     //마지막 스크롤 값을 저장할 lastScroll 변수
     var lastScroll = 0;
     $(window).scroll(function (event) { //스크롤이 움직일때 마다 이벤트 실행
         //현재 스크롤의 위치를 저장할 st 변수
         var st = $(this).scrollTop();
         //스크롤 상하에 따른 반응 정의
         if (st > 100) {
             $("#goTop").css("opacity", "1");
             $("#goTop").css("top", st + 640);
         } else {
             //스크롤이 위로 올라갔을때 실행되는 이벤트 정의
             $("#goTop").css("opacity", "0");
         }
     });
 });

 function add() {
     var imageGet = localStorage.getItem('imgSrc'); /*localStorage에 아까 저장한 imgSrc란 key를 불러와 변수 imageGet에 넣음*/
     if (imageGet) {
         var view_link = document.createElement('a');

         var href_get = localStorage.getItem('localhref');
                
         view_link.href = href_get;

         var images = document.createElement('img'); /*img 태그를 생성한뒤 이 태그를 images란 변수에 넣음*/

         var view_img = document.getElementById("view_img");

         images.src = imageGet; /*변수 images의 링크(img src="")는 imageGet에서 불러온 value값(즉 이전 상세페이지에서 id=img인 사진링크)*/


         view_img.appendChild(view_link);
         view_link.appendChild(images); /*body에 태그 img이자 src를 가진 변수 images를 넣음*/
     }
 }
 add();
 $(function () {
     var viewScroll = 0;
     $(window).scroll(function (event) {

         var vt = $(this).scrollTop();

         if (vt > 100) {
             $("#view_img").css("opacity", "1");
             $("#view_img").css("top", vt + 500);
         } else {
             $("#view_img").css("opacity", "0")
         }
     })
 })
