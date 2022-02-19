<template>
  <div :id="container" ref="tradingviewHeatMap" class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'ForexHeatMap',
  props: {
    options: {
      type: Object,
      default: () => ({
        width: 770,
        height: 400,
        currencies: ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD', 'CNY'],
        isTransparent: false,
        colorTheme: 'light',
        locale: 'en',
      }),
    },
  },
  setup(props) {
    const container = ref('crypto_heatMap');
    const scriptID = ref('heatMap_script');
    const tradingviewHeatMap = ref<HTMLDivElement>();

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
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
      script.textContent = JSON.stringify(props.options);
      if (tradingviewHeatMap.value) tradingviewHeatMap.value.appendChild(script);
    };

    onMounted(() => {
      setTimeout(() => {
        appendScript();
      }, 300);
    });
    return { canUseDOM, scriptExists, container, tradingviewHeatMap };
  },
});
</script>
