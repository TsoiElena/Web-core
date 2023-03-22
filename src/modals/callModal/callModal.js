import {ModalOpened, ModalClosed, ModalClosedFone} from '../modal'

const callOpenButton = document.querySelectorAll('.icon__callIcon')
const callCloseButton = document.querySelector('#call-close')
const callModal = document.querySelector('#call-modal')
const call = document.querySelector('#call-feedback')

callModal.addEventListener( 'click', (e) => {
  ModalClosedFone(e, callModal, call);
})

callOpenButton.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    ModalOpened(callModal)
  })
})

callCloseButton.addEventListener('click', function (e) {
  e.preventDefault();
  ModalClosed(callModal)
})
