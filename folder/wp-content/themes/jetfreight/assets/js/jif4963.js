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




$(".tab_content_main").hide();
$(".tab_content_main:first").show();

/* if in tab mode */
$(".tabs-top span").click(function () {

    $(".tab_content_main").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $(".tabs-top span").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading_main").removeClass("d_active");
    $(".tab_drawer_heading_main[rel^='" + activeTab + "']").addClass("d_active");

    /*$(".tabs-hor").css("margin-top", function(){ 
       return ($(".tab_container").outerHeight() - $(".tabs-hor").outerHeight() ) / 2;
    });*/
});
$(".tab_container_main").css("min-height", function () {
    return $(".tabs-top").outerHeight() + 50;
});





$('.switch').click(function () {

    if ($('#radio-a').prop("checked") == true) {
        $('.map-image').hide();
        $('.world').show();
    } else if ($('#radio-b').prop("checked") == true) {
        $('.map-image').hide();
        $('.india').show();
    }

});

$('#default').show();

$('#colorselector').change(function () {
    $('.formsdetail').hide();

    $('#' + $(this).val()).show();
});




var $item = $('.focus');

$item.on('click', 'a', function (event) {
    var $section = $($(this).attr('href'));
    var sectionTop = $section.offset().top - 210;

    $('html, body').stop().animate({
        scrollTop: sectionTop
    }, 1000);

    event.preventDefault();
});



$(".various").fancybox({
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    width: '80%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none'
});


$(".upload-file").on("change", ".file-upload-field", function () {
    $(this).parents(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
});