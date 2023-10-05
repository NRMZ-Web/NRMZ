// 네비
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// 네비 닫기

const closeButton = document.getElementById('close-button');


const navMenu = document.querySelector('.nav-menu');


closeButton.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
