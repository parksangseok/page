$(function() {

    $('#section1 .slick').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#section1 .control .count').html('<em>' + i + '</em> / ' + slick.slideCount);
    });

    $('#section1 .slick_wrap .slick').slick({
        slide: 'li',
        variableWidth: false,
        autoplay: true,
        arrows: true,
        dots: false,
        prevArrow: $('#section1 .control .prev'),
        nextArrow: $('#section1 .control .next'),
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        speed: 1500,
        zIndex: 1000,
        fade: false,
        swipe: false,
    });

    $('.banner .control button').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('pause')) {
            $(this).hide();
            $('.banner .control .play').show();
            $('.banner .slick').slick('slickPause');
        } else if ($(this).hasClass('play')) {
            $(this).hide();
            $('.banner .control .pause').show();
            $('.banner .slick').slick('slickPlay');
        }
    });
/*
    $(window).resize(function() {
        var width_size = window.innerWidth;
        if (width_size > 576) {
            $('#section2 .slick_wrap .slick02').slick('unslick');
        } else {
            $('#section2 .slick_wrap .slick02').slick({
                slide: 'li',
                variableWidth: false,
                autoplay: true,
                arrows: false,
                dots: true,
                prevArrow: $('#section2 .control .prev'),
                nextArrow: $('#section2 .control .next'),
                accessibility: false,
                draggable: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 1500,
                speed: 1500,
                zIndex: 1000,
                fade: false,
                swipe: false,
                esponsive: [{
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        slidesToShow: 1
                    }
                }, ]
            });
        }
    });
    $(window).on('resize orientationchange', function() {
      $('#section2 .slick_wrap .slick02').slick('resize');
    });
    */
});
