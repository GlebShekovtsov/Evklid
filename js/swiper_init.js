const swiper = new Swiper(".hero__swiper", {
  effect: "fade",
  centeredSlides: true,
  direction: "horizontal",
  slidesPerView: 1,
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
