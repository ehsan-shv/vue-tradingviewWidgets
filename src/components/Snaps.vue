<template>
  <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useInitWidget from '../composable/useInitWidget';

export default defineComponent({
  name: 'Snaps',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const options = {
      feedMode: 'all_symbols',
      colorTheme: 'light',
      isTransparent: false,
      displayMode: 'regular',
      width: 480,
      height: 830,
      locale: 'en',
      ...props.options,
    };

    const { container, tradingview } = useInitWidget(
      options,
      'tradingview-snaps',
      'tradingview-snaps-script',
      'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js'
    );

    return { container, tradingview };
  },
});
</script>
