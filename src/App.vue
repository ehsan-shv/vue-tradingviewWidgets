<template>
  <ForexCrossRates />
  <CryptoMarket />
  <ForexHeatMap />
  <div style="height: 400px">
    <Chart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ForexCrossRates from './components/ForexCrossRates.vue';
import CryptoMarket from './components/CryptoMarket.vue';
import ForexHeatMap from './components/ForexHeatMap.vue';
import Chart from './components/Chart.vue';

export default defineComponent({
  name: 'App',
  components: { ForexHeatMap, ForexCrossRates, CryptoMarket, Chart },
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
