const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

// Custom button event handlers
document.getElementById("swiperNext").addEventListener("click", () => {
  swiper.slideNext();
});

document.getElementById("swiperPrev").addEventListener("click", () => {
  swiper.slidePrev();
});
