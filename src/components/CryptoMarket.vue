<template>
  <div :id="container" ref="tradingview" class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'CryptoMarket',
  props: {
    options: {
      type: Object,
      default: () => ({
        width: '100%',
        height: '100%',
        defaultColumn: 'overview',
        screener_type: 'crypto_mkt',
        displayCurrency: 'USD',
        colorTheme: 'light',
        locale: 'en',
      }),
    },
  },
  setup(props) {
    const container = ref('crypto_mkt');
    const scriptID = ref('crypto_mkt_script');
    const tradingview = ref(null);

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
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
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
