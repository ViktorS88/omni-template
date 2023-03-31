<template>
  <button @click="closeMenu" class="main-navigation__btn-close-menu">закрыть меню</button>
  <header>
    <h3>Навигация по web приложению, на случаю если будет несколько страниц</h3>
    <ul class="main-navigation__list-link">
      <li class="main-navigation__item-link">
        <router-link class="main-navigation__link" :to="{name: 'pageHome'}" @click="closeMenu">Главная страница</router-link>
      </li>
      <li class="main-navigation__item-link">
        <router-link class="main-navigation__link" to="/calc-flex" @click="closeMenu">ссылка на расчет flex</router-link>
      </li>
      <li>
        <span>Симантичная верстка</span>
        <ul>
          <li class="main-navigation__item-link">
            <router-link class="main-navigation__link" :to="{name: 'keys2'}" @click="closeMenu">keys2</router-link>
          </li>
          <li class="main-navigation__item-link">
            <router-link  class="main-navigation__link" to="#" @click="closeMenu">keys3</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </header>
<!--  <router-view></router-view>-->
</template>

<script>

export default {
  name: "mainNavigation",
  emits: ['closeMenu'],
  computed: {
    keys2() {
      return keys2
    }
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
  .main-navigation__btn-close-menu {
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
