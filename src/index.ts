import type { App } from 'vue'
import Chart from './components/Chart.vue'
import CompanyProfile from './components/CompanyProfile.vue'
import CryptoMarket from './components/CryptoMarket.vue'
import EconomicCalendar from './components/EconomicCalendar.vue'
import ForexCrossRates from './components/ForexCrossRates.vue'
import ForexHeatMap from './components/ForexHeatMap.vue'
import FundamentalData from './components/FundamentalData.vue'
import MarketData from './components/MarketData.vue'
import MarketOverview from './components/MarketOverview.vue'
import MiniChart from './components/MiniChart.vue'
import Screener from './components/Screener.vue'
import SingleTicker from './components/SingleTicker.vue'
import Snaps from './components/Snaps.vue'
import StockMarket from './components/StockMarket.vue'
import SymbolInfo from './components/SymbolInfo.vue'
import SymbolOverview from './components/SymbolOverview.vue'
import TechnicalAnalysis from './components/TechnicalAnalysis.vue'
import Ticker from './components/Ticker.vue'
import TickerTape from './components/TickerTape.vue'

export interface PluginOptions {}

export interface TresPlugin {
    [key: string]: any
    install: (app: App, options?: PluginOptions) => void
}

const plugin: TresPlugin = {
    install(app: App) {
        app.component('Chart', Chart)
        app.component('CompanyProfile', CompanyProfile)
        app.component('CryptoMarket', CryptoMarket)
        app.component('EconomicCalendar', EconomicCalendar)
        app.component('ForexCrossRates', ForexCrossRates)
        app.component('ForexHeatMap', ForexHeatMap)
        app.component('FundamentalData', FundamentalData)
        app.component('MarketData', MarketData)
        app.component('MarketOverview', MarketOverview)
        app.component('MiniChart', MiniChart)
        app.component('SingleTicker', SingleTicker)
        app.component('Screener', Screener)
        app.component('StockMarket', StockMarket)
        app.component('Snaps', Snaps)
        app.component('SymbolOverview', SymbolOverview)
        app.component('SymbolInfo', SymbolInfo)
        app.component('TechnicalAnalysis', TechnicalAnalysis)
        app.component('Ticker', Ticker)
        app.component('TickerTape', TickerTape)
    },
}

export default plugin
