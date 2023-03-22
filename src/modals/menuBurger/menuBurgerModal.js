import {ModalOpened, ModalClosed, ModalClosedFone} from '../modal'

const menuOpenButton = document.querySelector('#menu-open')
const menuCloseButton = document.querySelector('#menu-close')
const menuModal = document.querySelector('#menu-modal')
const menu = document.querySelector('.menuBurger')

menuModal.addEventListener( 'click', (e) => {
  ModalClosedFone(e, menuModal, menu);
})

menuOpenButton.addEventListener('click', function (e) {
  e.preventDefault();
  ModalOpened(menuModal)
})

menuCloseButton.addEventListener('click', function (e) {
  e.preventDefault();
  ModalClosed(menuModal)
})


