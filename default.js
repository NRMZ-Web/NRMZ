// 네비게이션 메뉴 
new Vue({
  el: '#app',
  data: {
    isMenuOpen: false,  // 메뉴 열림 상태
  },
  methods: {
    // 메뉴 열고 닫기
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    // 메뉴 외부 클릭 시 닫기
    closeMenuOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isMenuOpen = false;
      }
    }
  },
  mounted() {
    // 메뉴 외부 클릭 감지
    document.addEventListener('click', this.closeMenuOutside);
  },
  beforeDestroy() {
    // 컴포넌트가 파괴되기 전에 이벤트 리스너 제거
    document.removeEventListener('click', this.closeMenuOutside);
  }
});
