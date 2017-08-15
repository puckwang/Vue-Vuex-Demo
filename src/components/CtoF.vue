<template>
  <div>
    <h1>攝氏/華氏 轉換器</h1>
    <h2>華氏: {{ fahrenheit }}</h2>
    <h2>攝氏: <input type="number" v-model="celsius"/></h2>
  </div>
</template>

<script>
  export default {
    name: 'CtoF',
    data() {
      return {
        celsius: 40,
      }
    },
    computed: {
      fahrenheit() {
        return this.celsius * 9 / 5 + 32;
      }
    }
  }
</script>
