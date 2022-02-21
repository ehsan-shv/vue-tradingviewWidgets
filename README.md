# vue-tradingview-widgets

<a href="https://www.npmjs.com/package/vue-tradingview-widgets"><img src="https://img.shields.io/npm/v/vue-tradingview-widgets.svg" alt="Version"></a>

> [Tradingview](https://www.tradingview.com/widget/) widgets for Vue.

## Instalation

```bash
npm i vue-tradingview-widgets
```

## Widgets

- ForexHeatMap
- ForexCrossRates
- CryptoMarket
- Chart
- TechnicalAnalysis
- MarketOverview
- MarketData
- StockMarket
- EconomicCalendar
- Ticker
- TickerTape
- SingleTicker
- MiniChart
- SymbolOverview
- SymbolInfo
- Screener
- FundamentalData
- CompanyProfile
- Snaps

## Import in component

```js
<template>
  <Chart />
  <Snaps />
  <Screener/>
</template>

<script lang="ts">
import { Chart, Snaps, Screener } from 'vue-tradingview-widgets';

export default defineComponent({
  name: 'App',
  components: {
    CryptoMarket,
    Chart,
    Screener,
    Snaps,
  },
});
</script>
```
