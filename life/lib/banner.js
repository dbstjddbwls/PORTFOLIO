        /*          배너          */
        var slideCnt = 1;
        showSlide();

        function move(n) {
            showSlide(slideCnt += n);
        }

        function showSlide(n) {
            var i;
            var slides = document.getElementsByClassName('banner');
            if (n > slides.length) {
                slideCnt = 1;
            }
            if (n < 1) {
                slideCnt = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.opacity = "0";
            }
            slides[slideCnt - 1].style.opacity = "1";
        }
