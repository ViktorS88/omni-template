<template>
  <header>
    <h3>Навигация по web приложению, на случаю если будет несколько страниц</h3>
    <ul>
      <li class="block_link">
        <router-link :to="{name: 'home'}">Главная теперь мои обновления страница</router-link>
      </li>
      <li class="block_link">
        <router-link to="/calc-flex">ссылка на расчет flex</router-link>
      </li>
    </ul>
  </header>
  <router-view></router-view>
</template>

<script>
export default {
  name: "mainNavigation",
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
