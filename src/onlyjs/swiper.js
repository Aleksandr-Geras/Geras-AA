let slider = document.querySelector('.image-slider');
let mySwiper;
let windowWidth = window.innerWidth;

function mobileSlider() {
  if (windowWidth <= 400 && slider.dataset.mobile == 'false') {
    // eslint-disable-next-line no-undef
    mySwiper = new Swiper(slider, {
      slideClass: 'image-slider__slide',
      speed: 400,
      spaceBetween: 100,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      slidesPerView: 1.3,
      loop: true,
    });

    slider.dataset.mobile = 'true';
  }

  if (windowWidth > 400) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', function () {
  mobileSlider();
});
