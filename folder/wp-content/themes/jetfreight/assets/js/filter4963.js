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