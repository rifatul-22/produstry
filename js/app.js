$(function(){
    
    $('#navber_toggler').on('click', function(){
        $('#nav_logo,#mainMenu ul, #navber_toggler').toggleClass('menu_active');
    });

    $('.banner_slider').slick({
        autoplay: true,
        prevArrow:$('.banner_slider_icon_btn.prev'),
        nextArrow:$('.banner_slider_icon_btn.next')
    });
    $('.blog_slider_container').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow:$('.blog_slider_icon_btn.prev'),
        nextArrow:$('.blog_slider_icon_btn.next')
    });

    // testimonial slider activation 

    $('.testimonial_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial_img'
    });
    $('.testimonial_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial_slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    //Brank slick activation
    $('.brand_img').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        prevArrow:$('.brand_slider_icon_btn.prev'),
        nextArrow:$('.brand_slider_icon_btn.next')
      });

    // About page {our team slick active}
    $('.our_team_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow:$('.team_slider_icon_btn.prev'),
        nextArrow:$('.team_slider_icon_btn.next')
    });
    // scroll activation
    $(window).on('scroll', function(){
        var navScroll = $(window).scrollTop();

        //BackToTop
        if(navScroll > 400){
            $('#backToTop').show(500);
        }else{
            $('#backToTop').hide(500);
        }
    })
    $('#backToTop').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        })
    })
    // CounterUp activation
    $('.counter').counterUp()
})

AOS.init();