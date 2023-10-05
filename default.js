// 네비게이션 메뉴 
const menuIcon = document.getElementById('menu-icon');
const closeButton = document.getElementById('close-button');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// 닫기 버튼 
closeButton.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    navMenu.classList.remove('show');
  }
});
