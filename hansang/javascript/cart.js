        total_price1 = 2500;

        total_price2 = 4980;

        total_price3 = 1980;

        total_price4 = 4000;

        function down() {
            var num = document.getElementById('inp').value;
            if (num > 1) {
                num--;
                document.getElementById('inp').value = num;
            }
            var price = document.getElementById('cart_price');

            total_price1 = 2500 * num

            var view_price1 = total_price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            price.innerHTML = view_price1 + " 원";

            buy_price();
        }

        function up() {
            var num = document.getElementById('inp').value;
            if (num > 0) {
                num++;
                document.getElementById('inp').value = num;
            }
            var price = document.getElementById('cart_price');

            total_price1 = 2500 * num

            var view_price1 = total_price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            price.innerHTML = view_price1 + " 원";

            buy_price();
        }

        $('.cancle').on('click', function () {
            var cancle_list_total = "";
            var cancle_list_text = "";
            var cancle_list_text2 = "";
            var cancle_list_text3 = "";
            var cancle_list_text4 = 0;
            var cancle_list_text5 ="";
            
            $(this).parent().parent().remove();

            var cancle_list = $('.cart_price');

            for (var i = 0; i < cancle_list.length; i++) {
                
                cancle_list_text = $('.cart_price').eq(i).text();
                
                cancle_list_text2 = cancle_list_text.replace(",", "");
                
                cancle_list_text3 = cancle_list_text2.replace("원","");
                
                cancle_list_text4 += parseInt(cancle_list_text3.trim());
                
            }
            
            var total_text = document.getElementById("total_price_num");
            
            cancle_list_text5 = String(cancle_list_text4);

            var view_price = cancle_list_text5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            total_text.innerHTML = view_price + " 원";
            
        });

        function down2() {
            var num = document.getElementById('inp2').value;
            if (num > 1) {
                num--;
                document.getElementById('inp2').value = num;
            }
            var price = document.getElementById('cart_price2');

            total_price2 = 4980 * num

            var view_price2 = total_price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            price.innerHTML = view_price2 + " 원";

            buy_price();
        }

        function up2() {
            var num = document.getElementById('inp2').value;
            if (num > 0) {
                num++;
                document.getElementById('inp2').value = num;
            }
            var price = document.getElementById('cart_price2');

            total_price2 = 4980 * num

            var view_price2 = total_price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            price.innerHTML = view_price2 + " 원";

            buy_price();
        }

        function down3() {
            var num = document.getElementById('inp3').value;
            if (num > 1) {
                num--;
                document.getElementById('inp3').value = num;
            }
            var price = document.getElementById('cart_price3');

            total_price3 = 1980 * num

            var view_price3 = total_price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            price.innerHTML = view_price3 + " 원";

            buy_price();
        }

        function up3() {
            var num = document.getElementById('inp3').value;
            if (num > 0) {
                num++;
                document.getElementById('inp3').value = num;
            }
            var price = document.getElementById('cart_price3');

            total_price3 = 1980 * num

            var view_price3 = total_price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            price.innerHTML = view_price3 + " 원";

            buy_price();
        }

        function down4() {
            var num = document.getElementById('inp4').value;
            if (num > 1) {
                num--;
                document.getElementById('inp4').value = num;
            }
            var price = document.getElementById('cart_price4');

            total_price4 = 4000 * num

            var view_price4 = total_price4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            price.innerHTML = view_price4 + " 원";

            buy_price();
        }

        function up4() {
            var num = document.getElementById('inp4').value;
            if (num > 0) {
                num++;
                document.getElementById('inp4').value = num;
            }
            var price = document.getElementById('cart_price4');

            total_price4 = 4000 * num;

            var view_price4 = total_price4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            price.innerHTML = view_price4 + " 원";

            buy_price();
        }

        function buy_price() {
            var total_text = document.getElementById("total_price_num");

            var total_pay = total_price1 + total_price2 + total_price3 + total_price4;

            numberWithCommas(total_pay);
        }

        function numberWithCommas(total_pay) {

            var total_text = document.getElementById("total_price_num");

            var view_price = total_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            total_text.innerHTML = view_price + " 원";


        }
        //$('.total_price_num').html(total_price1 + total_price2 + total_price3 + total_price4 + " 원");


        function plz_login() {
            alert('로그인을 해야 이용 가능한 서비스입니다');
            location.href = "login.html";
        }
