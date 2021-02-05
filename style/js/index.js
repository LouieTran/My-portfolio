$(document).ready(function(){

    $(window).scroll(function(event){
        var pos_body = $('html, body').scrollTop();
        var pos_resume = $('.resume').offset().top;
        var pos_about = $('.about').offset().top;
        var pos_skills = $('.skills').offset().top;
        var pos_portfolio = $('.portfolio').offset().top;
        var pos_contact = $('.contact').offset().top;
        // var vi_tri_hien_tai = $('.active_nut').index();
        $('.header__nav-list-item-resume a').removeClass('header__nav-item-active');
        
        if(pos_body>(pos_resume-700)){
            $('.resume').addClass('show');
            $('.header__nav-list-item-resume a').addClass('header__nav-item-active');
            $('.header__nav-list-item-about a').removeClass('header__nav-item-active');

        }
        
        if(pos_body>(pos_resume-650)){
            $('.resume__container__info-item_0').addClass('animate__fadeInRight');

            setTimeout(() => {
                $('.resume__container__info-item_1').addClass('animate__fadeInRight');

            }, 600);
            setTimeout(() => {
                $('.resume__container__info-item_2').addClass('animate__fadeInRight');
            }, 1200);
            setTimeout(() => {
                $('.resume__container__info-item_3').addClass('animate__fadeInRight');
            }, 1800);
            setTimeout(() => {
                $('.resume__container__info-item_4').addClass('animate__fadeInRight');
            }, 2400);
        }

        if(pos_body>pos_about-600){
            $('.about').addClass('show');
            $('.header__nav-list-item-resume a').removeClass('header__nav-item-active');
            $('.header__nav-list-item-about a').addClass('header__nav-item-active');
            $('.header__nav-list-item-skills a').removeClass('header__nav-item-active');

        }
        if(pos_body>pos_about-550){
            $('.about__content_11').addClass('animate__zoomIn');
            setTimeout(() => {
                $('.about__content_12').addClass('animate__zoomIn');
            }, 1000);
        }

        if(pos_body>pos_skills-600){
            $('.skills').addClass('show');
            $('.header__nav-list-item-skills a').addClass('header__nav-item-active');
            $('.header__nav-list-item-about a').removeClass('header__nav-item-active');
            $('.header__nav-list-item-portfolio a').removeClass('header__nav-item-active');

        }
        if(pos_body>pos_skills-550){
            $('.skills').addClass('show');
        }
        if(pos_body>pos_portfolio-600){
            $('.portfolio').addClass('show');
            $('.header__nav-list-item-portfolio a').addClass('header__nav-item-active');
            $('.header__nav-list-item-skills a').removeClass('header__nav-item-active');
            $('.header__nav-list-item-contact a').removeClass('header__nav-item-active');

        }
        if(pos_body>pos_contact-800){
            $('.contact').addClass('show');
            $('.header__nav-list-item-contact a').addClass('header__nav-item-active');
            $('.header__nav-list-item-portfolio a').removeClass('header__nav-item-active');

        }
        
    });
    $('[data-fancybox="gallery"]').fancybox({
    });
    $('[data-fancybox="video_demo"]').fancybox({
        thumbs : {
            autoStart : true,
            axis      : 'y'
    
        },
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ]
    });
    $('#send_mes').click(function(event){
        console.log(1);
        alert("Thanks for informing me");
    });
    function btnLike(){
        var like = document.querySelector(".main__info__btn-like b").innerHTML;
        var new_like = parseInt(like)+1;
        document.querySelector(".main__info__btn-like b") = new_like;
    }

    
});