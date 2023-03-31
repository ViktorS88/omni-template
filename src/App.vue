<template>
  <button
    class="app__btn-open-menu"
    ref="btnMainMenu"
    @click="toggleMenu"
  >Показать меню</button>
  <div class="app__mainNavigateion-wrap" :class="menuStyle">
    <router-view name="mainNavigation" @closeMenu="toggleMenu"></router-view>
  </div>
  <div class="app__mainPage">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      btnInfo: "меню",
      showBtnMenu: false,
      menuStyle: {
        'visually-hidden': true, "mainNavigateion__show": false
      }
    }
  },

  methods: {
    toggleMenu() {
      this.showBtnMenu = !this.showBtnMenu
      this.$refs.btnMainMenu.hidden = this.showBtnMenu ? true : ''
      this.menuStyle['visually-hidden'] = !this.menuStyle['visually-hidden']
      this.menuStyle['mainNavigateion__show'] = !this.menuStyle['mainNavigateion__show']
    }
  },
  computed: {
  }
}

</script>

<style lang="scss">

.app__mainNavigateion-wrap{
  position: fixed;
  padding: 25px;
  top: 2vw;
  left: 2vh;
  right: 2vw;
  bottom: 2vh;
  //width: 96vw;
  //min-height: 96vh;
  background-color: rgba(245, 245, 220);
  z-index: 1000;
  border-radius: 15px;
}
.app__btn-open-menu {
  position: absolute;
  top: 0;
  right: 0;
}

</style>
