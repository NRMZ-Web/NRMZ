// 네비게이션 메뉴 
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// 닫기 

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    navMenu.classList.remove('show');
  }
});
