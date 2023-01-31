<template>
    <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useInitWidget from '../composable/useInitWidget'

export default defineComponent({
    name: 'WCompanyProfile',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const options = {
            symbol: 'NASDAQ:AAPL',
            width: 480,
            height: 650,
            colorTheme: 'light',
            isTransparent: false,
            locale: 'en',
            ...props.options,
        }

        const { container, tradingview } = useInitWidget(
            options,
            'tradingview-company-profile',
            'tradingview-company-profile-script',
            'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js'
        )

        return { container, tradingview }
    },
})
</script>
