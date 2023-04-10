const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.desktop-menu');
const menuOpts = document.querySelectorAll('.menu-option');

function openMenu() {
  menu.classList.add('show-menu-modal');
}

function closeMenu() {
  menu.classList.remove('show-menu-modal');
}

menuBtn.addEventListener('click', openMenu);
menuOpts.forEach((menuOpt) => menuOpt.addEventListener('click', closeMenu));