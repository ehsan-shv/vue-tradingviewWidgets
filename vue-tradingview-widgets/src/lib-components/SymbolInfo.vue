<template>
  <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useInitWidget from '../composable/useInitWidget';

export default defineComponent({
  name: 'SymbolInfo',
  props: {
    options: {
      type: Object,
      default: () => ({
        symbol: 'NASDAQ:AAPL',
        width: 1000,
        locale: 'en',
        colorTheme: 'light',
        isTransparent: false,
      }),
    },
  },
  setup(props) {
    const options = {
      symbol: 'NASDAQ:AAPL',
      width: 1000,
      locale: 'en',
      colorTheme: 'light',
      isTransparent: false,
      ...props.options,
    };

    const { container, tradingview } = useInitWidget(
      options,
      'tradingview-symbol-info',
      'tradingview-symbol-info-script',
      'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
    );

    return { container, tradingview };
  },
});
</script>
