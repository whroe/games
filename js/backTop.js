 // 返回顶部效果
 $(function () {
    $(window).on('scroll', function () {
        var $scroll = $(this).scrollTop();
        if ($scroll >= 1300) {
            $('#shangxia2').show();
        } else {
            $('#shangxia2').hide();
        }
    });

    // 默认速度
    $("#gotop6").click(function () {
        TweenMax.to(window, 1, { scrollTo: 0 });
    });


    // 弹跳球式滚动底部 .box2是要滚动地方的id或者锚点
    $("#gotop5").click(function () {
        TweenMax.to(window, 2, { scrollTo: ".box2", ease: Bounce.easeOut });
    });


    // 返回顶部，绑定gotop1图标和gotop2文字事件
    $("#gotop1,#gotop2").click(function (e) {
        TweenMax.to(window, 1.5, { scrollTo: 0, ease: Expo.easeInOut });
        var huojian = new TimelineLite();
        huojian.to("#gotop1", 1, { rotationY: 720, scale: 0.6, y: "+=40", ease: Power4.easeOut })
            .to("#gotop1", 1, { y: -1000, opacity: 0, ease: Power4.easeOut }, 0.6)
            .to("#gotop1", 1, { y: 0, rotationY: 0, opacity: 1, scale: 1, ease: Expo.easeOut, clearProps: "all" }, "1.4");
    });


    // 以1秒慢快慢的速度滚动顶部
    $("#gotop3").click(function () {
        TweenMax.to(window, 1, { scrollTo: 0, ease: Expo.easeInOut });
    });

    // 以1.5秒快慢快的速度滚动顶部
    $("#gotop4").click(function () {
        TweenMax.to(window, 1.5, { scrollTo: 0, ease: SlowMo.ease.config(0.7, 0.7, false) });
    });

});
