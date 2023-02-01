<script setup lang="ts">
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
