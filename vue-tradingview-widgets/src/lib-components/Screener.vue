<template>
  <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useInitWidget from '../composable/useInitWidget';

export default defineComponent({
  name: 'Screener',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const options = {
      width: 1100,
      height: 523,
      defaultColumn: 'overview',
      defaultScreen: 'general',
      market: 'forex',
      showToolbar: true,
      colorTheme: 'light',
      locale: 'en',
      ...props.options,
    };
    const { container, tradingview } = useInitWidget(
      options,
      'tradingview-screener',
      'tradingview-screener-script',
      'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
    );

    return { container, tradingview };
  },
});
</script>
