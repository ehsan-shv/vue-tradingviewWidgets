<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>
<template>
    <button class="the-button">{{ text }}</button>
</template>

<style scoped>
.the-button {
    background-color: rgb(24, 34, 24);
    color: rgb(71, 51, 51);
    padding: 0.5rem;
}
</style>
