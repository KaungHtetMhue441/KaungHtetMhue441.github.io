let screenHeight = $(window).height();
    // console.log(screenHeight);

    new WOW().init();
    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition > screenHeight-100){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
        }
    });

    new WOW().init();