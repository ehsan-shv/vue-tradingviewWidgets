<template>
  <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useInitWidget from '../composable/useInitWidget';

export default defineComponent({
  name: 'ForexCrossRates',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const options = {
      symbol: 'NASDAQ:AAPL',
      color: 'blak',
      isTransparent: false,
      largeChartUrl: '',
      displayMode: 'regular',
      width: '100%',
      height: '100%',
      locale: 'br',
      ...props.options,
    };

    const { container, tradingview } = useInitWidget(
      options,
      'tradingview-forex-cross-rates',
      'tradingview-forex-cross-rates-script',
      'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js'
    );

    return { container, tradingview };
  },
});
</script>
