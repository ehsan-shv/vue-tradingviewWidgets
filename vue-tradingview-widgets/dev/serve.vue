<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueTradingviewWidgetsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VueTradingviewWidgetsSample,
  // }
});
</script>

<template>
  <div id="app">
    <section>
      <h2>Chart Widget</h2>
      <Chart />
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
  </div>
</template>
