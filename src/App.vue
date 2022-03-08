<template>
  <section>
    <h2>Chart Widget</h2>
    <Chart
      :options="{
        theme: 'dark',
        container_id: 'tradingview-charts',
      }"
    />
  </section>
  <section>
    <h2>Forex Cross Rates Widget</h2>
    <ForexCrossRates />
  </section>
  <section>
    <h2>Crypto Market Widget</h2>
    <CryptoMarket />
  </section>
  <section>
    <h2>Forex Heat Map Widget</h2>
    <ForexHeatMap />
  </section>
  <section>
    <h2>Technical Analysis Widget</h2>
    <TechnicalAnalysis />
  </section>
  <section>
    <h2>Market Overview Widget</h2>
    <MarketOverview />
  </section>
  <section>
    <h2>Market Data Widget</h2>
    <MarketData />
  </section>
  <section>
    <h2>Stock Market Widget</h2>
    <StockMarket />
  </section>
  <section>
    <h2>Economic Calendar Widget</h2>
    <EconomicCalendar />
  </section>
  <section>
    <h2>Ticker Widget</h2>
    <Ticker />
  </section>
  <section>
    <h2>Ticker Tape Widget</h2>
    <TickerTape />
  </section>
  <section>
    <h2>Single Ticker Widget</h2>
    <SingleTicker />
  </section>
  <section>
    <h2>Mini Chart Widget</h2>
    <MiniChart />
  </section>
  <section>
    <h2>Symbol Overviewt Widget</h2>
    <SymbolOverview />
  </section>
  <section>
    <h2>Symbol Info Widget</h2>
    <SymbolInfo />
  </section>
  <section>
    <h2>Screener Widget</h2>
    <Screener />
  </section>
  <section>
    <h2>Fundamental Data Widget</h2>
    <FundamentalData />
  </section>
  <section>
    <h2>Company Profile Widget</h2>
    <CompanyProfile />
  </section>
  <section>
    <h2>Snaps Widget</h2>
    <Snaps />
  </section>
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
import FundamentalData from './components/FundamentalData.vue';
import CompanyProfile from './components/CompanyProfile.vue';
import Snaps from './components/Snaps.vue';

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
    FundamentalData,
    CompanyProfile,
    Snaps,
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
  margin: 64px;

  section {
    &:not(:last-child) {
      margin-bottom: 160px;
    }

    h2 {
      margin-bottom: 40px;
    }
  }
}
</style>
