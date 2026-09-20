<script setup>
import { computed } from 'vue'

const props = defineProps({ columns: { type: [Number, String], default: 3 } })
const count = computed(() => Math.min(4, Math.max(1, Math.trunc(Number(props.columns)) || 3)))
</script>

<template>
  <div class="s-boxes" :style="{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }"><slot /></div>
</template>

<style scoped>
.s-boxes { display: grid; gap: 0 1.5rem; counter-reset: s-box; margin-block: auto; }
</style>