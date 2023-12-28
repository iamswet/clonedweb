$(document).ready(function () {
    var mySwiper = new Swiper(".milestones", {
        autoHeight: true,
        slidesPerView: 3,
        centeredSlides: true,
        /* autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed: 500, */
        direction: "horizontal",
        navigation: {
            nextEl: ".milestones-next",
            prevEl: ".milestones-prev"
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        /* pagination: {
            el: ".swiper-pagination",
            type: "progressbar"
        }, */
        loop: false,
        effect: "slide",
        spaceBetween: 0,
        on: {
            init: function () {
                $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
                $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
            }
        }
    });
    $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
        mySwiper.slideTo($(this).index());
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(this).addClass("active");
    });
});