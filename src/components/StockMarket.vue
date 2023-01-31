<template>
    <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useInitWidget from '../composable/useInitWidget'

export default defineComponent({
    name: 'WStockMarket',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const options = {
            colorTheme: 'light',
            dateRange: '12M',
            exchange: 'US',
            showChart: true,
            locale: 'en',
            largeChartUrl: '',
            isTransparent: false,
            showSymbolLogo: false,
            showFloatingTooltip: false,
            width: '400',
            height: '600',
            plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
            plotLineColorFalling: 'rgba(41, 98, 255, 1)',
            gridLineColor: 'rgba(240, 243, 250, 0)',
            scaleFontColor: 'rgba(120, 123, 134, 1)',
            belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
            belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
            belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
            belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
            symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
            ...props.options,
        }
        const { container, tradingview } = useInitWidget(
            options,
            'tradingview-stock-market',
            'tradingview-stock-market-script',
            'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js'
        )

        return { container, tradingview }
    },
})
</script>
