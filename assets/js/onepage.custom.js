//smooth scroll
$(function () {
    "use strict";
    /**Preloader*/
    $(window).preloader({
        delay: 500
    });
    /*smooth scroll*/
    $('.anchor-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 65
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    //auto close navbar-collapse on click a
    $('.navbar .nav-item>.anchor-scroll').on('click', function () {
        $('.navbar-toggler:visible').click();
    });
    // search form toggle
    //back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    //animated scroll menu
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('.navbar-sticky').addClass('is-stick');
        }
        if (scroll <= 0) {
            $('.navbar-sticky').removeClass('is-stick');
        }
    });
    //courses carousel
    $(".service-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    //Projct carousel
    $(".project-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    //Projct carousel
    $(".testi-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    //wow animations
    var wow = new WOW(
        {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 100, // distance to the element when triggering the animation (default is 0)
            mobile: false        // trigger animations on mobile devices (true is default)
        }
    );
    wow.init();
});