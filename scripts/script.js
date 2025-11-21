const btnMenu = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
const btnClose = document.querySelector('.menu__button-close');

function toggleMenu() {
  menu.classList.toggle('is-open');
  btnMenu.classList.toggle('hidden');
  btnClose.classList.toggle('hidden');
}

btnMenu.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);

const btnHero = document.querySelector('.hero__button');
const modal = document.querySelector('.modal-overlay');
const btnCloseModal = document.querySelector('.modal__button-close');
const modalOverlay = document.querySelector('.modal-overlay');

function toggleModal() {
  modal.classList.toggle('is-open');
}

btnHero.addEventListener('click', toggleModal);
btnCloseModal.addEventListener('click', toggleModal);
modalOverlay.addEventListener('click', function (event) {
  if (event.target === modalOverlay) {
    toggleModal();
  }
});
