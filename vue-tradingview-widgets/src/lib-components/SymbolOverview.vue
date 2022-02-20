<template>
  <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { Options } from '../types';

declare global {
  interface Window {
    TradingView: any;
  }
}
window.TradingView = window.TradingView || {};

export default defineComponent({
  name: 'SymbolOverview',
  props: {
    options: {
      type: Object,
      default: () => ({
        symbols: [
          ['Apple', 'AAPL'],
          ['Google', 'GOOGL'],
          ['Microsoft', 'MSFT'],
        ],
        chartOnly: false,
        width: 1000,
        height: 400,
        locale: 'en',
        colorTheme: 'light',
        gridLineColor: 'rgba(240, 243, 250, 0)',
        fontColor: '#787B86',
        isTransparent: false,
        autosize: false,
        showVolume: false,
        scalePosition: 'no',
        scaleMode: 'Normal',
        fontFamily: 'Trebuchet MS, sans-serif',
        noTimeScale: false,
        valuesTracking: '1',
        chartType: 'area',
        lineColor: '#2962FF',
        bottomColor: 'rgba(41, 98, 255, 0)',
        topColor: 'rgba(41, 98, 255, 0.3)',
        container_id: 'tradingview-symbol-overview',
      }),
      validator: (options: Options) => {
        return options.container_id === 'tradingview-symbol-overview';
      },
    },
  },
  setup(props) {
    const container = ref('tradingview-symbol-overview');
    const scriptID = ref('tradingview-symbol-overview-script');

    const canUseDOM = () => {
      return typeof window !== 'undefined' && window.document && window.document.createElement;
    };

    const getScriptElement = () => {
      return document.getElementById(scriptID.value);
    };

    const scriptExists = () => {
      return getScriptElement() !== null;
    };

    const appendScript = (onload: () => void) => {
      if (!canUseDOM()) return;
      if (scriptExists()) return;

      const script = document.createElement('script');
      script.id = scriptID.value;
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/tv.js';
      script.onload = onload;
      document.getElementsByTagName('head')[0].appendChild(script);
    };

    const initWidget = () => {
      setTimeout(() => {
        if (typeof window.TradingView === 'undefined') return;

        new window.TradingView.MediumWidget(Object.assign({ container_id: container }, props.options));
      }, 300);
    };

    onMounted(() => {
      appendScript(() => initWidget());
    });
    return { container };
  },
});
</script>
