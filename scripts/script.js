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
