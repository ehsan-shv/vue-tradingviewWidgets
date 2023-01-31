<template>
    <div ref="tradingview" :id="container" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useInitWidget from '../composable/useInitWidget'

export default defineComponent({
    name: 'WMarketOverview',
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
            showChart: true,
            locale: 'en',
            largeChartUrl: '',
            isTransparent: false,
            showSymbolLogo: true,
            showFloatingTooltip: false,
            width: '400',
            height: '660',
            plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
            plotLineColorFalling: 'rgba(41, 98, 255, 1)',
            gridLineColor: 'rgba(240, 243, 250, 0)',
            scaleFontColor: 'rgba(120, 123, 134, 1)',
            belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
            belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
            belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
            belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
            symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
            tabs: [
                {
                    title: 'Indices',
                    symbols: [
                        {
                            s: 'FOREXCOM:SPXUSD',
                            d: 'S&P 500',
                        },
                        {
                            s: 'FOREXCOM:NSXUSD',
                            d: 'US 100',
                        },
                        {
                            s: 'FOREXCOM:DJI',
                            d: 'Dow 30',
                        },
                        {
                            s: 'INDEX:NKY',
                            d: 'Nikkei 225',
                        },
                        {
                            s: 'INDEX:DEU40',
                            d: 'DAX Index',
                        },
                        {
                            s: 'FOREXCOM:UKXGBP',
                            d: 'UK 100',
                        },
                    ],
                    originalTitle: 'Indices',
                },
                {
                    title: 'Futures',
                    symbols: [
                        {
                            s: 'CME_MINI:ES1!',
                            d: 'S&P 500',
                        },
                        {
                            s: 'CME:6E1!',
                            d: 'Euro',
                        },
                        {
                            s: 'COMEX:GC1!',
                            d: 'Gold',
                        },
                        {
                            s: 'NYMEX:CL1!',
                            d: 'Crude Oil',
                        },
                        {
                            s: 'NYMEX:NG1!',
                            d: 'Natural Gas',
                        },
                        {
                            s: 'CBOT:ZC1!',
                            d: 'Corn',
                        },
                    ],
                    originalTitle: 'Futures',
                },
                {
                    title: 'Bonds',
                    symbols: [
                        {
                            s: 'CME:GE1!',
                            d: 'Eurodollar',
                        },
                        {
                            s: 'CBOT:ZB1!',
                            d: 'T-Bond',
                        },
                        {
                            s: 'CBOT:UB1!',
                            d: 'Ultra T-Bond',
                        },
                        {
                            s: 'EUREX:FGBL1!',
                            d: 'Euro Bund',
                        },
                        {
                            s: 'EUREX:FBTP1!',
                            d: 'Euro BTP',
                        },
                        {
                            s: 'EUREX:FGBM1!',
                            d: 'Euro BOBL',
                        },
                    ],
                    originalTitle: 'Bonds',
                },
                {
                    title: 'Forex',
                    symbols: [
                        {
                            s: 'FX:EURUSD',
                        },
                        {
                            s: 'FX:GBPUSD',
                        },
                        {
                            s: 'FX:USDJPY',
                        },
                        {
                            s: 'FX:USDCHF',
                        },
                        {
                            s: 'FX:AUDUSD',
                        },
                        {
                            s: 'FX:USDCAD',
                        },
                    ],
                    originalTitle: 'Forex',
                },
            ],
            ...props.options,
        }

        const { container, tradingview } = useInitWidget(
            options,
            'tradingview-market-overview',
            'tradingview-market-overview-script',
            'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
        )

        return { container, tradingview }
    },
})
</script>
