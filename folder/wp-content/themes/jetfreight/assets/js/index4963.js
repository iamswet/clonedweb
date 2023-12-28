  




var swiperLogos = new Swiper(".myLogos", {

    spaceBetween: 30,
    pagination: {
        el: ".logo-pagination",
        clickable: true,
    },
    speed: 5000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    breakpoints: {
        320: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        500: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        700: {
            spaceBetween: 30,
            slidesPerView: 4,
        },
        1023: {
            spaceBetween: 35,
            slidesPerView: 5,
        },
        1367: {
            spaceBetween: 30,
            slidesPerView: 6,
        }
    },

});

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





/* ===========================Accordian============================================================== */
var accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find('.article-title');
    links.on('click', {
        el: this.el,
        multiple: this.multiple
    }, this.dropdown)
}

accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
        $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
    };
}
var accordion = new accordion($('.accordion-container'), false);






/* var video1 = document.getElementById("default_video");

video1.currentTime = 0; */


/* var def_video = document.getElementById("default_video"); */
/* var myAnchor = document.getElementsByClassName("tv_video");
var project_video = myAnchor.getAttribute("id"); */
/*   def_video.get(0).play();  */




/* $(".play-bt").click(function () {
    // console.log('play');
    $(".play-bt").hide();
    $(".pause-bt").show();

    if ($(".stop-bt").hasClass("active")) {
        def_video.currentTime = 0;
    }
    def_video.play();
}); */
/* $(".pause-bt").click(function () {
    $(".play-bt").show();
    $(".pause-bt").hide();
    $(".pause-bt").addClass("active");
    $(".stop-bt").removeClass("active");
    var def_video = document.getElementById("default_video");
    def_video.pause();
}); */
/* $(".stop-bt").click(function () {
    $(".play-bt").show();
    $(".pause-bt").hide();
    $(".pause-bt").removeClass("active");
    $(".stop-bt").addClass("active");
    var def_video = document.getElementById("default_video");
    stop
    def_video.pause();
}); */


/* BAckup video code */
let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.content-item');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => tabClick(i));
}

function tabClick(currentTab) {
    removeActive();
    tabs[currentTab].classList.add('active');
    content[currentTab].classList.add('active');
    $('.def-img').removeClass('none');
    $('.def-img-hov').removeClass('block');
    $('.active').children().children('.def-img').addClass('none');
    $('.active').children().children('.def-img-hov').addClass('block');


    console.log(currentTab);
    $('.tv_video').get(0).pause();
    $('#video0' + currentTab).get(0).play();

}

function removeActive() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        content[i].classList.remove('active');

    }
}

// var worldLottie = document.getElementById("graph1");

//   worldLottie.seek("0%")
// worldLottie.play();


$('.graphAnim').each(function () {
    let dataStop = $(this).attr('data-stop');
    if (dataStop == undefined) {
        dataStop = 80;
    }

    var scrollStop = gsap.timeline({
        scrollTrigger: {
            trigger: this,
            start: "-150px " + dataStop + "%",
            end: "-150px " + dataStop + "%",
            // pin: true,
            scrub: true,
            // markers: true,
            onEnter: graphEnterFn,
            // onEnterBack: graphEnterBackFn,
        },
    });

    function graphEnterFn(el) {

        var triggerGraph = el.trigger.dataset.graph;
        // console.log(triggerGraph);

        var numTriggerGraph = +triggerGraph;

        document.getElementById('graph' + numTriggerGraph).play();
        // document.getElementById('graph' + numTriggerGraph).setSpeed(1.5);

    }

});