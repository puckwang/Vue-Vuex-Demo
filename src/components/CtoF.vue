<template>
  <div>
    <h1>攝氏/華氏 轉換器</h1>
    <input id="switch" type="checkbox" v-model="isCelsius"/>
    <label for="switch">切換: {{ toggleTemperature }}</label>

    <p v-if="isCelsius">攝氏：{{ celsius }} °C</p>
    <p v-if="!isCelsius">華氏：{{ fahrenheit }} °F</p>
    <span v-show="!isCelsius">攝氏：</span>
    <span v-show="isCelsius">華氏：</span>
    <input type="number" v-model="userIn"/>
    <button @click="alertResult();">Alert</button>
  </div>
</template>

<script>
  export default {
    name: 'CtoF',
    data() {
      return {
        isCelsius: true,
        userIn: 100,
      }
    },
    computed: {
      fahrenheit() {
        return this.userIn * 9 / 5 + 32;
      },
      celsius() {
        return (this.userIn - 32) * 5 / 9;
      },
      toggleTemperature () {
        return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
      }
    },
    methods: {
        alertResult() {
            alert(this.isCelsius ? '攝氏' + this.celsius : '華氏' + this.fahrenheit);
        }
    }
  }
</script>
