<template>
    <div :id="container" ref="tradingview" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useInitWidget from '../composable/useInitWidget'

export default defineComponent({
    name: 'WCryptoMarket',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const options = {
            width: '100%',
            height: '100%',
            defaultColumn: 'overview',
            screener_type: 'crypto_mkt',
            displayCurrency: 'USD',
            colorTheme: 'light',
            locale: 'en',
            ...props.options,
        }

        const { container, tradingview } = useInitWidget(
            options,
            'tradingview-crypto-market',
            'tradingview-crypto-market-script',
            'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
        )
        return { container, tradingview }
    },
})
</script>
