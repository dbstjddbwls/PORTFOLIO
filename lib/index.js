$(function(){
    
    
    $(window).ready(function(){
        $('.pop1').stop().animate({"left":"50%"},1500,function(){
            $('.pop2').stop().animate({"left":"50%"},1000,function(){
                $('.pop1').stop().animate({"left":"2100px"},1000,function(){
                    $('.pop2').stop().animate({"left":"2100px"},1000,function(){
                        $('.popup').fadeOut();
                    })
                })
            })
        });
        
    })
    
    
    $('.center').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });



         $('.slick-prev').html('<i class="fas fa-chevron-left"></i>');
            $('.slick-next').html('<i class="fas fa-chevron-right"></i>');   
        
        $(window).resize(function(){
            $('.slick-prev').html('<i class="fas fa-chevron-left"></i>');
            $('.slick-next').html('<i class="fas fa-chevron-right"></i>');
        });
        
        
        $('.filter').click(function() {
            $('.filterBox').find('.active').removeClass('active');
            $(this).addClass('active');
        })

        $('.fDesign').click(function() {
            $('.web').fadeOut();
            $('.design').css({
                "display": "block"
            });
            $('.design').css({"height":"100%"});
            $('.design').animate({
                "left": "0"
            }, 1500);

        });
        $('.fWeb').click(function() {
            $('.design').stop().animate({
                "left": "-4000"
            }, 1, function() {
                $('.design').css({
                    "display": "none"
                });
            });
            $('.web').fadeIn();
        });


        var st = false;
        var st2 = false;
        var st3 = false;
        var st4 = false;
        var st5 = false;

        if ($(window.innerWidth >  500)) {
            $(window).on('scroll', function(e) {

                if ($(window).scrollTop() > 190) {

                    if (st == false) {
                        $('#about .portTitle').animate({
                            "left": "0"
                        }, 1000);
                        st = true;
                    } else {}
                };
                if ($(window).scrollTop() > 210) {
                    if (st2 == false) {
                        $('#about .portani').animate({
                            "left": "0"
                        }, 1000);
                        st2 = true;
                    } else {}
                };
                if ($(window).scrollTop() > 350) {
                    if (st3 == false) {
                        $('.profile').animate({"top":0},500,function(){
                            $('.comment').animate({"top":0},500,function(){
                                $('.skill').animate({
                            "top": "0"
                        }, 500, function() {


                            $('.htmlS, .htmlC').animate({
                                "width": "90%"
                            }, 1000);
                            $('.htmlJ').animate({
                                "width": "80%"
                            }, 1000);
                            $('.htmlU, .htmlP').animate({
                                "width": "65%"
                            }, 1000);
                            st3 = true;
                        });
                            })
                        })
                    } else {};
                };

                if ($(window).scrollTop() > 1000) {
                    if (st4 == false) {
                        $('#portfolio .portTitle').animate({
                            "left": "0"
                        }, 1000);
                        st4 = true;
                    } else {}
                };

                if ($(window).scrollTop() > 2100) {

                    if (st5 == false) {
                        $('#contact .portTitle').animate({
                            "left": "0"
                        }, 1000, function() {
                            $('.conBox').animate({
                                "left": "0"
                            }, 1000);
                        });
                        st5 = true;
                    } else {}
                };
            })
        } 
        
        if ($(window.innerWidth <  500)) {
            
             $(window).on('scroll', function(e) {

                if ($(window).scrollTop() > 190) {

                    if (st == false) {
                        $('#about .portTitle').animate({
                            "left": "0"
                        }, 1000);
                        st = true;
                    } else {}
                };
                 
                if ($(window).scrollTop() > 210) {
                    if (st2 == false) {
                        $('#about .portani').animate({
                            "left": "0"
                        }, 1000);
                        st2 = true;
                    } else {}
                };
                 
                if ($(window).scrollTop() > 480) {
                    if (st3 == false) {
                        $('.profile').animate({"top":0},1000,function(){
                            $('.comment').animate({"top":0},500,function(){
                                $('.skill').animate({
                            "top": "0"
                        }, 500, function() {


                            $('.htmlS, .htmlC').animate({
                                "width": "90%"
                            }, 1000);
                            $('.htmlJ').animate({
                                "width": "80%"
                            }, 1000);
                            $('.htmlU, .htmlP').animate({
                                "width": "65%"
                            }, 1000);
                            st3 = true;
                        });
                            })
                        })
                    } else {};
                };

                if ($(window).scrollTop() > 1000) {
                    if (st4 == false) {
                        $('#portfolio .portTitle').animate({
                            "left": "0"
                        }, 1000);
                        st4 = true;
                    } else {}
                };

                if ($(window).scrollTop() > 2100) {

                    if (st5 == false) {
                        $('#contact .portTitle').animate({
                            "left": "0"
                        }, 1000, function() {
                            $('.conBox').animate({
                                "left": "0"
                            }, 1000);
                        });
                        st5 = true;
                    } else {}
                };
            })
            
        }

        $('.menu').click(function() {
            $('.subList').slideToggle();
        });

        $('.subList li').click(function() {
            $('.subList').css({
                "display": "none"
            });
        })

});