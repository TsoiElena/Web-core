import Swiper from 'swiper';
import {Pagination} from 'swiper';

const swiperContainer = document.querySelectorAll('.swiper')
const swiperPagination = document.querySelectorAll('.swiper-pagination')

for (let i=0; i < swiperContainer.length; i++) {
  const swiper = new Swiper(swiperContainer[i], {
    modules: [Pagination],
    pagination: {
      el: swiperPagination[i],
      clickable: true,
    },

    breakpoints: {
      320: {
        enabled: true,
        direction: 'horizontal',
        slidesPerView: 'auto',
        slidesPerColumn: 1,
      },
      768: {
        enabled: false,
        slidesPerView: 'auto',
      }
    },
  });
}

function show (button, wraper) {
  const icon = button.querySelector('.icon')
  const text = button.querySelector('span')

  if (text.textContent === 'Показать все') {
    text.textContent = 'Скрыть'
    icon.classList.add('icon__buttonIcon--hide')
    wraper.classList.add('swiper-wrapper--show')
  } else {
    text.textContent = 'Показать все'
    icon.classList.remove('icon__buttonIcon--hide')
    wraper.classList.remove('swiper-wrapper--show')
  }
}

const showAllBrands = document.querySelector('.swiper-button--brands')
const wraperBrands = document.querySelector('.swiper-wrapper--brands')

const showAllDevices = document.querySelector('.swiper-button--devices')
const wraperDevices = document.querySelector('.swiper-wrapper--devices')
console.log(wraperDevices)

showAllBrands.addEventListener('click', function (evt) {
    evt.preventDefault()
    show(showAllBrands, wraperBrands)
})

showAllDevices.addEventListener('click', function (evt) {
  evt.preventDefault()
  show(showAllDevices, wraperDevices)
})


