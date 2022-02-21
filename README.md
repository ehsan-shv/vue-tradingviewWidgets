# vue-tradingview-widgets

## Instalation

```bash
npm i vue-tradingview-widgets
```

## Import in component

```js
<template>
  <Chart />
  <Snaps />
  <Screener/>
</template>

<script lang="ts">
import { Chart, Snaps, Screener } from 'vue-tradingview-widgets';

export default {
  components: { Chart, Snaps, Screener },
};
</script>
```
