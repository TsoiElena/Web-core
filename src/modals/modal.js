function ModalOpened (modal) {
  const html = document.documentElement;
  const scrollPosition = window.pageYOffset;

  modal.classList.add('modal--show')
  html.style.top = -scrollPosition + "px";
  html.classList.add("modalOpen");
}

function ModalClosed (modal) {
  const html = document.documentElement;
  const scrollPosition = window.pageYOffset;

  modal.classList.remove('modal--show')
  html.classList.remove("modalOpen");
  window.scrollTo(0, scrollPosition);
  html.style.top = "";
}

function ModalClosedFone (e, modal, body) {
  const withinBoundaries = e.composedPath().includes(body);

  if ( ! withinBoundaries ) {
    ModalClosed(modal)
  }
}

export {ModalOpened, ModalClosed, ModalClosedFone};

