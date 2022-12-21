
/* Hamburger menu */
const menuIcon = document.getElementsByClassName('menu__icon')[0]
const menuBody = document.getElementsByClassName('menu__navigation')[0]
// const menuBar = document.getElementsByClassName('icon-menu__bar')


menuIcon.addEventListener('click', () => {
  menuBody.classList.toggle('active');
	menuIcon.classList.toggle('active');
})
