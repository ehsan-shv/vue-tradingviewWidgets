<template>
  <ForexCrossRates />
  <CryptoMarket />
  <ForexHeatMap />
  <TechnicalAnalysis />
  <MarketOverview />
  <MarketData />
  <StockMarket />
  <EconomicCalendar />
  <div style="height: 400px">
    <Chart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ForexCrossRates from './components/ForexCrossRates.vue';
import CryptoMarket from './components/CryptoMarket.vue';
import ForexHeatMap from './components/ForexHeatMap.vue';
import TechnicalAnalysis from './components/TechnicalAnalysis.vue';
import MarketOverview from './components/MarketOverview.vue';
import MarketData from './components/MarketData.vue';
import Chart from './components/Chart.vue';
import StockMarket from './components/StockMarket.vue';
import EconomicCalendar from './components/EconomicCalendar.vue';

export default defineComponent({
  name: 'App',
  components: {
    ForexHeatMap,
    ForexCrossRates,
    CryptoMarket,
    Chart,
    TechnicalAnalysis,
    MarketOverview,
    MarketData,
    StockMarket,
    EconomicCalendar,
  },
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
