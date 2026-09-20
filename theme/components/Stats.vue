<script setup>
import { computed } from 'vue'

const props = defineProps({ columns: { type: [Number, String], default: 3 } })
const count = computed(() => Math.min(4, Math.max(1, Math.trunc(Number(props.columns)) || 3)))
</script>

<template>
  <div class="s-stats" :style="{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }"><slot /></div>
</template>

<style scoped>
.s-stats { display: grid; gap: 2rem; margin-block: auto; }
</style>