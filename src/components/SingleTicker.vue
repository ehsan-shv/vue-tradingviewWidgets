<template>
    <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useInitWidget from '../composable/useInitWidget'

export default defineComponent({
    name: 'WSingleTicker',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const options = {
            symbol: 'FX:EURUSD',
            width: 350,
            colorTheme: 'light',
            isTransparent: false,
            locale: 'en',
            ...props.options,
        }

        const { container, tradingview } = useInitWidget(
            options,
            'tradingview-single-ticker',
            'tradingview-single-ticker-script',
            'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js'
        )

        return { container, tradingview }
    },
})
</script>
