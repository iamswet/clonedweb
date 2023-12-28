/* ===========================Counter============================================================== */
var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }
});





var swiper = new Swiper(".myEvents", { 
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, 
    breakpoints: {
        320: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
        480: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        1024: {
            spaceBetween: 30,
            slidesPerView: 3,
        }, 
    },
});


var swiperOptions = {
    loop: true,
    autoplay: {
        delay: 5,
        disableOnInteraction: false
    },
    freeMode: {
        enabled: true,
    },
    spaceBetween: 30,
    slidesPerView: 'auto',
    speed: 10000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        320: {
            spaceBetween: 10,
            
        },
        480: {
            spaceBetween: 20,
            
        },
        1024: {
            spaceBetween: 30,
             
        }, 
    },



};

var upmode = new Swiper(".myGallery", swiperOptions);