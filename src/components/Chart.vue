<template>
    <div :id="container"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Options } from '../types'

declare global {
    interface Window {
        TradingView: any
    }
}
window.TradingView = window.TradingView || {}

export default defineComponent({
    name: 'WChart',
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const container = ref('tradingview-chart')
        const scriptID = ref('tradingview-chart-script')
        const defualtOptions = {
            width: 980,
            height: 610,
            symbol: 'NASDAQ:AAPL',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'light',
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: 'tradingview-chart',
        }

        const canUseDOM = () => {
            return typeof window !== 'undefined' && window.document && window.document.createElement
        }

        const getScriptElement = () => {
            return document.getElementById(scriptID.value)
        }

        const scriptExists = () => {
            return getScriptElement() !== null
        }

        const appendScript = (onload: () => void) => {
            if (!canUseDOM()) return
            if (scriptExists()) return

            const script = document.createElement('script')
            script.id = scriptID.value
            script.type = 'text/javascript'
            script.async = true
            script.src = 'https://s3.tradingview.com/tv.js'
            script.onload = onload
            document.getElementsByTagName('head')[0].appendChild(script)
        }

        const initWidget = () => {
            setTimeout(() => {
                if (typeof window.TradingView === 'undefined') return

                const options: Options = { ...defualtOptions, ...props.options }
                if (options.container_id !== container.value) {
                    console.error('container_id in Chart component must be "tradingview-chart"')
                    return
                }
                new window.TradingView.widget(Object.assign({ container_id: container }, options))
            }, 300)
        }

        onMounted(() => {
            appendScript(() => initWidget())
        })
        return { container }
    },
})
</script>
