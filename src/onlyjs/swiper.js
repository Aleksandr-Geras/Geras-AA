// Импорт модулей
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

let slider = document.querySelector('.image-slider');
let sliderSecond = document.querySelector('.swiper_second');
let sliderThird = document.querySelector('.swiper_third-media');
let mySwiper;
// eslint-disable-next-line no-unused-vars
let mySwiper_second;
// eslint-disable-next-line no-unused-vars
let mySwiper_third;
let windowWidth = window.innerWidth;

function mobileSlider() {
  if (windowWidth <= 400 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      modules: [Navigation, Pagination],
      slideClass: 'image-slider__slide',
      speed: 400,
      // spaceBetween: 100,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      slidesPerView: 1.2,
      spaceBetween: 20,
      loop: true,
    });

    mySwiper_second = new Swiper(sliderSecond, {
      modules: [Navigation, Pagination],
      slideClass: 'slide',
      speed: 400,
      // spaceBetween: 100,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

      slidesPerView: 1.3,
      spaceBetween: 20,
      loop: true,
    });

    mySwiper_third = new Swiper(sliderThird, {
      modules: [Navigation, Pagination],
      slideClass: 'services-container-media',
      speed: 400,
      // spaceBetween: 100,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      slidesPerView: 1.2,
      spaceBetween: 20,
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
