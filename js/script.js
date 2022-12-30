
/* Hamburger menu */
const menuIcon = document.getElementsByClassName('menu__icon')[0]
const menuBody = document.getElementsByClassName('menu__navigation')[0]
const ul = document.getElementsByTagName('ul')[0]



menuIcon.addEventListener('click', () => {
  menuBody.classList.toggle('active');
	menuIcon.classList.toggle('active');
})

ul.addEventListener('click', () => {
  menuBody.classList.remove('active');
	menuIcon.classList.remove('active');
})