var swiper = new Swiper(".myEvents", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        360: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        
    },

});



 



var $grid = $('grid').isotope({
    itemSelector: '.element-item',
    //layoutMode: 'fitRows'
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



  

 