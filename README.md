# vue-tradingview-widgets

<a href="https://www.npmjs.com/package/vue-tradingview-widgets"><img src="https://img.shields.io/npm/v/vue-tradingview-widgets.svg" alt="Version"></a>

> [Tradingview](https://www.tradingview.com/widget/) widgets for Vue3. [Demo](https://ehsan-shv.github.io/vue-tradingviewWidgets/)

## Installation

```bash
npm i vue-tradingview-widgets
```

## Widgets

-   ForexHeatMap
-   ForexCrossRates
-   CryptoMarket
-   Chart
-   TechnicalAnalysis
-   MarketOverview
-   MarketData
-   StockMarket
-   EconomicCalendar
-   Ticker
-   TickerTape
-   SingleTicker
-   MiniChart
-   SymbolOverview
-   SymbolInfo
-   Screener
-   FundamentalData
-   CompanyProfile
-   Snaps

## Vue Example

```js
<template>
  <Chart />
  <CryptoMarket />
  <Snaps/>
  <Screener/>
</template>

<script lang="ts">
import { Chart,CryptoMarket, Snaps, Screener } from 'vue-tradingview-widgets';

export default defineComponent({
  name: 'App',
  components: {
    Chart,
    CryptoMarket,
    Screener,
    Snaps,
  },
});
</script>
```

## Options

All components have default options based on Tradingview. Check available options on [Tradingview](https://www.tradingview.com/widget/)

```js
<template>
  <Chart
    :options="{
      theme: 'dark',
    }"
  />
</template>

<script lang="ts">
import { Chart } from 'vue-tradingview-widgets';

export default defineComponent({
  name: 'App',
  components: {
    Chart,
  },
});
</script>
```

## Nuxt Example

First import in _/plugins/widgets.client.ts_:

```js
import Chart from 'vue-tradingview-widgets'
import Screener from 'vue-tradingview-widgets'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Chart)
    nuxtApp.vueApp.use(Screener)
})
```

Then use in components. **Plugin is auto-registered**.
