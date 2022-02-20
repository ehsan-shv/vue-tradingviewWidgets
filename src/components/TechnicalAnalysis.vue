<template>
  <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useInitWidget from '../composable/useInitWidget';

export default defineComponent({
  name: 'TechnicalAnalysis',
  props: {
    options: {
      type: Object,
      default: () => ({
        interval: '1m',
        width: 425,
        isTransparent: false,
        height: 450,
        symbol: 'NASDAQ:AAPL',
        showIntervalTabs: true,
        locale: 'en',
        colorTheme: 'light',
      }),
    },
  },
  setup(props) {
    const { container, tradingview } = useInitWidget(
      props.options,
      'tradingview-technical-analysis',
      'tradingview-technical-analysis-script',
      'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
    );

    return { container, tradingview };
  },
});
</script>
