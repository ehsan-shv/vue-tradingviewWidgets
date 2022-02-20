<template>
  <ForexCrossRates />
  <CryptoMarket />
  <ForexHeatMap />
  <TechnicalAnalysis />
  <MarketOverview />
  <MarketData />
  <StockMarket />
  <EconomicCalendar />
  <Ticker />
  <TickerTape />
  <SingleTicker />
  <SymbolOverview />
  <MiniChart />
  <SymbolInfo />
  <Screener />
  <Chart />
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
import Ticker from './components/Ticker.vue';
import TickerTape from './components/TickerTape.vue';
import SingleTicker from './components/SingleTicker.vue';
import MiniChart from './components/MiniChart.vue';
import SymbolOverview from './components/SymbolOverview.vue';
import SymbolInfo from './components/SymbolInfo.vue';
import Screener from './components/Screener.vue';

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
    Ticker,
    TickerTape,
    SingleTicker,
    MiniChart,
    SymbolOverview,
    SymbolInfo,
    Screener,
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
