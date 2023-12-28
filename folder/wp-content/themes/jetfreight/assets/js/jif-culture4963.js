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



};

var upmode = new Swiper(".myGallery", swiperOptions);