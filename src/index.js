import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.min.css';
import { supportList } from './js/support_list';
import { createImageItemMurkup } from './js/createMarkupSupportSection';

const supportContainer = document.querySelector('.swiper-wrapper');
const imageMarkup = createImageItemMurkup(supportList);

supportContainer.insertAdjacentHTML('beforeend', imageMarkup);

swiperContainer = document.querySelector('.swiper-container');

swiperOptions = {
  direction: 'vertical',
  slidesPerView: 4,
  spaceBetween: 20,
  rewind: true,
  speed: 400,
  loop: true,
  paginationClickable: true,
  grabCursor: true,
  waitForTransition: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
};

carousel = new Swiper(swiperContainer, swiperOptions);
