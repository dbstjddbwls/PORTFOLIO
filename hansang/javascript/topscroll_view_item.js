 function TopScroll() {
     $('html').scrollTop(0);
 }

 $(function () {
     //������ ��ũ�� ���� ������ lastScroll ����
     var lastScroll = 0;
     $(window).scroll(function (event) { //��ũ���� �����϶� ���� �̺�Ʈ ����
         //���� ��ũ���� ��ġ�� ������ st ����
         var st = $(this).scrollTop();
         //��ũ�� ���Ͽ� ���� ���� ����
         if (st > 100) {
             $("#goTop").css("opacity", "1");
             $("#goTop").css("top", st + 640);
         } else {
             //��ũ���� ���� �ö����� ����Ǵ� �̺�Ʈ ����
             $("#goTop").css("opacity", "0");
         }
     });
 });

 function add() {
     var imageGet = localStorage.getItem('imgSrc'); /*localStorage�� �Ʊ� ������ imgSrc�� key�� �ҷ��� ���� imageGet�� ����*/
     if (imageGet) {
         var view_link = document.createElement('a');

         var href_get = localStorage.getItem('localhref');
                
         view_link.href = href_get;

         var images = document.createElement('img'); /*img �±׸� �����ѵ� �� �±׸� images�� ������ ����*/

         var view_img = document.getElementById("view_img");

         images.src = imageGet; /*���� images�� ��ũ(img src="")�� imageGet���� �ҷ��� value��(�� ���� ������������ id=img�� ������ũ)*/


         view_img.appendChild(view_link);
         view_link.appendChild(images); /*body�� �±� img���� src�� ���� ���� images�� ����*/
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
