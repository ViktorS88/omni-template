<template>
  <router-view name="mainNavigation"></router-view>
  <div class="app_vue">
    <router-view></router-view>
  </div>
  <img src="@/assets/images/img/logo.png" width="100" alt="">
</template>

<script>

export default {
  name: 'App',
  data() {
    return {}
  }
}

</script>

<style lang="scss">


</style>
