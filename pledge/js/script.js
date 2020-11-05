$(function() {

    /* gnb */
    $('.depth1 li').mouseover(function() {
        $('.gnb-subBg').stop().slideDown();
        $(this).find('.depth2').stop().slideDown();
    });
    $('.depth1 li').mouseleave(function() {
        $('.gnb-subBg').stop().slideUp();
        $(this).find('.depth2').stop().slideUp();
    });

    /* footer */
    $('.ftrQckSite-depth > li button').click(function() {
        if ($('.ftrQckSite-depth2').css('display') == 'none') {
            $('.ftrQckSite-depth2').hide();
            $(this).next('.ftrQckSite-depth2').show();
        } else {
            $('.ftrQckSite-depth2').hide();
            $(this).next('.ftrQckSite-depth2').show();
        }
        $('ftrQckSite-btnClose').click(function() {
            $('.ftrQckSite-depth2').hide();
        });
    });

    /* menu */
    $('#Hdr button.open').click(function() {
        $(this).hide();
        $('.allMenugovernor').stop().show();
        $('#Hdr button.close').show();
        $('.gnb-list').stop().animate({
            right: 0
        }, 300);
        $('body').css('overflow', 'hidden');
        $('.gnb').stop().show();
    });
    $('#Hdr button.close').click(function() {
        $(this).hide();
        $('.allMenugovernor').stop().hide();
        $('#Hdr button.open').show();
        $('.gnb-list').stop().animate({
            right: -1000
        }, 300);
        $('body').css('overflow', 'visible');
        $('.gnb').stop().hide();
    });

    /* 상단으로 이동*/
    $('.top a').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

    // 메인 슬라이드
    p_sldr({
        seTarget: '.sldrMain',
        seView: '.sldrMain-sldrView',
        seBtnNext: '.sldrMain-btnNext',
        seBtnPrev: '.sldrMain-btnPrev',
        controls: false,
        useCss: false,
        pager: false,
        touchEnabled: false,
        reload: function(objSlider) {
            // reload 시 초기 세팅
            var wW = window.innerWidth;
            var $btnNext = $(this.seBtnNext);
            var $btnPrev = $(this.seBtnPrev);

            if (window.innerWidth < 1000) {
                objSlider.find('.bx-clone2').remove();
                if (objSlider.data().reDraw) {
                    objSlider.data().reDraw = 0;
                }

                if ($btnNext.data().notUse == undefined) {
                    $btnNext.data('notUse', 0);
                    $btnPrev.data('notUse', 0);
                } else {
                    $btnNext.data().notUse = 0;
                    $btnPrev.data().notUse = 0;
                }
            }

            // 브라우저 사이즈에 따른 실행
            if (0 <= wW && wW < 430) {
                objSlider.reloadSlider({
                    slideWidth: 100,
                    minSlides: 2,
                    maxSlides: 2,
                    slideMargin: 24,
                    useCss: false,
                    pager: false,
                    controls: false,
                });
            } else if (430 <= wW && wW < 550) {
                objSlider.reloadSlider({
                    slideWidth: 100,
                    minSlides: 3,
                    maxSlides: 3,
                    slideMargin: 24,
                    useCss: false,
                    pager: false,
                    controls: false,
                });
            } else if (550 <= wW && wW < 640) {
                objSlider.reloadSlider({
                    slideWidth: 100,
                    minSlides: 4,
                    maxSlides: 4,
                    slideMargin: 24,
                    useCss: false,
                    pager: false,
                    controls: false,
                });
            } else if (640 <= wW && wW < 810) {
                objSlider.reloadSlider({
                    slideWidth: 135,
                    minSlides: 2,
                    maxSlides: 2,
                    slideMargin: 32,
                    useCss: false,
                    pager: false,
                    controls: false,
                });
            } else if (810 <= wW && wW < 960) {
                objSlider.reloadSlider({
                    slideWidth: 135,
                    minSlides: 3,
                    maxSlides: 3,
                    slideMargin: 32,
                    useCss: false,
                    pager: false,
                    controls: false,
                });
            } else if (960 <= wW && wW < 1000) {
                objSlider.reloadSlider({
                    slideWidth: 135,
                    minSlides: 3,
                    maxSlides: 3,
                    slideMargin: 32,
                    useCss: false,
                    pager: false,
                    controls: false,
                });
            } else {
                // 요소를 복사하여 요소들을 재구성함.
                if (!objSlider.data().reDraw) {
                    objSlider.find('.bx-clone').remove();
                    var $childs = objSlider.children();
                    for (var i = 0; i < $childs.length; i++) {
                        if (i < 4) {
                            $childs.eq(i).next().children().clone().addClass('bx-clone2').appendTo($childs.eq(i));
                            $childs.eq(i).next().next().children().clone().addClass('bx-clone2').appendTo($childs.eq(i));
                            $childs.eq(i).next().next().next().children().clone().addClass('bx-clone2').appendTo($childs.eq(i));
                        } else {
                            $childs.eq(i).hide();
                        }
                    }
                    objSlider.data('reDraw', 1);

                    $btnNext.data().notUse = 0;
                    $btnPrev.data().notUse = 1;
                }

                objSlider.reloadSlider({
                    slideWidth: 1000,
                    useCss: false,
                    pager: false,
                    controls: false,
                    slideSelector: '.sldrMain-sldrGroup',
                    mode: 'fade',
                    onSlideNext: function($el, oldIdx, currIdx) {
                        if (2 < currIdx) {
                            $btnNext.data().notUse = 1;
                        }
                        $btnPrev.data().notUse = 0;
                    },
                    onSlidePrev: function($el, oldIdx, currIdx) {
                        if (currIdx == 0 || 2 < currIdx) {
                            $btnPrev.data().notUse = 1;
                        }
                        $btnNext.data().notUse = 0;
                    }
                });
            }

        }
    });

    // 최신글
    function p_latGallery() {
        var t = p_class('latGallery-img');
        if (!Boolean(t)) {
            return;
        }
        var wW = window.innerWidth;
        if (320 <= wW && wW < 640) {
            p_setAutoHeight('.latGallery-img', 282, 188);
        } else if (640 <= wW && wW < 1000) {
            p_setAutoHeight('.latGallery-img', 282, 188);
        } else if (1000 < wW) {
            t.forEach(function(el) {
                el.style.height = 148 + 'px';
            });
        }
    }
    //p_latGallery();

    // 메인 비쥬얼 리사이즈
    function p_resizeHeight() {
        var t = p_class('mainVisual');
        if (!Boolean(t)) {
            return;
        }
        var wW = window.innerWidth;
        if (320 <= wW && wW < 1000) {
            p_setAutoHeight('.mainVisual', 320, 209);
        } else if (1000 <= wW) {
            t[0].style.height = 418 + 'px';
        }
    }
    p_resizeHeight();

    window.addEventListener('resize', function() {
        p_resizeHeight();
        p_latGallery();
    });

    //희망정선 실천과제 탭
    function p_toggleTab() {

        var $tab = $('.task-tab');
        if ($tab.length == 0) {
            return;
        }
        var $tabOpen = $('.task-tabBtn');
        var $view = $('.task-tabConts');
        var active = 'active';
        var txtOpen = '열기▼';
        var txtClose = '닫기▲';
        if (location.pathname == '/42nd-governor/pledge/project') {

            var chkParam = parseInt(location.search.split('=')[1]);

            $tab.each(function(idx, elem) {
                var $this = $(this);
                if (idx == chkParam) {
                    $this.addClass(active).siblings().removeClass(active).find($tabOpen.selector).text(txtOpen);
                    $this.find($tabOpen.selector).text(txtClose);
                }
            });
        }

        // 클릭시
        $tab.click(function() {
            var $this = $(this);

            // 클래스 있음.
            if ($this.hasClass(active)) {
                $this.removeClass(active).find($tabOpen.selector).text(txtOpen);
                // 클래스 없음.
            } else {
                $this.addClass(active).siblings().removeClass(active).find($tabOpen.selector).text(txtOpen);
                $this.find($tabOpen.selector).text(txtClose);
            }

        });
    }
    p_toggleTab();

});
