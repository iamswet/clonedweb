 // tabbed content


// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter on select change
  $('.filters-select').on( 'change', function() {
    // get filter value from option value
    var filterValue = this.value;
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  


 // http://www.entheosweb.com/tutorials/css/tabs-hor.asp
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


 /* Extra class "tab_last" 
    to add border to bottom side
    of last tab 
 $('ul.tabs-hor li').last().addClass("tab_last");*/



 $('.zoom-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  closeOnContentClick: false,
  closeBtnInside: false,
  mainClass: 'mfp-with-zoom mfp-img-mobile',
  image: {
    verticalFit: true,
    titleSrc: function(item) {
      return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
    }
  },
  gallery: {
    enabled: true
  },
  zoom: {
    enabled: true,
    duration: 300, // don't foget to change the duration also in CSS
    opener: function(element) {
      return element.find('img');
    }
  }
  
});