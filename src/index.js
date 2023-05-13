import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.min.css';

swiperContainer = document.querySelector('.swiper-container');

swiperOptions = {
  direction: 'vertical',
  slidesPerView: 6,
  spaceBetween: 20,
  rewind: true,
  speed: 400,
  paginationClickable: true,
  grabCursor: true,
  waitForTransition: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpoints: {
  //   375: {
  //     slidesPerView: 4,
  //     spaceBetween: 12,
  //     loop: true,
  //   },
  //   1024: {
  //     slidesPerView: 6,
  //     spaceBetween: 12,
  //     loop: true,
  //     loopedSlides: 1,
  //   },
  // },
};

carousel = new Swiper(swiperContainer, swiperOptions);
