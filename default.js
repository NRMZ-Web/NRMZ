// 햄버거 메뉴 아이콘을 클릭할 때 네비게이션 메뉴를 토글
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
