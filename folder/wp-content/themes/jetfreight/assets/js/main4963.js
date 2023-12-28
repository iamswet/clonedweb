/* Moile Menu */
/*=================================
   Sticky Header Starts
   =================================*/

$(document).ready(function () {
    $(this).scrollTop(0);
});

(function ($) {

    /* Mobile Menu */
    $('#header').load('header.html', function () {
        fixedHeader();

    });
    $('#footer').load('footer.html', function () {});

    function fixedHeader() {
        var sticky = $('#header'),
            scroll = $(window).scrollTop();
        if (scroll >= 120) {
            $("header").animate({
                top: '0px'
            });
            sticky.addClass('fixHeader');

        } else {
            sticky.removeClass('fixHeader');

        };

    };

    /* Header */
    $(window).scroll(function (e) {
        fixedHeader();
    });

    /* Header Over */
    $(document).on('input', '.form-field', function () {
        if ($(this).val().length > 0) {
            $(this).addClass('field--not-empty');
        } else {
            $(this).removeClass('field--not-empty');
        }
    });

    $('.select-field-2').on("select2:select", function (e) {
        $(this).addClass('field--not-empty');
    });
    $('.select-field-2').on("select2:unselect", function (e) {
        if ($(this).val() == null) {
            $(this).removeClass('field--not-empty');
        }
    });

  


    AOS.init();
/*  */


}(jQuery));

/* $(function () {
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "./img/svg/date-icon.svg",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
}); */

$('.radio-switch').click(function () {

    if ($('#radio-a').prop("checked") == true) {
        $('.map-image').hide();
        $('.world').show();
    } else if ($('#radio-b').prop("checked") == true) {
        $('.map-image').hide();
        $('.india').show();
    }

});