const showAllSwiperButton = document.querySelector('.swiper-button')
const swiperWraper = document.querySelector('.swiper-wrapper')

showAllSwiperButton.addEventListener('click', function (evt) {
    evt.preventDefault()
    const icon = showAllSwiperButton.querySelector('.icon')
    const text = showAllSwiperButton.querySelector('span')
    if (text.textContent === 'Показать все') {
        text.textContent = 'Скрыть'
        icon.classList.add('icon__buttonIcon--hide')
        swiperWraper.classList.add('swiper-wrapper--show')
    } else {
        text.textContent = 'Показать все'
        icon.classList.remove('icon__buttonIcon--hide')
        swiperWraper.classList.remove('swiper-wrapper--show')
    }
})



