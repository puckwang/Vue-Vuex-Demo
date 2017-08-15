<template>
  <div id="app">
    <p>
      <router-link :to="{path: '/hello'}">Hello</router-link>
      <router-link :to="{name: 'c2f'}">CtoF</router-link>
      <router-link :to="{path: '/learnComponent'}">learnComponent</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
