<script setup>
import { computed } from 'vue'
import SlideFrame from '../components/SlideFrame.vue'

const props = defineProps({
  ratio: { type: String, default: '1:1' },
  divider: { type: [Boolean, String], default: true },
  align: { type: String, default: 'center' },
})

const columns = computed(() => {
  const parts = props.ratio.split(':').map(Number)
  const valid = parts.length === 2 && parts.every(value => Number.isFinite(value) && value > 0)
  const [left, right] = valid ? parts : [1, 1]
  return `minmax(0, ${left}fr) minmax(0, ${right}fr)`
})
</script>

<template>
  <SlideFrame class="s-split">
    <div v-if="$slots.header" class="s-split-header"><slot name="header" /></div>
    <div class="s-split-grid" :class="{ 's-split-divided': divider !== false && divider !== 'false', 's-split-top': align === 'top' }" :style="{ gridTemplateColumns: columns }">
      <div class="s-split-column"><slot /></div>
      <div class="s-split-column"><slot name="right" /></div>
    </div>
  </SlideFrame>
</template>

<style scoped>
.s-split-header { flex-shrink: 0; }
.s-split-grid { display: grid; flex: 1; min-height: 0; gap: 2.5rem; align-items: center; }
.s-split-top { align-items: start; }
.s-split-column { position: relative; min-width: 0; }
.s-split-divided .s-split-column + .s-split-column::before { content: ''; position: absolute; left: -1.25rem; top: 0; bottom: 0; width: 1px; background: var(--s-rule); }
.s-split-column :deep(h1) { font-size: 2.8rem; }
</style>