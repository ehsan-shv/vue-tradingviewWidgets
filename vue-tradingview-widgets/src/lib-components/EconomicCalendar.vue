<template>
  <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useInitWidget from '../composable/useInitWidget';

export default defineComponent({
  name: 'EconomicCalendar',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const options = {
      colorTheme: 'light',
      isTransparent: false,
      width: '510',
      height: '600',
      locale: 'en',
      importanceFilter: '-1,0,1',
      ...props.options,
    };

    const { container, tradingview } = useInitWidget(
      options,
      'tradingview-economic-calendar',
      'tradingview-economic-calendar-script',
      'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
    );

    return { container, tradingview };
  },
});
</script>
