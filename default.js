// 네비
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
