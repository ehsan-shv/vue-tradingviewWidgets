<template>
  <div class=""><ForexCrossRates /> <CryptoMarket /></div>
  <div style="height: 400px">
    <!-- <Chart /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ForexCrossRates from './components/ForexCrossRates.vue';
import CryptoMarket from './components/CryptoMarket.vue';
// import Chart from './components/Chart.vue';

export default defineComponent({
  name: 'App',
  components: { CryptoMarket, ForexCrossRates },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
