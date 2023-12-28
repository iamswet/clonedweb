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





/*  $(".tab_content").hide();
 $(".tab_content:first").show(); */
/*  $(".tab_content").hide(); */
 $(".tab_content:first").addClass('active'); 


 /* if in tab mode */
 $("ul.tabs-hor li").click(function () {

     /* $(".tab_content").hide(); */
     $(this).parents(".tabs_wrapper").find(".tab_content").removeClass('active'); 

     var activeTab = $(this).attr("rel");
    /*  $("#" + activeTab).fadeIn(); */
     $("#" + activeTab).addClass('active');



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

     /* $(".tab_content").hide(); */
     $(this).parents(".tabs_wrapper").find(".tab_content").removeClass('active'); 
     var d_activeTab = $(this).attr("rel");
  /*    $("#" + d_activeTab).fadeIn(); */
     $("#" + d_activeTab).addClass('active');

     $(".tab_drawer_heading").removeClass("d_active");
     $(this).addClass("d_active");

     $("ul.tabs-hor li").removeClass("active");
     $("ul.tabs-hor li[rel^='" + d_activeTab + "']").addClass("active");
 });


 /* Extra class "tab_last" 
    to add border to bottom side
    of last tab 
 $('ul.tabs-hor li').last().addClass("tab_last");*/