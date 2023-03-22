import {ModalOpened, ModalClosed, ModalClosedFone} from '../modal'

const chatOpenButton = document.querySelectorAll('.icon__chatIcon')
const chatCloseButton = document.querySelector('#chat-close')
const chatModal = document.querySelector('#chat-modal')
const chat = document.querySelector('#chat-feedback')

chatModal.addEventListener( 'click', (e) => {
  ModalClosedFone(e, chatModal, chat);
})

chatOpenButton.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    ModalOpened(chatModal)
  })
})

chatCloseButton.addEventListener('click', function (e) {
  e.preventDefault();
  ModalClosed(chatModal)
})
