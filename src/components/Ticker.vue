<template>
    <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useInitWidget from '../composable/useInitWidget'

export default defineComponent({
    name: 'WTicker',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const options = {
            symbols: [
                {
                    proName: 'FOREXCOM:SPXUSD',
                    title: 'S&P 500',
                },
                {
                    proName: 'FOREXCOM:NSXUSD',
                    title: 'US 100',
                },
                {
                    proName: 'FX_IDC:EURUSD',
                    title: 'EUR/USD',
                },
                {
                    proName: 'BITSTAMP:BTCUSD',
                    title: 'Bitcoin',
                },
                {
                    proName: 'BITSTAMP:ETHUSD',
                    title: 'Ethereum',
                },
            ],
            colorTheme: 'light',
            isTransparent: false,
            showSymbolLogo: true,
            locale: 'en',
            ...props.options,
        }

        const { container, tradingview } = useInitWidget(
            options,
            'tradingview-ticker',
            'tradingview-ticker-script',
            'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
        )

        return { container, tradingview }
    },
})
</script>
