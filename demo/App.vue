<script setup lang="ts">
import Chart from '../src/components/Chart.vue'
import CompanyProfile from '../src/components/CompanyProfile.vue'
import CryptoMarket from '../src/components/CryptoMarket.vue'
import EconomicCalendar from '../src/components/EconomicCalendar.vue'
import ForexCrossRates from '../src/components/ForexCrossRates.vue'
import ForexHeatMap from '../src/components/ForexHeatMap.vue'
import FundamentalData from '../src/components/FundamentalData.vue'
import MarketData from '../src/components/MarketData.vue'
import MarketOverview from '../src/components/MarketOverview.vue'
import MiniChart from '../src/components/MiniChart.vue'
import Screener from '../src/components/Screener.vue'
import SingleTicker from '../src/components/SingleTicker.vue'
import Snaps from '../src/components/Snaps.vue'
import StockMarket from '../src/components/StockMarket.vue'
import SymbolInfo from '../src/components/SymbolInfo.vue'
import SymbolOverview from '../src/components/SymbolOverview.vue'
import TechnicalAnalysis from '../src/components/TechnicalAnalysis.vue'
import Ticker from '../src/components/Ticker.vue'
import TickerTape from '../src/components/TickerTape.vue'
</script>

<template>
    <section><Chart /></section>
    <section><CompanyProfile /></section>
    <section><CryptoMarket /></section>
    <section><EconomicCalendar /></section>
    <section><ForexCrossRates /></section>
    <section><ForexHeatMap /></section>
    <section><FundamentalData /></section>
    <section><MarketData /></section>
    <section><MarketOverview /></section>
    <section><MiniChart /></section>
    <section><Screener /></section>
    <section><SingleTicker /></section>
    <section><StockMarket /></section>
    <section><Snaps /></section>
    <section><SymbolInfo /></section>
    <section><SymbolOverview /></section>
    <section><TechnicalAnalysis /></section>
    <section><Ticker /></section>
    <section><TickerTape /></section>
</template>

<style scoped>
section {
    padding: 40px;
}
</style>
