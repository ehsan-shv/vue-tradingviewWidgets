<template>
  <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'ForexCrossRates',
  props: {
    options: {
      type: Object,
      default: () => ({
        symbol: 'NASDAQ:AAPL',
        color: 'blak',
        isTransparent: false,
        largeChartUrl: '',
        displayMode: 'regular',
        width: '100%',
        height: '100%',
        locale: 'br',
      }),
    },
  },
  setup(props) {
    const container = ref('tradingview-forex-cross-rates');
    const scriptID = ref('tradingview-forex-cross-rates-script');
    const tradingview = ref<HTMLDivElement>();

    const canUseDOM = () => {
      return typeof window !== 'undefined' && window.document && window.document.createElement;
    };

    const getScriptElement = () => {
      return document.getElementById(scriptID.value);
    };

    const scriptExists = () => {
      return getScriptElement() !== null;
    };

    const appendScript = () => {
      if (!canUseDOM()) return;
      if (scriptExists()) return;

      const script = document.createElement('script');
      script.id = scriptID.value;
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
      script.textContent = JSON.stringify(props.options);
      if (tradingview.value) tradingview.value.appendChild(script);
    };

    onMounted(() => {
      setTimeout(() => {
        appendScript();
      }, 300);
    });
    return { canUseDOM, scriptExists, container, tradingview };
  },
});
</script>
