$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs-hor li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs-hor li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    /*$(".tabs-hor").css("margin-top", function(){ 
       return ($(".tab_container").outerHeight() - $(".tabs-hor").outerHeight() ) / 2;
    });*/
});
$(".tab_container").css("min-height", function () {
    return $(".tabs-hor").outerHeight() + 50;
});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs-hor li").removeClass("active");
    $("ul.tabs-hor li[rel^='" + d_activeTab + "']").addClass("active");
});